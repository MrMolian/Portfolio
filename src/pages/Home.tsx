
import { Background } from "../ui/background/Background";
import { NavBar } from "../ui/navigation/NavBar";
import AsciiText from "../ui/components/AsciiText";
export function Home() {
    return (
        <Background>
            <NavBar activeWindow="home"/>
            <div className="flex items-center justify-center h-screen w-screen">
                <AsciiText text="Home" />
            </div>
        </Background>
    );
}
