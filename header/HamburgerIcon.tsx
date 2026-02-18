import { motion, AnimatePresence } from "framer-motion";

export const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="relative w-6 h-6 flex flex-col justify-center items-center gap-[5px] cursor-pointer">
      <motion.span
        animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        className="block w-6 h-[2px] bg-current origin-center"
      />
      <motion.span
        animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2 }}
        className="block w-6 h-[2px] bg-current"
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        className="block w-6 h-[2px] bg-current origin-center"
      />
    </div>
  );
};
