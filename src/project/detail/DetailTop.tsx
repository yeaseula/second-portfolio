import { PortfolioType } from "./types/type";
import { RiGithubFill, RiLinksFill } from "@remixicon/react";

export default function DetailTop({
  targetdata,
}: {
  targetdata: PortfolioType;
}) {
  const LinkClassess =
    "w-13 h-13 flex justify-center items-center bg-white rounded-full border border-gray-300 duration-200 hover:scale-95";

  return (
    <>
      <div className="flex justify-end gap-3">
        <a className={LinkClassess} href={targetdata.github_url}>
          <RiGithubFill size={25} />
        </a>
        <a className={LinkClassess} href={targetdata.site_url}>
          <RiLinksFill size={22} />
        </a>
      </div>
    </>
  );
}
