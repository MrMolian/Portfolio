import { useOutlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { MenuProfile } from "../components/MenuProfile";
import { MetricsButton } from "../components/MetricsButton";
import { MenuButton } from "../components/MenuButton";
import { ProjectsButton } from "../components/ProjectsButton";
export function MainGrid() {
    return (
        <motion.div
            transition={{ duration: 1 }}
            exit={{ x: "100vw" }}
            className="grid grid-cols-2 gap-4"
        >
            <NavLink to="aboutme" className="row-span-3 transition z-10">
                <MenuProfile />
            </NavLink>
            <NavLink to="/projects">
                <ProjectsButton />
            </NavLink>
            <NavLink to="/salam">
                <MenuButton name={"salam"} redirection="salam" />
            </NavLink>
            <NavLink to="/salam">
                <MenuButton name={"salam"} redirection="salam" />
            </NavLink>
            <NavLink className="col-span-2 hover:z-10" to="/metrics">
                <MetricsButton />
            </NavLink>
        </motion.div>
    );
}
export default function Base() {
    const outlet = useOutlet();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            animate={{ opacity: 100, y: 0 }}
            className="p-4 rounded-2xl"
            layout
        >
            <AnimatePresence mode="wait">
                {outlet || <MainGrid key="main-grid" />}
            </AnimatePresence>
        </motion.div>
    );
}
