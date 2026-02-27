import TabHeader from "./TabHeader";
import TabBody from "./TabBody";
import { RefObject, useState, useEffect } from "react";
import { TabContent } from "../../../types/portfolio";
import {
  TABCONTENTS,
  TABCONTENTS_TYPE2,
  TABCONTENTS_TEAM,
} from "../../data/tab";

export default function TabContents({
  contentsId,
  targetRef,
  tabContent,
}: {
  contentsId: string | undefined;
  tabContent: TabContent;
  targetRef: RefObject<HTMLDivElement | null>;
}) {
  const [activeTab, setActiveTab] = useState<number>(1);

  let tab_content;

  if (contentsId === "fighthero") {
    tab_content = TABCONTENTS_TYPE2;
  } else if (contentsId === "bbangri") {
    tab_content = TABCONTENTS_TEAM;
  } else {
    tab_content = TABCONTENTS;
  }

  useEffect(() => {
    if (targetRef.current) {
      const storedScrollTop = localStorage.getItem(`scroll_${contentsId}`);
      if (storedScrollTop) {
        targetRef.current.scrollTop = parseInt(storedScrollTop, 10);
      }
    }
  }, [contentsId]);

  return (
    <div className="bg-white py-3 px-4 mt-8 rounded-xl border border-gray-300">
      <TabHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabcontent={tab_content}
      />
      <TabBody activeTab={activeTab} tabContent={tabContent} />
    </div>
  );
}
