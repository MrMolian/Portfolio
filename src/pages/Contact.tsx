
import { Background } from "../ui/background/Background";
import { NavBar } from "../ui/navigation/NavBar";
import AsciiText from "../ui/components/AsciiText";

export function Contact() {
    return (
        <Background>
            <NavBar activeWindow="contact"/>
            <AsciiText text="Contact" />
        </Background>
    );
}
