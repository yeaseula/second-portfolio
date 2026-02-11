import { ActivityData } from "./data/activity";
import { RiLinksLine } from "@remixicon/react";

export default function ActivityInner() {
  return (
    <>
      {ActivityData.map((item) => (
        <div key={item.title}>
          <h3 className="font-pretendard font-extrabold text-md mb-2 pl-2 py-1 rounded-md bg-main-lignt">
            {item.title}
            <span className="text-sm font-normal inline-block ml-2">
              ({item.contents.period})
            </span>
          </h3>
          <p className="font-pretendard font-extrabold mb-2 text-base mt-3">
            <a
              href={item.contents.link}
              target="_blank"
              className="flex w-fit gap-2"
            >
              <RiLinksLine />
              {item.contents.link}
            </a>
          </p>
          <ul className="mt-5">
            {item.contents.contents.map((i, idx) => (
              <li key={idx} className="mb-1">
                - {i}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
