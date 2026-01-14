"use client"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { stagger } from "framer-motion"
import ReactFocusLock from "react-focus-lock"
import { useEffect, useRef, useState } from "react"

export default function Navigation() {
  return (
    <>
      <a href="">about me</a>
      <a href="/">프로젝트</a>
      <a href="">기술</a>
      <a href="">활동</a>
    </>
  )
}

// export default function Navigation() {
//     const [isOpen, setIsOpen] = useState(false)
//     const containerRef = useRef<HTMLDivElement>(null)
//     const { height } = useDimensions(containerRef)

//     return (
//         <div className="fixed top-0 right-0">
//             <div style={container}>
//                 <motion.nav
//                     initial={false}
//                     animate={isOpen ? "open" : "closed"}
//                     custom={height}
//                     ref={containerRef}
//                     style={nav}
//                 >
//                     <MenuToggle toggle={() => setIsOpen(!isOpen)} />
//                     <motion.div style={background} variants={sidebarVariants} />
//                     <Navigations />
//                 </motion.nav>
//             </div>
//         </div>
//     )
// }

const navVariants = {
    open: {
        transition: { delayChildren: stagger(0.07, { startDelay: 0.2 }) },
    },
    closed: {
        transition: { delayChildren: stagger(0.05, { from: "last" }) },
    },
}

const MENU = [
  {id: 1, title: 'About Me'},
  {id: 2, title: 'Projects'},
  {id: 3, title: 'Activity'}
]

const Navigations = () => (
    <motion.ul style={list} variants={navVariants}>
        {MENU.map((item) => (
            <MenuItem key={item.id} item={item.title}/>
        ))}
    </motion.ul>
)

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
}

const MenuItem = ({ item }: { item: string }) => {
    return (
        <motion.li
            style={listItem}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <a href="/">{item}</a>

        </motion.li>
    )
}

const sidebarVariants: Variants = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(30px at calc(100% - 70px) 70px)",
        transition: {
            delay: 0.2,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
}

interface PathProps {
    d?: string
    variants: Variants
    transition?: { duration: number }
}

const Path = (props: PathProps) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
)

const MenuToggle = ({ toggle }: { toggle: () => void }) => (
    <button style={toggleContainer} onClick={toggle}>
        <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" },
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" },
                }}
            />
        </svg>
    </button>
)

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
    position: "relative",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "stretch",
    flex: 1,
    width: 500,
    maxWidth: "100%",
    height: "100vh",
    backgroundColor: "var(--accent)",
    overflow: "hidden",
}

const nav: React.CSSProperties = {
    width: 300,
}

const background: React.CSSProperties = {
    backgroundColor: "rgba(0,0,0,0.15)",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    width: 300,
}

const toggleContainer: React.CSSProperties = {
    border: "none",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    cursor: "pointer",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: 40,
    right: 40,
    width: 60,
    height: 60,
    borderRadius: "50%",
    background: "transparent",
}

const list: React.CSSProperties = {
    listStyle: "none",
    padding: 25,
    margin: 0,
    position: "absolute",
    top: 80,
    width: 230,
}

const listItem: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 0,
    margin: 0,
    listStyle: "none",
    marginBottom: 20,
    cursor: "pointer",
}

/**
 * ==============   Utils   ================
 */

// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.
const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
    const dimensions = useRef({ width: 0, height: 0 })

    useEffect(() => {
        if (ref.current) {
            dimensions.current.width = ref.current.offsetWidth
            dimensions.current.height = ref.current.offsetHeight
        }
    }, [ref])

    return dimensions.current
}
