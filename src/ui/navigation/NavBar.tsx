import { LucideBadgeDollarSign, LucideHome, LucideUser, Mail } from "lucide-react"
import { Link } from "react-router-dom"
const windowtoicon = {
    "home" : <LucideHome />,
    "projects" : <LucideBadgeDollarSign />,
    "about-me" : <LucideUser />,
    "contact" : <Mail />
}
/*
const windowtoname = {
    "home" : "Home",
    "projects" : "Projects",
    "about-me" : "About Me",
    "contact" : "Contact"
}
*/

export function NavBar_Button( {windowname, state} : {windowname : string, state : boolean}){
    return (
        <Link to={"/" + windowname} > 
        <div className="backdrop-blur-sm backdrop-brightness-50 rounded-2xl border-2 border-white p-2">
            <div className="flex flex-col items-center gap-5 p-4">
                <div style={{transform: `scale(${state ? 1.5 : 2})`, color: "white"}} >
                    {windowtoicon[windowname as keyof typeof windowtoicon]} 
                </div>
            </div>
        </div>
        </Link>
    )
}
export function NavBar( {activeWindow} : {activeWindow : string}){
    return (
        <div className="fixed top-5 left-20 right-20 z-50 flex items-center justify-center ">
            <div className="relative flex-1 flex gap-20 items-center justify-center  h-16">
                <NavBar_Button windowname="home" state={activeWindow === "home"}/>
                <NavBar_Button windowname="projects" state={activeWindow === "projects"}/>
                <NavBar_Button windowname="contact" state={activeWindow === "contact"}/>
                <NavBar_Button windowname="about-me" state={activeWindow === "about-me"}/>
            </div>
        </div>
    )
}