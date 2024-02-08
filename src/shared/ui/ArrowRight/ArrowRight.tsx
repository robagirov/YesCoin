import clsx from "clsx";

interface ArrowRightProps {
  className?: string;
}

export const ArrowRight = ({ className }: ArrowRightProps) => {
  return (
    <div
      className={clsx(
        "absolute border-l-2 border-b-2 border-white/70 rounded-sm h-3.5 w-3.5 top-1/2 right-0 rotate-[225deg] -translate-x-1/2 -translate-y-1/2",
        className,
      )}
    />
  );
};
