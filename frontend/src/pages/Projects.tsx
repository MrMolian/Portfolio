import { FetchProjects } from "../api/Projects";
import Thumbnail from "../components/Thumbnail";
export function Project_Thumbnail(){}
export default function Projects() {
    let Projects = FetchProjects();
    return (
        <>
            {Projects.map(({name, id}) => <Thumbnail name={name} redirection= {id}/> )}
        </>
    );
}
