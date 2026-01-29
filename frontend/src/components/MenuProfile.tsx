
import { useState } from "react";
import MoaadB from "../assets/moaadb.jpg";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
function ProfilePicture() {
    const [hovered, setHovered] = useState(false);
    const HandleHover = (p: boolean) => !p;
    function getStyle() {
        return (
            "transition duration-1000 " +
            (hovered ? "scale-110 rotate-5 grayscale-100 blur-sm" : "")
        );
    }
    return (
            <div
                onMouseEnter={() => setHovered(HandleHover)}
                onMouseLeave={() => setHovered(HandleHover)}
                className="relative transition duration-500 hover:scale-110 hover:drop-shadow-xl/50 hover:drop-shadow-white-500/50 w-100 h-100 overflow-hidden rounded-3xl"
            >
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute z-1 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
                    >
                        <ArrowRight
                            size={100}
                            color="white"
                            className="transition duration-1000 opacity-50  hover:opacity-100 hover:scale-150    "
                        />
                    </motion.div>
                )}{" "}
                <img className={getStyle()} src={MoaadB} />
            </div>
    );
}
export function MenuProfile() {
    return (
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={
                {duration:2}
            }
        >
            <ProfilePicture />
        </motion.div>
    );
}
