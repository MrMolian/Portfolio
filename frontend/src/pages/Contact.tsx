import { LucideYoutube, Instagram, Music } from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
interface ContactButtonProps {
    link: string;
    icon: ReactNode;
}
function ContactButton({ link, icon }: ContactButtonProps) {
    return (
        <div className="transition hover:scale-105 border p-5 backdrop-blur-sm">
            <NavLink to={link}>
                <div className="drop-shadow-md drop-shadow-amber-50">
                    {icon}
                </div>
            </NavLink>
        </div>
    );
}

export default function Contact() {
    const CONTACTS = [
        {
            link: "https://instagram.com/baba_momo911",
            icon: <Instagram size={100} />,
        },
        {
            link: "https://www.youtube.com/@MrMolian",
            icon: <LucideYoutube size={100} />,
        },
        {
            link: "https://soundcloud.com/blvcknails",
            icon: <Music size={100} />,
        },
    ];
    return (
        <motion.div
            initial={{ x: "100vw" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            animate={{ x: "0vw" }}
            className="absolute top-[50%] left-[50%] -translate-1/2"
        >
            <div className="flex flex-wrap gap-2 justify-center align-center">
                {CONTACTS.map((item, index) => (
                    <ContactButton
                        key={index}
                        link={item.link}
                        icon={item.icon}
                    />
                ))}
            </div>
        </motion.div>
    );
}
