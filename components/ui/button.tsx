import * as React from "react"
import { Slot, Slottable } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { px } from "../utils"

const buttonVariants = cva(
  "inline-flex relative uppercase border font-mono cursor-pointer items-center font-medium has-[>svg]:px-3 justify-center gap-2 whitespace-nowrap font-medium ease-out transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive [clip-path:polygon(var(--poly-roundness)_0,calc(100%_-_var(--poly-roundness))_0,100%_0,100%_calc(100%_-_var(--poly-roundness)),calc(100%_-_var(--poly-roundness))_100%,0_100%,0_calc(100%_-_var(--poly-roundness)),0_var(--poly-roundness))]",
  {
    variants: {
      variant: {
        default: "bg-background/80 backdrop-blur-sm border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 [&>[data-border]]:bg-primary [box-shadow:inset_0_0_20px_0px_rgba(255,199,0,0.1)] hover:[box-shadow:inset_0_0_40px_0px_rgba(255,199,0,0.2)]",
      },
      size: {
        default: "h-16 px-6 text-base",
        sm: "h-14 px-6 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    const polyRoundness = 16
    const hypotenuse = polyRoundness * 2
    const hypotenuseHalf = polyRoundness / 2 - 1.5

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        style={{
          "--poly-roundness": px(polyRoundness),
        } as React.CSSProperties}
        {...props}
      >
        <span data-border="top-left" style={{ "--h": px(hypotenuse), "--hh": px(hypotenuseHalf) } as React.CSSProperties} className="absolute inline-block w-(--h) top-(--hh) left-(--hh) h-[2px] -rotate-45 origin-top -translate-x-1/2" />
        <span data-border="bottom-right" style={{ "--h": px(hypotenuse), "--hh": px(hypotenuseHalf) } as React.CSSProperties} className="absolute w-(--h) bottom-(--hh) right-(--hh) h-[2px] -rotate-45 translate-x-1/2" />
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
