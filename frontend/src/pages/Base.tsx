import { useOutlet, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { MenuProfile } from "../components/MenuProfile";
import { MetricsButton } from "../components/MetricsButton";
import { MenuButton } from "../components/MenuButton";
export function MainGrid() {
    return (
        <motion.div className="grid grid-cols-2 gap-4">
            <NavLink to="aboutme" className="row-span-3">
                <MenuProfile />
            </NavLink>
            <NavLink to="/projects">
                <MenuButton name={"salam"} redirection="projects" />
            </NavLink>
            <NavLink to="/salam">
                <MenuButton name={"salam"} redirection="salam" />
            </NavLink>
            <NavLink to="/salam">
                <MenuButton name={"salam"} redirection="salam" />
            </NavLink>
            <NavLink className="col-span-2" to="/metrics">
                <MetricsButton />
            </NavLink>
        </motion.div>
    );
}
export default function Base() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            animate={{ opacity: 100, y: 0 }}
            className="p-4 rounded-2xl"
            layout
        >
            <AnimatePresence mode="wait">
                {useOutlet() ? <Outlet /> : <MainGrid />}
            </AnimatePresence>
        </motion.div>
    );
}
