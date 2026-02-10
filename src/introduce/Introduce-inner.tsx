import clsx from "clsx";
import { Introduce, IntroduceContact } from "./data/data";
export const IntroduceInner = () => {
  const GridClasses = "mt-5 grid grid-cols-2 gap-4";
  const BoxClasses = "bg-white rounded-2xl shadow-sm overflow-hidden";
  const TitleClasses = "text-3xl font-bold pb-2";

  return (
    <section>
      <div>
        <div className={GridClasses}>
          <div className={clsx("py-5 px-6", BoxClasses)}>
            <p className={TitleClasses}>{Introduce.title}</p>
            {Introduce.contents.map((i) => (
              <p key={i.id} className="mt-1">
                • {i.cont}
              </p>
            ))}
          </div>
          <div className={clsx("py-5 px-6", BoxClasses)}>
            <p className={TitleClasses}>{IntroduceContact.title}</p>
            {IntroduceContact.contents.map((i) => (
              <p key={i.id} className="mt-2">
                <a href={i.link} target="_blank" className="flex gap-2 w-fit">
                  {<i.icon />} {i.cont}
                </a>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-15">
        <p className={TitleClasses}>성실함의 지표</p>
        <div className={GridClasses}>
          <div className={clsx("p-2", BoxClasses)}>
            <img
              src="/image/introduce/about-blog.png"
              alt="블로그 작성 기록 샘플"
            />
          </div>
          <div>
            <div className={clsx("p-2", BoxClasses)}>
              <img src="/image/about-commit.png" alt="깃 커밋 샘플" />
            </div>
            <div className="mt-10">
              <p>
                지난 한 해 <b>1,700회 이상</b>의 커밋과
              </p>
              <p>
                <span className="ff-b"> 50편 이상</span>의 기술 블로그를
                작성하며
              </p>
              <p>학습한 내용을 정리 및 공유했습니다.</p>
              이를 통해 개발을 꾸준히 이어가기 위한
              <span className="ff-b"> 습관</span>을 다지고
              <span className="ff-b">기술에 대한 관심</span>을 계속 유지하려
              노력했습니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
