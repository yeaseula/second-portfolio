import { NavLink, useLocation, matchPath } from "react-router-dom";
import { HamburgerIcon } from "./HamburgerIcon";
import { useState, useEffect } from "react";
import { navItems } from "./data";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

export const MobileHeader = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // 라우트 변경 시 드로어 닫기
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // 드로어 열릴 때 스크롤 막기
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  return (
    <>
      <header className="md:hidden border-b border-gray-200 w-full bg-background">
        <h1 className="sr-only">김예슬의 포트폴리오</h1>
        <div className="flex items-center justify-between py-4">
          <NavLink
            to="/"
            className="text-sm font-pretendard font-semibold tracking-widest uppercase text-gray-800"
          >
            Yeseul's Portfolio
          </NavLink>
          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-label="메뉴 열기/닫기"
            className="text-gray-800 p-1"
          >
            <HamburgerIcon isOpen={isOpen} />
          </button>
        </div>
      </header>
      {/* 오버레이 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 z-40 md:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* 드로어 */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 35 }}
            className="fixed top-0 right-0 h-full w-[75vw] max-w-[320px] bg-background z-50 md:hidden flex flex-col shadow-2xl"
          >
            {/* 드로어 헤더 */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <span className="text-xs font-pretendard tracking-widest uppercase text-gray-400">
                Menu
              </span>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="메뉴 닫기"
                className="text-gray-800 p-1"
              >
                <HamburgerIcon isOpen={true} />
              </button>
            </div>

            {/* 네비 아이템 */}
            <ul className="flex flex-col px-4 py-6 gap-1">
              {navItems.map((item, i) => {
                const isActive = matchPath(
                  { path: item.pathname + "/*" },
                  pathname,
                );
                return (
                  <motion.li
                    key={item.pathname}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.06 + 0.1,
                      duration: 0.35,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                  >
                    <NavLink
                      to={item.pathname}
                      onClick={() => setIsOpen(false)}
                      className={clsx(
                        "flex items-center gap-3 px-4 py-3 rounded-xl font-pretendard text-base transition-all duration-200",
                        isActive
                          ? "bg-main !text-white font-bold"
                          : "text-gray-700 hover:bg-gray-100",
                      )}
                    >
                      <span className="text-xs font-mono text-gray-300 w-4">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item.title}
                    </NavLink>
                  </motion.li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};
