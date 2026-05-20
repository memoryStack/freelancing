import { type ReactNode, useEffect, useRef } from "react";

type SlideStepsProps = {
  step: number;
  children: ReactNode[];
};

/**
 * Horizontal slide between step panels. Forward: current slides left, next enters from right.
 */
export function SlideSteps({ step, children }: SlideStepsProps) {
  const prevStep = useRef(step);

  useEffect(() => {
    prevStep.current = step;
  }, [step]);

  const direction = step >= prevStep.current ? "forward" : "back";

  return (
    <div className="overflow-hidden">
      <div
        className="flex w-full transition-transform duration-300 ease-in-out"
        style={{
          width: `${children.length * 100}%`,
          transform: `translateX(-${(step * 100) / children.length}%)`,
        }}
        data-direction={direction}
      >
        {children.map((panel, index) => (
          <div
            key={index}
            className="w-full shrink-0"
            style={{ width: `${100 / children.length}%` }}
            aria-hidden={index !== step}
          >
            {panel}
          </div>
        ))}
      </div>
    </div>
  );
}
