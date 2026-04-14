import { useCounter } from '../../hooks/useCounter';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

export function AnimatedCounter({ end, duration = 2, suffix = "" }: AnimatedCounterProps) {
  const { count, ref } = useCounter(end, duration);

  return <span ref={ref}>{count}{suffix}</span>;
}
