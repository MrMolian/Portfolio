import { LucideBadgeDollarSign, LucideHome, LucideUser, Mail } from "lucide-react"
import { Link } from "react-router-dom"
import ElectricBorder from "../components/ElectricalBorder";
import { HorizontalDivider } from "../components/HorizontalDivider";
import staticgif from "../../assets/static.gif"
const windowtoicon = {
    "home" : <LucideHome />,
    "projects" : <LucideBadgeDollarSign />,
    "about-me" : <LucideUser />,
    "contact" : <Mail />
}

export function NavBar_Button( {windowname, state} : {windowname : string, state : boolean}){
    return (
        <Link to={"/" + windowname} >
        <ElectricBorder
        color="white"
        speed={0.5}
        chaos={0.1}
        thickness={2}
        style={{ borderRadius: 20, padding: 2 }}
        >
        <div className="backdrop-blur-sm backdrop-brightness-50 rounded-2xl p-2">
            <div className="flex flex-col items-center gap-5 p-4">
                <div style={{transform: `scale(${state ? 1.5 : 2})`, color: "white"}} >
                    {windowtoicon[windowname as keyof typeof windowtoicon]} 
                </div>
            </div>
        </div>
        </ElectricBorder> 
        </Link>
    )
}
export function NavBar( {activeWindow} : {activeWindow : string}){
    return (
        <>
        <div className="fixed top-0 z-50 flex-col items-center justify-center ">
            <div className= "mb-10 rounded-b-2xl"
            style={{
                backgroundImage: `url(${staticgif})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                
            }}>
            <ElectricBorder
                        color="white"
                        speed={0.5}
                        chaos={0.1}
                        thickness={2}
                        style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20, padding : 2 }}
                >
                <div className="relative flex-1 flex gap-20 items-center justify-center pt-4 pb-6 pl-16 pr-16 rounded-b-2xl">
                    <NavBar_Button windowname="home" state={activeWindow === "home"}/>
                    <NavBar_Button windowname="projects" state={activeWindow === "projects"}/>
                    <NavBar_Button windowname="contact" state={activeWindow === "contact"}/>
                    <NavBar_Button windowname="about-me" state={activeWindow === "about-me"}/>
                </div>
                </ElectricBorder>
            </div>
            <div className="relative flex-1 flex items-center justify-center">
                <HorizontalDivider />
            </div>
        </div>
        </>
    )
}