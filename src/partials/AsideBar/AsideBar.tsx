import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../../helppers/use-dimensions";
import { MenuToggle } from "../../components/MenuToggle/MenuToggle";
import { Navigation } from "../../components/Navigation/Navigation";
import "./AsideBar.scss";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const AsideBar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <div className={`aside-bar `}>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <div className={`${isOpen ? "open" : "closed"}`}>
          <motion.div className="background" variants={sidebar} />
          <Navigation />
        </div>

        <MenuToggle
          isOpen={isOpen ? "open" : "closed"}
          toggle={() => toggleOpen()}
        />
      </motion.nav>
    </div>
  );
};
