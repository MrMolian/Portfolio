
import { Background } from "../ui/background/Background";
import { NavBar } from "../ui/navigation/NavBar";
export function AboutMe() {
    return (
        <Background>
            <NavBar activeWindow="about-me"/>
            <p className="text-4xl text-white">About Me</p>
        </Background>
    );
}
