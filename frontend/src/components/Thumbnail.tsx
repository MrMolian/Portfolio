import { Link } from "react-router-dom";

interface ThumbnailProps {
    name: string;
    thumbnail: string;
    redirection: string;
}

export default function Thumbnail({
    name,
    thumbnail,
    redirection,
}: ThumbnailProps) {
    return (
        <Link to={redirection}>
            <div
                style={{ backgroundImage: `url(${thumbnail})` }}
                className=" bg-center rounded-4xl bg-cover w-full aspect-video"
            >
                <div className="w-full h-full rounded-4xl flex justify-center items-center">
                    <h1>{name}</h1>
                </div>
            </div>
        </Link>
    );
}
