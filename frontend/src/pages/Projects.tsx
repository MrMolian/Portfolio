import { FetchProjects } from "../api/Projects";
import Thumbnail from "../components/Thumbnail";

export default function Projects() {
    let Projects = FetchProjects();
    return (
        <>
            <div className="fixed left-1/2 top-5 -translate-x-1/2 ">
                {/*Layout*/}
                <div className="grid grid-cols-2 gap-5  ">
                    {/*Layout*/}
                    {Projects.map(({ name, thumbnail, id }) => (
                        <Thumbnail
                            name={name}
                            thumbnail={thumbnail}
                            redirection={id}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
