import { useParams } from "react-router-dom";
import { FetchProjectInfo } from "../api/Projects";

export default function Project() {
    const { id } = useParams();
    
    if (!id) {
        return <div>Project ID is missing</div>; 
    }

    const project = FetchProjectInfo(id);
    return <div>
        <h1>{project.name}</h1>
        <h2>{project.description}</h2>
    </div>    
}