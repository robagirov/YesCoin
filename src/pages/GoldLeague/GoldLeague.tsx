import {
  BackCard,
  ListItem,
  PageTitle,
  SwitchBar,
  GlowCircle,
  ViewMarkup,
  EnergyRemain,
  ToggleSwitch,
} from "shared/ui";
import { useState } from "react";
import { squadTopList } from "./model/mock.ts";
import { Link } from "react-router-dom";
import { ROUTES } from "shared/consts";

export const GoldLeague = () => {
  const [activeType, setActiveType] = useState(0);
  const [activePeriod, setActivePeriod] = useState(0);

  return (
    <ViewMarkup>
      <div className="z-10 h-full flex flex-col justify-between">
        <Link to={ROUTES.MAJOR_DIGITS}>
          <div className="flex items-center justify-between py-1 pl-3 pr-2 bg-[rgba(243,243,245,0.1)] p-2 rounded-md">
            <div className="flex gap-x-2 items-center">
              <div className="flex -space-x-1">
                <div className="w-4 h-4 bg-white rounded-full"></div>
                <div className="w-4 h-4 bg-[rgb(243,243,245)] rounded-full"></div>
                <div className="w-4 h-4 bg-[rgb(221,221,221)] rounded-full"></div>
              </div>

              <span className="">32,543,654 YesCoiners</span>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white opacity-70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </Link>

        <div>
          <PageTitle title="Золотая Лига" className="mb-2.5" />

          <p className="opacity-30 text-center mb-1">929,324 / 2M</p>

          <EnergyRemain className="mb-2" />

          <ToggleSwitch
            className="mb-4"
            activeIndex={activePeriod}
            options={["Miners", "Squads"]}
            setActiveIndex={setActivePeriod}
          />

          <div>
            <SwitchBar
              options={["День", "Неделя"]}
              activeIndex={activeType}
              setActiveIndex={setActiveType}
            />

            <BackCard height={360} className="rounded-none">
              {squadTopList?.[activeType]?.map((person, index) => (
                <ListItem
                  key={index}
                  number={person.number}
                  title={person.title}
                  subtitle={person.subtitle}
                />
              ))}
            </BackCard>
          </div>
        </div>
      </div>

      <GlowCircle position="top" />
    </ViewMarkup>
  );
};
