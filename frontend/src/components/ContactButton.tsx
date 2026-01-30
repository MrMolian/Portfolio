import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight} from "lucide-react";
import dollarBill from "../assets/mail.png";

export function ContactButton() {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div className="transition hover:drop-shadow-xl hover:drop-shadow-white duration-1000 hover:translate-x-5 w-full h-full drop-shadow-xl">
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
                <motion.h1 layout className="drop-shadow-xl drop-shadow-black">
                    Contact
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
                                <ArrowRight size={50} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
