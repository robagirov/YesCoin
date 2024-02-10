import clsx from "clsx";

interface SwitchBarProps {
  options: string[];
  activeIndex: number;
  setActiveIndex: (active: number) => void;
}

export const SwitchBar = ({
  options,
  activeIndex,
  setActiveIndex,
}: SwitchBarProps) => {
  return (
    <div className="flex justify-center rounded-t-md p-5 relative bg-[rgba(243,243,245,0.1)]">
      {options.map((option, index) => (
        <button
          key={option}
          className={clsx("text-center w-full p-y-4", {
            ["font-bold"]: index === activeIndex,
          })}
          onClick={() => setActiveIndex(index)}
        >
          {option}
        </button>
      ))}

      <div
        className="absolute bottom-0 left-0 bg-purple-500 h-px transition-transform duration-300 ease-in-out"
        style={{
          width: `${100 / options.length}%`,
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      />
    </div>
  );
};
