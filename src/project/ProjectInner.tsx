import { NavLink } from "react-router-dom";
import { projectInforType } from "./types/type";
import { SkillHashColor } from "./data/skills";
import clsx from "clsx";

export default function ProjectInner({ data }: { data: projectInforType[] }) {
  return (
    <section>
      {data.map((data) => (
        <div
          key={data.contentsId}
          className="relative mb-9 duration-250 hover:-translate-y-1"
        >
          <NavLink
            to={`/project/${data.contentsId}`}
            className="absolute inset-0"
          />
          <div className="w-full flex gap-5">
            <figure>
              <img
                src={data.src}
                srcSet={data.srcSet}
                alt={data.alt}
                loading="lazy"
                width={200}
                height={303}
              />
              <figcaption className="sr-only">{data.srOnly}</figcaption>
            </figure>
            <div className="pt-4">
              <p className="flex gap-1.5 mb-5 text-md font-extrabold">
                <span>{data.title}</span>
                <span>·</span>
                <span className="tracking-tighter">{data.period}</span>
                <span>·</span>
                <span>{data.contribution}</span>
              </p>
              <div className="flex gap-2 mb-4">
                {data.skills.map((ele) => {
                  const skill =
                    SkillHashColor[ele as keyof typeof SkillHashColor];
                  return (
                    <span
                      className={clsx(
                        "rounded-full font-pretendard text-xs py-1 px-3 inline-block bg-[#E5E7EB]",
                      )}
                      key={ele}
                      style={{
                        backgroundColor: skill?.bg ?? "#E5E7EB",
                        color: skill?.text ?? "#111827",
                      }}
                    >
                      {ele}
                    </span>
                  );
                })}
              </div>
              <div>
                {data.description.map((ele) => (
                  <p key={ele.id}>{ele.des}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
