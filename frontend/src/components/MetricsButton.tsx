import { Landmark } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowDown } from "lucide-react";
import dollarBill from "../assets/dollarbill.jpg";

export function MetricsButton() {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div className="transition hover:drop-shadow-xl hover:drop-shadow-green-200 duration-1000 hover:translate-y-5 w-full h-20 drop-shadow-xl">
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
                className=" flex w-full h-full justify-center items-center rounded-xl  "
            >
                <motion.div className="drop-shadow-xl drop-shadow-black" layout>
                    <Landmark size={50} />
                </motion.div>
                <motion.h1 layout className="drop-shadow-xl drop-shadow-black">
                    FINANCES
                </motion.h1>
                <motion.div layout>
                    <AnimatePresence mode="popLayout">
                        {hovered && (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                }}
                                transition={{
                                    duration: 0.3,
                                }}
                                className="drop-shadow-xl drop-shadow-black"
                            >
                                <ArrowDown size={50} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
