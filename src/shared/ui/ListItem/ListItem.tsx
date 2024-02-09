interface ListItemProps {
  className?: string;
  number: number;
  avatar?: string;
  title: string;
  subtitle: string;
}

export const ListItem = ({
  number,
  avatar,
  title,
  subtitle,
}: ListItemProps) => {
  return (
    <div className="flex items-center space-x-4 p-x-4 rounded-lg">
      <div className="text-white">{number}</div>

      <img
        src={
          avatar ||
          "https://vatnikstan.ru/wp-content/uploads/2020/12/mavrodi.jpg"
        }
        className="w-12 h-12 rounded-full bg-[rgba(243,243,245,0.1)] object-cover"
        alt="Фото профиля"
      />

      <div className="flex flex-col">
        <span className="text-white text-lg">{title}</span>

        <span className="text-sm text-gray-400 opacity-70 font-light">
          {subtitle}
        </span>
      </div>
    </div>
  );
};
