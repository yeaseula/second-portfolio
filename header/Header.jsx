import { NavLink, useLocation, matchPath } from "react-router-dom";
import { motion } from "framer-motion";

import clsx from "clsx";

const navItems = [
  {
    pathname: "/introduce",
    title: "Introduce",
  },
  {
    pathname: "/teamwork",
    title: "Teamwork Skills",
  },
  {
    pathname: "/project",
    title: "Projects",
  },
  {
    pathname: "/skills",
    title: "Technical Skills",
  },
  {
    pathname: "/activity",
    title: "Activity",
  },
];

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 py-5 max-w-[970px] w-full flex gap-10 items-center justify-start">
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
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 40,
                }}
              />
            )}
            <span
              className={clsx(
                "relative z-10 capitalize transition duration-300",
                isActive && "text-white",
              )}
            >
              {items.title}
            </span>
          </NavLink>
        );
      })}
    </header>
  );
}
