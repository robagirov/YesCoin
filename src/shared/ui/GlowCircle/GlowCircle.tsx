import styles from "./GlowCircle.module.css";
import clsx from "clsx";

interface GlowCircleProps {
  position: "top" | "middle-top" | "center" | "bottom";
  isTriple?: boolean;
  className?: string;
}

export const GlowCircle = ({
  position,
  // isTriple,
  className,
}: GlowCircleProps) => {
  return (
    <div
      className={clsx(
        styles.wrapper,
        {
          [styles.top]: position === "top",
          [styles.middleTop]: position === "middle-top",
          [styles.center]: position === "center",
          [styles.bottom]: position === "bottom",
        },
        className,
      )}
    >
      <svg
        width="390"
        height="520"
        viewBox="0 0 390 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_211_350)">
          <circle cx="195" cy="165.5" r="262.5" fill="#372759" />
        </g>
        <g filter="url(#filter1_f_211_350)">
          <circle cx="183.162" cy="196.897" r="218.75" fill="#483377" />
        </g>
        <g filter="url(#filter2_f_211_350)">
          <circle cx="183.162" cy="168.073" r="189.926" fill="#64518E" />
        </g>
        <g opacity="0.35" filter="url(#filter3_f_211_350)">
          <circle cx="174.926" cy="119.691" r="99.3382" fill="#64518E" />
          <circle cx="174.926" cy="119.691" r="99.3382" fill="#D9D9D9" />
        </g>
        <defs>
          <filter
            id="filter0_f_211_350"
            x="-158.9"
            y="-188.4"
            width="707.8"
            height="707.8"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="45.7"
              result="effect1_foregroundBlur_211_350"
            />
          </filter>
          <filter
            id="filter1_f_211_350"
            x="-126.988"
            y="-113.253"
            width="620.3"
            height="620.3"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="45.7"
              result="effect1_foregroundBlur_211_350"
            />
          </filter>
          <filter
            id="filter2_f_211_350"
            x="-98.1646"
            y="-113.253"
            width="562.653"
            height="562.653"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="45.7"
              result="effect1_foregroundBlur_211_350"
            />
          </filter>
          <filter
            id="filter3_f_211_350"
            x="-64.9117"
            y="-120.147"
            width="479.677"
            height="479.677"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="70.25"
              result="effect1_foregroundBlur_211_350"
            />
          </filter>
        </defs>
      </svg>

      {/*<div className={styles.glow} />*/}

      {/*<div className={styles.glow} />*/}
      {/**/}
      {/*{isTriple && <div className={styles.glow} />}*/}
    </div>
  );
};
