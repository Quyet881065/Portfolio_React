import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { image, image1,image2, image3, image4, image5,image6,image7,image8,image9, home_flower } from "@/assets/project.js"
import { useState } from "react"
import { ProjectDetails } from "./ProjectDetails"
import { forwardRef } from "react"

const projects = [
    {
        id: 1,
        thumbUrl : [image, image1,image2],
        title: "Website Flower Shop",
        description: "A beautiful landing page app using React and Tailwind.",
        image: home_flower,
        tags: ["React", "TailwindCSS"],
        demoUrl: "#",
        githubUrl: "#",
        fontend:["ReactJs", "Tailwind"],
        backend :["Spring Boot" , "Spring Security", "MySQL"]
    },
    {
        id: 2,
        thumbUrl : [image3, image4,image5],
        title: "Orbit Analytics Dashboard",
        description:
            "Interactive analytics dashboard with data visualization and filtering capabilities.",
        image: "/projects/project2.png",
        tags: ["TypeScript", "D3.js", "Next.js"],
        demoUrl: "#",
        githubUrl: "#",
        fontend:["ReactJs", "Tailwind"],
        backend :["Spring Boot" , "Spring Security", "MySQL"]
    },
    {
        id: 3,
        thumbUrl : [image7, image8, image9],
        title: "E-commerce Platform",
        description:
            "Full-featured e-commerce platform with user authentication and payment processing.",
        image: "/projects/project3.png",
        tags: ["React", "Node.js", "Stripe"],
        demoUrl: "#",
        githubUrl: "#",
        fontend:["ReactJs", "Tailwind"],
        backend :["Spring Boot" , "Spring Security", "MySQL"]
    },
]

export const ProjectsSection = forwardRef((props, ref)=> {
    const [isOpenDetail, setIsOpenDetail] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpen = (project) => {
        setIsOpenDetail(true);
        setSelectedProject(project);
    }
    const handleClose = () => {
        setIsOpenDetail(false);
    }
    return (
        <section ref={ref} id="projetcts" className="py-25 relative ">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-5">Featured <span className="text-primary"> Projects</span></h2>
                <p className="text-center mb-10 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to detail, performance, and user experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover" onClick={() => handleOpen(project)}>
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title}
                                 className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"/>
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.tags.map((tag) =>(
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-sm ">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a href={project.githubUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a className="w-fit bg-blue-500 p-3 rounded-lg flex items-center mx-auto gap-2"
                       href="https://github.com/Quyet881065"
                       target="_blank"
                       >Check My Github <ArrowRight size={16}/> </a>
                </div>
            </div>
            {isOpenDetail && <ProjectDetails items={selectedProject} close={handleClose}/>}
        </section>
    )

})