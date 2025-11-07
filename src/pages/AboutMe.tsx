
import { Background } from "../ui/background/Background";
import { NavBar } from "../ui/navigation/NavBar";
import AsciiText from "../ui/components/AsciiText";
export function AboutMe() {
    return (
        <Background>
            <NavBar activeWindow="about-me"/>
            <AsciiText text="About Me" />
        </Background>
    );
}
