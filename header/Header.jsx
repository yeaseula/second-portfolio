import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
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
    pathname: "/",
    title: "Projects",
  },
  {
    pathname: "/skills",
    title: "Technical Skills",
  },
];

export default function Header() {
  const location = useLocation();
  return (
    <header className="relative top-0 z-50 bg-(--background_color) border-b border-gray-200 py-5 max-w-[970px] w-full flex gap-10 items-center justify-start">
      <h1 className="sr-only">김예슬의 포트폴리오</h1>
      {navItems.map((items) => (
        <NavLink
          key={items.pathname}
          to={items.pathname}
          className="relative px-4 py-2 font-medium"
        >
          {location.pathname === items.pathname && (
            <motion.div
              layoutId="active-indicator"
              className="absolute inset-0 rounded-md bg-(--main_color)"
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
              location.pathname === items.pathname && "text-white",
            )}
          >
            {items.title}
          </span>
        </NavLink>
      ))}
    </header>
  );
}
