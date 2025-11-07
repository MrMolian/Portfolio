
import { Background } from "../ui/background/Background";
import { NavBar } from "../ui/navigation/NavBar";
export function Home() {
    return (
        <Background>
            <NavBar activeWindow="home"/>
            <p className="text-4xl text-white">Home</p>
        </Background>
    );
}
