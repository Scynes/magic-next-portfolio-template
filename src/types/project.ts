import { Technology } from './technology';

export interface Project {
    // The title of the project
    title: string;
    // The image source for the project
    imgSrc: string;
    // The technologies used in the project
    technologies: Technology[];
    // The short description of the project
    shortDescription: string;
    // The long description of the project
    longDescription: string;
    // The GitHub link of the project
    githubLink: string;
    // The live link of the project
    liveLink: string;
}