import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import clsx from "clsx";

const TabHead = styled.div`
  margin-top: 40px;
  display: flex;
`;
const TabButton = styled.button<{ $active: boolean }>`
  width: 100%;
  background: transparent;
  font-size: 1.8rem;
  padding: 6px 0;
  box-shadow: none;
  border: none;
  cursor: pointer;
  color: var(--main_color);
`;

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
    <TabHead>
      {tabcontent.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <div key={`${tab.id}-${tab.title}`} className="flex-1 relative text-">
            <TabButton
              className={clsx(isActive && "ff-b")}
              $active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </TabButton>
            {isActive && (
              <motion.div
                layoutId="active-underline"
                className="absolute -bottom-2 w-full h-1 rounded-md bg-(--main_color)"
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
    </TabHead>
  );
}
