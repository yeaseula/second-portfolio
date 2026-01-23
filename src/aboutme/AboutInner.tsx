import { RiGithubFill, RiBloggerFill, RiMailAiFill } from "@remixicon/react";
export function AboutInner() {
  return (
    <section className="">
      <div>
        <div className="mt-5 grid grid-cols-2 gap-4">
          <div className="bg-white py-5 px-6 rounded-2xl shadow-sm">
            <p className="text-3xl ff-b mb-4">저는 이런 개발을 지향합니다.</p>
            <p>• 의견을 명확히 제시하고, 공유하며 함께 성장합니다.</p>
            <p>• 디자인 의도를 이해하려 노력합니다.</p>
            <p>
              • 작게 나누고, 재사용을 전제로 컴포넌트 설계하는 것을 좋아합니다.
            </p>
          </div>
          <div className=" bg-white py-5 px-6 rounded-2xl shadow-sm">
            <p className="text-3xl ff-b">김예슬 · Frontend Developer</p>
            <p className="mt-4">
              <a
                href="https://github.com/yeaseula"
                target="_blank"
                className="flex gap-2"
              >
                <RiGithubFill /> 깃허브 바로가기
              </a>
            </p>
            <p className="mt-2">
              <a
                href="https://velog.io/@somv/posts"
                target="_blank"
                className="flex gap-2"
              >
                <RiBloggerFill /> 블로그 바로가기
              </a>
            </p>
            <p className="mt-2">
              <a
                href="mailto:somv12@naver.com"
                target="_blank"
                className="flex gap-2"
              >
                <RiMailAiFill /> somv12@naver.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-15">
        <h2>성실함의 지표</h2>
        <div className="mt-5 grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden p-2">
            <img
              src="/image/introduce/about-blog.png"
              alt="블로그 작성 기록 샘플"
            />
          </div>
          <div>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden p-2">
              <img src="/image/about-commit.png" alt="깃 커밋 샘플" />
            </div>
            <p className="mt-10">
              지난 한 해 <span className="ff-b">1,700회 이상</span>의 커밋과
              <br />
              <span className="ff-b"> 50편 이상</span>의 기술 블로그를 작성하며
              <br />
              학습한 내용을 정리 및 공유했습니다.
              <br />
              이를 통해 개발을 꾸준히 이어가기 위한
              <span className="ff-b"> 습관</span>을 다지고
              <br />
              <span className="ff-b">기술에 대한 관심</span>을 계속 유지하려
              노력했습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
