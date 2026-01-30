import { useState } from "react";
import MoaadB from "../assets/wanted.png";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
function ProfilePicture() {
    const [hovered, setHovered] = useState(false);
    const HandleHover = (p: boolean) => !p;
    return (
        <div
            onMouseEnter={() => setHovered(HandleHover)}
            onMouseLeave={() => setHovered(HandleHover)}
            className="transition-all duration-1000 relative mask-y-from-95% mask-x-from-95%  backdrop-blur-md hover:scale-105  hover:-translate-x-5 hover:drop-shadow-xl/50 hover:drop-shadow-white-500/50 w-100 h-auto overflow-hidden rounded-3xl"
        >
            {hovered && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute z-1 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
                >
                    <ArrowLeft
                        size={100}
                        color="white"
                        className="transition duration-1000 opacity-50  hover:opacity-100 hover:scale-150    "
                    />
                </motion.div>
            )}
            <img
                className="transition duration-1000 grayscale hover:grayscale-0"
                src={MoaadB}
            />
        </div>
    );
}
export function ProfileButton() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <ProfilePicture />
        </motion.div>
    );
}
