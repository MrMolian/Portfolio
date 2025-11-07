
import { Background } from "../ui/background/Background";
import { NavBar } from "../ui/navigation/NavBar";
import AsciiText from "../ui/components/AsciiText";
export function Home() {
    return (
        <Background>
            <NavBar activeWindow="home"/>
            <AsciiText text="Home" />
        </Background>
    );
}
