import { useNavigate, NavLink } from "react-router-dom";
import styled from "styled-components";
import { projectInforType } from "../types/portfolio";
import PostCard from "./poster/PosterCard";

export default function ProjectInner({ data }: { data: projectInforType[] }) {
  return (
    <main>
      {data.map((data) => (
        <div key={data.contentsId} className="relative mb-9">
          <NavLink
            to={`/project/${data.contentsId}`}
            className="absolute inset-0"
          ></NavLink>
          <div className="w-full flex gap-8">
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
              <p className="flex gap-1.5 mb-5">
                <span className="font-bold">{data.title}</span>
                <span>·</span>
                <span>{data.period}</span>
                <span>·</span>
                <span>{data.contribution}</span>
              </p>
              <div className="flex gap-2.5 mb-8">
                {data.skills.map((ele) => (
                  <HashTag key={ele}>{ele}</HashTag>
                ))}
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
    </main>
  );
}

const HashTag = styled.span`
  border-radius: 50px;
  background-color: pink;
  font-size: 1.4rem;
  color: #000000;
  padding: 1px 10px;
`;
