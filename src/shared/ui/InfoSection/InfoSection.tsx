import clsx from "clsx";

interface InfoSectionProps {
  message: string;
  className?: string;
}

export const InfoSection = ({ message, className }: InfoSectionProps) => {
  return (
    <p
      className={clsx(
        "w-full text-center text-base font-medium leading-6 text-white text-opacity-70 mx-auto",
        className,
      )}
    >
      {message}
    </p>
  );
};
