import { LucideBadgeDollarSign, LucideHome, LucideUser } from "lucide-react"
import { Link } from "react-router-dom"
const windowtoicon = {
    "home" : <LucideHome />,
    "projects" : <LucideBadgeDollarSign />,
    "about-me" : <LucideUser />
}

export function NavBar_Button( {windowname, state} : {windowname : string, state : boolean}){
    return (
        <Link to={"/" + windowname} >   
            <div >
                <div style={{transform: `scale(${state ? 1.2 : 1})`}}>
                    {windowtoicon[windowname as keyof typeof windowtoicon]} 
                </div>
            </div>
        </Link>
    )
}
export function NavBar( {activeWindow} : {activeWindow : string}){
    return (
        <div className="fixed border-2 border-white rounded-xl top-5 left-40 right-40 z-50 flex items-center justify-center h-20 bg-black/90">
            <div className="flex-1 flex gap-5 items-center justify-center h-16 bg-black/90">
                <p>salut </p>
            </div>
            <div className="relative flex-1 flex gap-5 items-center justify-end  h-16 bg-black/90 right-20">
                <NavBar_Button windowname="home" state={activeWindow === "home"}/>
                <NavBar_Button windowname="projects" state={activeWindow === "projects"}/>

                <NavBar_Button windowname="about-me" state={activeWindow === "about-me"}/>
            </div>
            
        </div>
    )
}