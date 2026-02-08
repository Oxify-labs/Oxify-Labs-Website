"use client";

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { forwardRef, useRef, useMemo, useLayoutEffect, useEffect } from 'react';
import { Color, Mesh, ShaderMaterial, Vector2 } from 'three';

const hexToNormalizedRGB = (hex: string) => {
    hex = hex.replace('#', '');
    return [
        parseInt(hex.slice(0, 2), 16) / 255,
        parseInt(hex.slice(2, 4), 16) / 255,
        parseInt(hex.slice(4, 6), 16) / 255
    ];
};

const vertexShader = `
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;
uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform float uScroll;
uniform vec2 uMouse;
uniform float uNoiseIntensity;

// Simplex 2D noise
vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

// Fractal Brownian Motion
float fbm(vec2 x) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    // Rotate to reduce axial bias
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
    for (int i = 0; i < 5; ++i) {
        v += a * snoise(x);
        x = rot * x * 2.0 + shift;
        a *= 0.5;
    }
    return v;
}

void main() {
    vec2 st = vUv;
    // Parallax shift based on scroll
    st.y -= uScroll * 0.5;
    
    // Mouse influence
    float dist = distance(st, uMouse);
    float mouseInteraction = smoothstep(0.5, 0.0, dist) * 0.1;

    vec2 q = vec2(0.);
    q.x = fbm( st + 0.00 * uTime);
    q.y = fbm( st + vec2(1.0));

    vec2 r = vec2(0.);
    r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.15*uTime - mouseInteraction );
    r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ 0.126*uTime );

    float f = fbm(st+r);

    // Mix two colors based on the noise value
    vec3 color = mix(uColor1, uColor2, clamp((f*f)*4.0, 0.0, 1.0));

    // Pattern for "data" feel - subtle grid or lines could go here
    // For now, keeping it fluid energy
    
    float alpha = 1.0; 
    
    // Add grain/noise
    float grain = (fract(sin(dot(vUv, vec2(12.9898,78.233)*2.0)) * 43758.5453) - 0.5) * uNoiseIntensity;
    
    gl_FragColor = vec4((f*f*f+.6*f*f+.5*f)*color + grain, 1.0);
}
`;

interface SilkPlaneProps {
    uniforms: { [uniform: string]: { value: any } };
}

const SilkPlane = forwardRef<Mesh, SilkPlaneProps>(function SilkPlane({ uniforms }, ref) {
    const { viewport, mouse } = useThree();
    const meshRef = ref as React.MutableRefObject<Mesh>;

    useLayoutEffect(() => {
        if (meshRef.current) {
            meshRef.current.scale.set(viewport.width, viewport.height, 1);
        }
    }, [meshRef, viewport]);

    useFrame((state: any, delta: number) => {
        if (meshRef.current) {
            const material = meshRef.current.material as ShaderMaterial;
            material.uniforms.uTime.value += delta * 0.2;
            material.uniforms.uMouse.value.set((mouse.x + 1) / 2, (mouse.y + 1) / 2);
            if (typeof window !== 'undefined') {
                material.uniforms.uScroll.value = window.scrollY / window.innerHeight;
            }
        }
    });

    return (
        <mesh ref={meshRef}>
            <planeGeometry args={[1, 1, 1, 1]} />
            <shaderMaterial uniforms={uniforms} vertexShader={vertexShader} fragmentShader={fragmentShader} />
        </mesh>
    );
});
SilkPlane.displayName = 'SilkPlane';

interface SilkProps {
    color1?: string;
    color2?: string;
    noiseIntensity?: number;
}

const Silk = ({ color1 = '#121214', color2 = '#2A2A2E', noiseIntensity = 0.15 }: SilkProps) => {
    const meshRef = useRef<Mesh>(null);

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uColor1: { value: new Color(...(hexToNormalizedRGB(color1) as [number, number, number])) },
            uColor2: { value: new Color(...(hexToNormalizedRGB(color2) as [number, number, number])) },
            uScroll: { value: 0 },
            uMouse: { value: new Vector2(0, 0) },
            uNoiseIntensity: { value: noiseIntensity }
        }),
        [color1, color2, noiseIntensity]
    );

    return (
        <div id="webgl">
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 1] }} resize={{ scroll: false }}>
                <SilkPlane ref={meshRef} uniforms={uniforms} />
            </Canvas>
        </div>
    );
};

export default Silk;
