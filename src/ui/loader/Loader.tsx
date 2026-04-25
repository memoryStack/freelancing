import clsx from "clsx";
import type { CSSProperties } from "react";
import "./loader.scss";

export interface LoaderProps {
  className?: string;
  color?: string;
  style?: CSSProperties;
}

export function Loader({ className, color, style }: LoaderProps) {
  return (
    <div
      className={clsx("ui-loader", className)}
      style={{
        color: color ?? "var(--md-sys-color-primary)",
        ...style,
      }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.4"
          d="M2,12A11.2,11.2,0,0,1,13,1.05C12.67,1,12.34,1,12,1a11,11,0,0,0,0,22c.34,0,.67,0,1-.05C6,23,2,17.74,2,12Z"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="0.6s"
            values="0 12 12;360 12 12"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
}
