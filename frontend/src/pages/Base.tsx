import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Base() {
    return (
        <div>
            <div className="fixed inset-0 place-content-center bg-linear-65 from-[#000000] to-[#f2f2f257]">
                <Outlet />
                <NavBar />
            </div>
        </div>
    );
}
