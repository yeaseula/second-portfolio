import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface HeadProps {
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
  tabcontent: { id: number; title: string }[];
}

export default function TabHeader({
  activeTab,
  setActiveTab,
  tabcontent,
}: HeadProps) {
  return (
    <div className="flex">
      {tabcontent.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <div key={`${tab.id}-${tab.title}`} className="flex-1 relative">
            <div
              className={clsx(
                "w-full text-md py-2 text-main text-center cursor-pointer",
                isActive && "font-extrabold",
              )}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </div>
            {isActive && (
              <motion.div
                layoutId="active-underline"
                className="absolute -bottom-2 w-full h-1 rounded-md bg-main"
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 40,
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
