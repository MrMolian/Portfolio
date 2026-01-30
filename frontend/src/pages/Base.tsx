import { useOutlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { ProfileButton } from "../components/ProfileButton";
import { MetricsButton } from "../components/MetricsButton";
import { ContactButton } from "../components/ContactButton";
import { ProjectsButton } from "../components/ProjectsButton";
import { DirectionHandler } from "../components/DirectionHandler";
import { Background } from "../components/Background";
import { useDirection } from "../providers/Direction";
export function MainGrid() {
    const { x, y } = useDirection();
    return (
        <motion.div
            transition={{ duration: 2, ease: "easeInOut" }}
            exit={{ x: x, y: y, opacity: 0, scale: 0.1 }}
            className="grid grid-cols-2 gap-4"
        >
            <DirectionHandler
                style="row-span-3 transition z-10"
                direction="left"
            >
                <NavLink to="aboutme">
                    <ProfileButton />
                </NavLink>
            </DirectionHandler>
            <DirectionHandler
                style="row-span-2 transition z-10"
                direction="top"
            >
                <NavLink to="/projects">
                    <ProjectsButton />
                </NavLink>
            </DirectionHandler>
            <DirectionHandler style="" direction="right">
                <NavLink to="contact">
                    <ContactButton />
                </NavLink>
            </DirectionHandler>
            <DirectionHandler style="col-span-2 hover:z-10" direction="bottom">
                <NavLink to="/metrics">
                    <MetricsButton />
                </NavLink>
            </DirectionHandler>
        </motion.div>
    );
}
export default function Base() {
    const outlet = useOutlet();

    return (
        <>
            <Background />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                animate={{ opacity: 100, y: 0 }}
                className="p-12 rounded-2xl"
                layout
            >
                <AnimatePresence mode="wait">
                    {outlet || <MainGrid key="main-grid" />}
                </AnimatePresence>
            </motion.div>
        </>
    );
}
