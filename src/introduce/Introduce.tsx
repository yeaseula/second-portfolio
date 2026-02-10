import ContentsWrapper from "../common/ContentsWrapper";
import OriginalLogo from "../common/OriginalLogo";
import { IntroduceInner } from "./IntroduceInner";

export default function Introduce() {
  return (
    <ContentsWrapper title={<OriginalLogo text={"Introduce"} />}>
      <IntroduceInner />
    </ContentsWrapper>
  );
}
