import clsx from "clsx";
import { ArrowRight } from "../ArrowRight";

interface SquadItemProps {
  className?: string;
  image?: string;
  title: string;
  subtitle: string;
}

export const SquadItem = ({
  className,
  image,
  title,
  subtitle,
}: SquadItemProps) => {
  return (
    <div
      className={clsx(
        "relative flex items-center space-x-4 p-x-4 rounded-lg",
        className,
      )}
    >
      <img
        src={
          image ||
          "https://vatnikstan.ru/wp-content/uploads/2020/12/mavrodi.jpg"
        }
        className="w-12 h-12 bg-[rgba(243,243,245,0.1)] object-cover"
        alt="Изображение сквада"
      />

      <div className="flex flex-col">
        <span className="text-white">{title}</span>

        <span className="text-sm text-gray-400 opacity-70 font-light">
          {subtitle}
        </span>
      </div>

      <ArrowRight />
    </div>
  );
};
