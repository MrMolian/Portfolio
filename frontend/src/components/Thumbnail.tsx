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
    console.log(thumbnail);
    return (
        <Link to={redirection}>
            <div
                className={`bg-[url(/thumbnail.jpeg)] rounded-4xl bg-center w-full aspect-video flex justify-center items-center`}
            >
                <h1>{name}</h1>
            </div>
        </Link>
    );
}
