import clsx from "clsx";
import { ArrowRight } from "../../shared/ui";

interface BoostItemProps {
  className?: string;
  cost: number;
  title: string;
  picture?: string;
  onClick?: () => void;
}

export const BoostOption = ({
  className,
  onClick,
  cost,
  title,
  picture,
}: BoostItemProps) => {
  return (
    <div className={clsx("flex gap-x-4 relative", className)} onClick={onClick}>
      <img
        src={
          picture ||
          "https://contenthub-static.crypto.com/wp_media/2023/05/WHAT_ARE_MEMECOINS_OTP.jpg"
        }
        className="w-16 h-16 rounded-md bg-[rgba(243,243,245,0.1)] object-cover"
        alt="Фото профиля"
      />

      <div className="flex-1 relative flex flex-col justify-center">
        <div>
          <span className="text-white text-opacity-70 leading-6">{title}</span>
        </div>

        <div className="flex gap-x-3">
          <span className="font-light text-sm text-purple-500">
            {cost.toLocaleString()}
          </span>

          <span className="text-white font-light text-sm text-opacity-70">
            9 lvl
          </span>
        </div>
      </div>

      <ArrowRight />
    </div>
  );
};
