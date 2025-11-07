
import { Background } from "../ui/background/Background";
import { NavBar } from "../ui/navigation/NavBar";
import AsciiText from "../ui/components/AsciiText";
export function Projects() {
    return (
        <Background>
            <NavBar activeWindow="projects"/>
            <AsciiText text="Projects" />
        </Background>
    );
}
