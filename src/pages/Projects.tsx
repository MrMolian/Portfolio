
import { Background } from "../ui/background/Background";
import { NavBar } from "../ui/navigation/NavBar";
export function Projects() {
    return (
        <Background>
            <NavBar activeWindow="projects"/>
            <p className="text-4xl text-white">Projects</p>
        </Background>
    );
}
