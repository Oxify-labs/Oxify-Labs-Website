import React from "react";

export const Logo = ({ className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <img
      src="/logo.svg"
      alt="Oxify Labs"
      className={className}
      {...props}
    />
  );
};
