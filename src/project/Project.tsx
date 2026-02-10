import { Projects } from "./data/portfolio";
import OriginalLogo from "../common/OriginalLogo";
import ContentsWrapper from "../common/ContentsWrapper";
import ProjectInner from "./ProjectInner";

export default function Project() {
  return (
    <ContentsWrapper title={<OriginalLogo text={"PROJECT"} />}>
      <ProjectInner data={Projects} />
    </ContentsWrapper>
  );
}
