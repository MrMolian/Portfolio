import axios from "axios";
import { BASE_URL } from "../constants/ApiConstants";

interface ProjectInfo {
    name: string;
    id: string;
}

export function FetchProjects() {
    return axios
        .get<ProjectInfo[]>(BASE_URL + "/projects")
        .then((res) => res.data)
        .catch((error) => {
            console.error(error);
            return [];
        });
}
