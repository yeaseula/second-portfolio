import ContentsWrapper from "../common/ContentsWrapper";
import OriginalLogo from "../common/OriginalLogo";
import ActivityInner from "./activityInner";

export default function Activity() {
  return (
    <ContentsWrapper title={<OriginalLogo fonts={"3rem"} text={"Activity"} />}>
      <ActivityInner></ActivityInner>
    </ContentsWrapper>
  );
}
