import { DECOY_PROJECT, DECOY_PROJECTS } from "../constants/ApiConstants";

interface FetchProjectsOutput {
    name: string;
    id: string;
}
interface FetchProjectInfoOutput {
    name: string;
    description: string;
}

export function FetchProjects(): FetchProjectsOutput[] {
    return DECOY_PROJECTS;
}
export function FetchProjectInfo(id: string): FetchProjectInfoOutput {
    return DECOY_PROJECT[id as keyof typeof DECOY_PROJECT];
}
