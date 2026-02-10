import ContentsWrapper from "../common/ContentsWrapper";
import OriginalLogo from "../common/OriginalLogo";
import { IntroduceInner } from "./Introduce-inner";

export default function Introduce() {
  return (
    <ContentsWrapper title={<OriginalLogo fonts={"3rem"} text={"Introduce"} />}>
      <IntroduceInner />
    </ContentsWrapper>
  );
}
