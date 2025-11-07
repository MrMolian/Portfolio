
import { Background } from "../ui/background/Background";
import { NavBar } from "../ui/navigation/NavBar";

export function Contact() {
    return (
        <Background>
            <NavBar activeWindow="contact"/>
            <p className="text-4xl text-white">Contact</p>
        </Background>
    );
}
