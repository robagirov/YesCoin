interface MainCoinProps {
  onClick: () => void;
}

export const MainCoin = ({ onClick }: MainCoinProps) => {
  return (
    <svg
      className="mx-auto w-full h-full"
      onClick={onClick}
      viewBox="0 0 286 286"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="143" cy="143" r="142" fill="#D9D9D9" />
      <circle cx="143" cy="143" r="142" fill="url(#paint0_radial_140_334)" />
      <circle
        cx="143"
        cy="143"
        r="142"
        stroke="url(#paint1_linear_140_334)"
        strokeWidth="2"
      />
      <defs>
        <radialGradient
          id="paint0_radial_140_334"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(143 44.029) rotate(90) scale(215.253 132.422)"
        >
          <stop stopColor="#CCB5FF" />
          <stop offset="1" stopColor="#996BFF" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_140_334"
          x1="272.867"
          y1="30.6428"
          x2="40.8572"
          y2="269.949"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
