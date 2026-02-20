import { useParams } from "react-router-dom";
import ContentsWrapper from "../../common/ContentsWrapper";
import DetailTop from "./DetailTop";
import TabContents from "./tab/TabContents";
import { memo, useEffect, useRef, useState } from "react";
import { portfolioDetail } from "./data/portfolio";
import { AllPortfolioTypes } from "../../types/portfolio";
import { parseMarkdownByTab } from "../../types/mdType";

const ProjectDetail = memo(() => {
  const { id } = useParams();

  const tabRef = useRef<HTMLDivElement>(null);

  const [targetdata, setTargetData] = useState<AllPortfolioTypes>({
    topDataType: null,
    tapDataType: null,
  });

  useEffect(() => {
    if (!id) return;
    const target = portfolioDetail.find((val) => val.id === id);
    if (!target) return;
    import(`./data/portfolio-content/${id}.md?raw`).then((module) => {
      const parsed = parseMarkdownByTab(module.default);
      setTargetData({
        topDataType: target,
        tapDataType: parsed,
      });
    });
  }, [id]);

  if (!targetdata.topDataType || !targetdata.tapDataType) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-main"></div>
        <p>로딩중 입니다!</p>
      </div>
    );
  }

  return (
    <ContentsWrapper>
      <h2 className="sr-only">상세 설명</h2>

      <div className="w-full rounded-xl h-130 bg-main-lignt relative border border-gray-300 overflow-hidden">
        {id === "onharu" && (
          <div className="w-full h-full flex justify-center items-center">
            데모 영상은 준비중입니다!
          </div>
        )}
        {id !== "onharu" && (
          <video
            className="absolute inset-0 object-cover w-full h-full block border-none outline-none"
            controls
            autoPlay
            muted
            loop
          >
            <source src={`/video/${id}.mp4`} type="video/mp4" />
          </video>
        )}
      </div>
      <div className="relative py-7">
        <DetailTop targetdata={targetdata.topDataType} />
        <TabContents
          contentsId={id}
          targetRef={tabRef}
          tabContent={targetdata.tapDataType}
        />
      </div>
    </ContentsWrapper>
  );
});

export default ProjectDetail;
