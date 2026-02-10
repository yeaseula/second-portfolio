import ActiveOne from "../activeTab/ActiveOne";
import ActiveTwo from "../activeTab/ActiveTwo";
import ActiveThree from "../activeTab/ActiveThree";
import ActiveFour from "../activeTab/ActiveFour";
import { TabContent } from "../../../types/portfolio";
import "../style/Detail.css";

const ContainerClasses = "portfolio py-8 px-2 text-md";

export default function TabBody({
  activeTab,
  tabContent,
}: {
  activeTab: number;
  tabContent: TabContent;
}) {
  if (activeTab === 1) {
    return (
      <div className={ContainerClasses}>
        <ActiveOne tabContent={tabContent.description} />
      </div>
    );
  }
  if (activeTab === 2) {
    return (
      <div className={ContainerClasses}>
        <ActiveTwo tabContent={tabContent.skills || tabContent.skillPoint} />
      </div>
    );
  }
  if (activeTab === 3) {
    return (
      <div className={ContainerClasses}>
        <ActiveThree tabContent={tabContent.trouble} />
      </div>
    );
  }
  if (activeTab === 4) {
    return (
      <div className={ContainerClasses}>
        <ActiveFour tabContent={tabContent.retrospect} />
      </div>
    );
  }
  return <></>;
}
