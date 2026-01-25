import { Link } from "react-router-dom";
import { NavigationButtons } from "../constants/NavConstants";
import { Home } from "lucide-react";

interface NavigationButtonProps {
    name: string;
    redirection: string;
}

export function NavigationButton({ name, redirection }: NavigationButtonProps) {
    return (
        <Link to={redirection}>
            <div className="flex flex-col items-center w-24">
                <Home size={40} color={"white"} />
                <h2 className="text-white">{name}</h2>
            </div>
        </Link>
    );
}

export default function NavBar() {
    return (
        <div
            className="fixed left-1/2 -translate-x-1/2 bottom-12  rounded-4xl
             drop-shadow-xl drop-shadow-white bg-blend-difference"
        >
            {/* Position*/}
            <div className=" px-5 py-2 rounded-4xl">
                {/*Styling*/}
                <div className="flex flex-row justify-evenly ">
                    {/*Layout*/}
                    {NavigationButtons.map((item) => (
                        <NavigationButton
                            name={item.name}
                            redirection={item.redirection}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
