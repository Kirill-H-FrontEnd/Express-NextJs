import { cn } from "@/lib/utils";
import { useId } from "react";

interface DotPatternProps {
  width?: any;
  height?: any;
  x?: any;
  y?: any;
  cx?: any;
  cy?: any;
  cr?: any;
  className?: string;
  [key: string]: any;
}
export function DotPattern({
  width = 22,
  height = 22,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  ...props
}: DotPatternProps) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-white/20 ",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <circle
            id="pattern-circle"
            cx={cy}
            cy={cy}
            r={cr}
            className="animate-pulse"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  );
}

export default DotPattern;
