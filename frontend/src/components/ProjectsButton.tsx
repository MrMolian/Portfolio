import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUp } from "lucide-react";
import dollarBill from "../assets/spinning_galaxy.gif";

export function ProjectsButton() {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div className="transition border rounded-2xl  grayscale hover:grayscale-0 hover:-translate-y-5 duration-1000 w-full h-full drop-shadow-xl">
            <motion.div
                transition={{
                    duration: 1,
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                layout
                style={{
                    backgroundImage: `url(${dollarBill})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className=" flex w-full h-full justify-center p-5 items-center rounded-xl  "
            >
                <motion.h1 layout className="drop-shadow-xl italic drop-shadow-black">
                    PROJECTS
                </motion.h1>
            </motion.div>
        </motion.div>
    );
}
