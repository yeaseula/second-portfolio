import { PortfolioType } from "../../types/portfolio";
import { RiGithubFill, RiLinksFill } from "@remixicon/react";

export default function DetailTop({
  targetdata,
}: {
  targetdata: PortfolioType;
}) {
  const LinkClassess =
    "w-18 h-18 flex justify-center items-center bg-white rounded-full border border-gray-300 duration-200 hover:scale-85";

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
