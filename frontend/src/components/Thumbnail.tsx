import { Link } from "react-router-dom"

interface ThumbnailProps {
    name: string,
    redirection: string
}
export default function Thumbnail({name, redirection}: ThumbnailProps){
    return <Link to={redirection}>
            <p>{name}</p>
        </Link>
}