import ContentsWrapper from "../common/ContentsWrapper";
import OriginalLogo from "../common/OriginalLogo";
import SkillsInner from "./skillsInner";

export default function Skills() {
  return (
    <ContentsWrapper title={<OriginalLogo text={"Technical Skills"} />}>
      <SkillsInner />
    </ContentsWrapper>
  );
}
