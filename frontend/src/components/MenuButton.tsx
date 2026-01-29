import { NavLink } from "react-router-dom";

interface MenuButtonProps {
    name: string;
    redirection: string;
}
export function MenuButton({ name, redirection }: MenuButtonProps) {
    return (
            <NavLink to={redirection}>
                <div className="bg-amber-400 w-full h-full place-content-center">
                    <p> {name}</p>
                </div>
            </NavLink>
    );
}
