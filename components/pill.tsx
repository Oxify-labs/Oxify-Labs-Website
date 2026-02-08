import { cn } from "@/lib/utils";
import { px } from "./utils";

export const Pill = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div
      className={cn("bg-white/5 transform-gpu font-medium text-white backdrop-blur-md font-mono text-xs tracking-wider inline-flex items-center justify-center px-4 py-2 border border-white/20 rounded-full shadow-[0_0_20px_-5px_rgba(255,255,255,0.2)]", className)}
    >
      <span className="inline-block size-2 rounded-full bg-white mr-2 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
      {children}
    </div>
  );
};
