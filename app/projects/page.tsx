"use client";

import Footer from "@/components/footer";
import projects from "@/components/projects.json";
import { Button } from "@/components/ui/button";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Github } from "lucide-react";
  

const Projects = () => {
    const Projects = projects.projects;

    const ProjectCard = ({name, description, link, date, ranking, github}: {name: string, description: string, link: string, date: string, ranking: string, github: string}) => {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>{name}</CardTitle>
                    <div>{ranking}</div>
                </CardHeader>
                <CardContent>
                    <CardDescription>{description}</CardDescription>
                </CardContent>
                <CardFooter className="flex gap-x-4">
                    <Button onClick={() => {window.open(link, "_blank")}}>Project Description</Button>
                    <Button onClick={() => {window.open(github, "_blank")}} variant="outline" className="items-center justify-center flex flex-row gap-x-2"><Github className="h-4 w-4"/> GitHub</Button>
                </CardFooter>
            </Card>
        )
    }

    return ( 
        <div className="h-screen flex flex-col gap-y-2 w-full items-center justify-center px-20">
            <h1 className="pb-8 text-4xl font-bold">Our Projects</h1>
            <div className="grid grid-rows-2 grid-cols-2 pt-10 gap-x-4 gap-y-4">
                {
                    Projects.map((project, index) => {
                        return (
                            <ProjectCard key={index} name={project.name} description={project.description} link={project.link} date={project.date} ranking={project.ranking} github={project.github} />
                        )
                    })
                }
            </div>
            <Footer />
        </div>
     );
}
 
export default Projects;