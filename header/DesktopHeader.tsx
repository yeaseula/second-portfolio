import { NavLink, useLocation, matchPath } from "react-router-dom";
import { motion } from "framer-motion";
import { navItems } from "./data";
import clsx from "clsx";

export const DesktopHeader = () => {
  const { pathname } = useLocation();
  return (
    <header className="border-b border-gray-200 py-5 max-w-[970px] w-full md:flex gap-4 items-center justify-start bg-background hidden">
      <h1 className="sr-only">김예슬의 포트폴리오</h1>
      {navItems.map((items) => {
        const isActive = matchPath({ path: items.pathname + "/*" }, pathname);
        return (
          <NavLink
            key={items.pathname}
            to={items.pathname}
            className="relative px-4 py-2 font-medium"
          >
            {isActive && (
              <motion.div
                layoutId="active-indicator"
                className="absolute inset-0 rounded-md bg-main"
                transition={{ type: "spring", stiffness: 500, damping: 40 }}
              />
            )}
            <span
              className={clsx(
                "relative z-10 capitalize transition duration-200 text-base font-pretendard tracking-wide",
                isActive && "text-white font-bold",
              )}
            >
              {items.title}
            </span>
          </NavLink>
        );
      })}
    </header>
  );
};
