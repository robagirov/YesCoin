import clsx from "clsx";

interface BoostCardProps {
  className?: string;
}

export const BoostCard = ({ className }: BoostCardProps) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-center gap-x-2 w-2/4 h-16 rounded-md bg-[rgba(243,243,245,0.1)]",
        className,
      )}
    >
      <div>
        <div className="flex flex-col">Turbo</div>
        <div className="text-sm font-light opacity-70">3/3 активно</div>
      </div>

      <div className="w-12 h-12 rounded-md bg-[rgba(243,243,245,0.1)] object-cover" />
    </div>
  );
};
