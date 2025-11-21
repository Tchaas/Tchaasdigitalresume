import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Rocket, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Project Name One",
    description: "A comprehensive platform designed to solve a specific problem in an innovative way. This project demonstrates expertise in full-stack development and user-centered design.",
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    status: "Active",
    link: "#",
    github: "#"
  },
  {
    title: "Community Initiative",
    description: "A community-focused project aimed at creating positive social impact. Brings together volunteers and resources to address important local needs.",
    technologies: ["Leadership", "Community Engagement", "Project Management"],
    status: "Ongoing",
    link: "#"
  },
  {
    title: "Innovation Lab Project",
    description: "An experimental project exploring emerging technologies and their practical applications. Focus on pushing boundaries and discovering new possibilities.",
    technologies: ["AI/ML", "Python", "Data Analysis"],
    status: "In Development",
    github: "#"
  },
  {
    title: "Educational Content Series",
    description: "Creating educational resources and content to help others learn and grow in their careers. Includes tutorials, guides, and mentorship programs.",
    technologies: ["Teaching", "Content Creation", "Mentorship"],
    status: "Active",
    link: "#"
  },
  {
    title: "Open Source Contribution",
    description: "Regular contributions to open source projects, helping to improve tools and libraries used by developers worldwide.",
    technologies: ["Open Source", "Collaboration", "Code Review"],
    status: "Ongoing",
    github: "#"
  },
  {
    title: "Personal Research Project",
    description: "Independent research exploring innovative solutions to industry challenges. Focuses on practical applications of theoretical concepts.",
    technologies: ["Research", "Analysis", "Innovation"],
    status: "In Progress"
  }
];

export function SideProjectsSection() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <Card className="border-emerald-100 shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Rocket className="w-5 h-5 text-emerald-600" />
            Side Projects & Initiatives
          </CardTitle>
          <CardDescription>
            Beyond my professional work, I'm passionate about various projects that allow 
            me to explore new ideas, give back to the community, and continue learning.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="border-emerald-100 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-gray-900">{project.title}</CardTitle>
                <Badge 
                  variant="outline" 
                  className={
                    project.status === "Active" 
                      ? "border-emerald-600 text-emerald-700 bg-emerald-50" 
                      : "border-gray-400 text-gray-600"
                  }
                >
                  {project.status}
                </Badge>
              </div>
              <CardDescription className="mt-2">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-gray-100 text-gray-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2 pt-2">
                  {project.link && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
