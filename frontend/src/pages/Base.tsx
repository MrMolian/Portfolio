import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Base(){
    return <div className="fixed inset-0 place-content-center bg-grey">
          <Outlet/>   
          <NavBar/> 
    </div>
}