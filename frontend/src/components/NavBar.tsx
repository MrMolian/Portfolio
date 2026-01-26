import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { NavigationButtons } from "../constants/NavConstants";

interface NavigationButtonProps {
    name: string;
    icon: string;
    redirection: string;
}

export function NavigationButton({
    name,
    icon,
    redirection,
}: NavigationButtonProps) {
    return (
        <NavLink
            to={redirection}
            className={({ isActive }) =>
                `flex flex-col items-center w-24 transition duration-300 ease-out ${isActive ? "opacity-100 scale-100" : "opacity-50 scale-95"}`
            }
        >
            <img
                src={icon}
                alt={`${name} icon`}
                width={32}
                height={32}
                className="w-8 h-8 filter invert"
            />
            <h2 className="text-white">{name}</h2>
        </NavLink>
    );
}

export default function NavBar() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(true);
    }, []);
    return (
        <div
            className={`
                    transition duration-500
                    fixed left-1/2 -translate-x-1/2 bottom-12
                    rounded-4xl drop-shadow-xl drop-shadow-white
                    bg-blend-difference
                    ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                    `}
        >
            {/* Position*/}
            <div className="bg-black px-5 py-2 rounded-4xl">
                {/*Styling*/}
                <div className="flex flex-row justify-evenly ">
                    {/*Layout*/}
                    {NavigationButtons.map((item) => (
                        <NavigationButton
                            key={item.name}
                            name={item.name}
                            icon={item.icon}
                            redirection={item.redirection}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
