import { TeamWorkData, TeamWorkData2 } from "./data/teamwork";
import { RiDownload2Line } from "@remixicon/react";
import clsx from "clsx";

export default function TeamworkInner() {
  const DescrpitionClasses = "relative pl-5 mb-1.5";
  const DescClasses =
    "absolute top-2.5 left-1 inline-block w-[6px] h-[6px] rounded-full border border-gray-700 bg-white";

  return (
    <section>
      <div>
        <h2 className="sr-only">팀 활동 역량</h2>
        <div className="mt-3 bg-main-lignt py-5 px-4 rounded-xl whitespace-pre-line text-base">
          함께 성장하며, 기여하는 문화를 구축하기 위해 노력했습니다. {"\n"}
          이러한 역량을 바탕으로 기획, 디자인, 개발 전반적인 프로세스에서 의견을
          제시할 수 있고 {"\n"}문서화를 통해 프로세스를 공유하려 노력합니다.
        </div>
        {TeamWorkData.map((data) => (
          <div
            key={data.id}
            className="md:flex gap-7 mt-10 border-b border-gray-300 pb-10"
          >
            <div className="w-full md:w-auto md:flex-1">
              <p className="text-md font-extrabold mb-2">{data.title}</p>
              <div className="mb-6">
                {data.contents.map((contents) => (
                  <div className={DescrpitionClasses} key={contents.id}>
                    <span className={DescClasses} />
                    {contents.data}
                  </div>
                ))}
              </div>
              <a
                href={data.downloadFile}
                download={data.downloadName}
                className="inline-block border border-gray-400 bg-white rounded-full px-5 pb-1 pt-0.5 duration-200 hover:-translate-y-0.5"
              >
                <RiDownload2Line
                  size={17}
                  className="inline-block mr-2 relative -top-0.5"
                />
                {data.downloadBtnName}
              </a>
            </div>
            <div className="mt-7 md:mt-0 w-full md:w-130 border border-gray-200 rounded-xl overflow-hidden md:min-h-90">
              <img
                src={data.imageFile}
                alt={data.imageAlt}
                loading="eager"
                fetchPriority="high"
                onLoad={(e) => e.currentTarget.classList.add("opacity-100")}
                className="opacity-0 transition-opacity duration-300"
              />
            </div>
          </div>
        ))}

        {TeamWorkData2.map((data) => (
          <div key={data.id} className="mt-10 border-b border-gray-300 pb-10">
            <p className="text-md font-extrabold mb-4">{data.title}</p>
            {data.titledes.map((des) => (
              <div className={DescrpitionClasses} key={des.id}>
                <span className={DescClasses} />
                {des.data}
              </div>
            ))}
            <div className="mt-9 grid  md:grid-cols-2 gap-3 gap-y-8">
              {data.contents.map((cont) => (
                <div
                  key={cont.id}
                  className={clsx(
                    cont.id === "content-2-3" && "col-span-1 md:col-span-2",
                  )}
                >
                  <div className="flex flex-col md:flex-row gap-3 image-container">
                    {cont.imageFile.map((img) => (
                      <div
                        key={img}
                        className="border border-gray-200 rounded-xl overflow-hidden md:min-h-66.5"
                      >
                        <img
                          src={img}
                          alt={cont.imageAlt}
                          loading="eager"
                          fetchPriority="high"
                          onLoad={(e) =>
                            e.currentTarget.classList.add("opacity-100")
                          }
                          className="opacity-0 transition-opacity duration-300"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mt-5">
                    {cont.des.map((des) => (
                      <div className={DescrpitionClasses} key={des.id}>
                        <span className={DescClasses} />
                        {des.contents}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
