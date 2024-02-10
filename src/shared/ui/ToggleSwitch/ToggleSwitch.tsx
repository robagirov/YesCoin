import clsx from "clsx";

interface ToggleSwitchProps {
  options: string[];
  activeIndex: number;
  setActiveIndex: (active: number) => void;
  className?: string;
}

export const ToggleSwitch = ({
  options,
  activeIndex,
  setActiveIndex,
  className,
}: ToggleSwitchProps) => {
  return (
    <div
      className={clsx(
        "flex h-11 gap-2.5 p-1.5 items-center w-full bg-[rgba(243,243,245,0.1)] rounded-xl",
        className,
      )}
    >
      <div
        className="absolute w-[151px] h-9 rounded-xl bg-[rgb(153,107,255)] transition-transform duration-150 ease-in-out"
        style={{ transform: `translateX(${activeIndex * (100 + 14)}%)` }}
      />

      {options.map((option, index) => (
        <button
          key={index}
          className="relative flex w-full h-full justify-center items-center gap-2.5 rounded-xl font-medium  duration-300 ease-in-out"
          onClick={() => setActiveIndex(index)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
