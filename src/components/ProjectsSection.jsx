import { ArrowRight, ExternalLink, Github } from "lucide-react"
import {  home_flower, clothe1, clothe2, clothe3, clothe4, clothe5,clothe,  musicplayer, musicplayer2,musicplayer3,
          login_flower, register_flower, cart_flower, portfolio, portfolio1, portfolio2, portfolio3,
         portfolio4, portfolio5 , calculator1, calculator2, calculator3 , quanlychitieu1, quanlychitieu2, quanlychitieu3 } from "@/assets/project.js"
import { useState } from "react"
import { ProjectDetails } from "./ProjectDetails"

const projects = [
    {
        id: 1,
        thumbUrl: [login_flower, register_flower, cart_flower],
        title: "Website Flower Shop",
        description: "A beautiful landing page app using React and Tailwind. ",
        image: home_flower,
        tags: ["React", "TailwindCSS"],
        demoUrl: "https://flowershopquyet.netlify.app/",
        githubUrl: "https://github.com/Quyet881065/ProjectSem_3/tree/main/frontend",
        fontend: ["ReactJs", "Tailwind"],
        backend: []
    },
    {
        id: 2,
        thumbUrl: [clothe1, clothe2, clothe3,clothe4, clothe5],
        title: "Website Clothes Shop",
        description: "A beautiful landing page app using React and Tailwind.",
        image: clothe,
        tags: ["React", "TailwindCSS"],
        demoUrl: "https://ecommercequyet.netlify.app/",
        githubUrl: "https://github.com/Quyet881065/ecommerce-app",
        fontend: ["ReactJs", "Tailwind"],
        backend: ["NodeJs, Express" , "MongoDB"]
    },
    {
        id: 3,
        thumbUrl: [quanlychitieu1, quanlychitieu2, quanlychitieu3],
        title: "Management spending",
        description:
            "A beautiful landing page app using React and Tailwind. CRUD task save localStorage",
        image: quanlychitieu1,
        tags: ["React", "TailwindCSS", "Shadcn"],
        demoUrl: "https://quanlychitieuu.netlify.app/",
        githubUrl: "https://github.com/Quyet881065/quanlychitieu",
        fontend: ["ReactJs", "Tailwind", "Recharts"],
        backend: []
    },
    {
        id: 4,
        thumbUrl: [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5],
        title: "Personal Portfolio",
        description:
            "A beautiful landing page app using React and Tailwind. Introduce yourseft",
        image: portfolio,
        tags: ["React", "Tailwind"],
        demoUrl: "https://portfolio-quyet.io.vn/",
        githubUrl: "https://github.com/Quyet881065/Portfolio_React",
        fontend: ["ReactJs", "Tailwind"],
        backend: []
    },
    {
        id: 5,
        thumbUrl: [calculator2, calculator3],
        title: "Calculator App",
        description:
            "A beautiful landing page app using React and Tailwind.",
        image: calculator1,
        tags: ["React", "Tailwind"],
        demoUrl: "https://calculator-react-quyet.netlify.app/",
        githubUrl: "https://github.com/Quyet881065/calculator-react",
        fontend: ["ReactJs", "Tailwind"],
        backend: []
    },
    {
        id: 6,
        thumbUrl: [musicplayer2, musicplayer3],
        title: "Music Player",
        description:
            "A beautiful landing page app using React and Tailwind.",
        image: musicplayer,
        tags: ["React", "Tailwind"],
        demoUrl: "https://musicplayquyet.netlify.app/",
        githubUrl: "https://github.com/Quyet881065/music_play",
        fontend: ["ReactJs", "Tailwind"],
        backend: []
    },
]

export const ProjectsSection = () => {
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
        <section id="projetcts" className="py-25 relative ">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-5">Featured <span className="text-primary"> Projects</span></h2>
                <p className="text-center mb-10 max-w-2xl mx-auto">
                    Here are some of my recent projects.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div onClick={() => handleOpen(project)}>
                                <div className="h-48 overflow-hidden">
                                    <img src={project.image} alt={project.title}
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />
                                </div>
                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {project.tags.map((tag) => (
                                            <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-sm ">{project.description}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20} />
                                    </a>
                                    <a href={project.githubUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a className="w-fit bg-orange-500 p-3 rounded-lg flex items-center mx-auto gap-2"
                        href="https://github.com/Quyet881065"
                        target="_blank"
                    >Check My Github <ArrowRight size={16} /> </a>
                </div>
            </div>
            {isOpenDetail && <ProjectDetails items={selectedProject} close={handleClose} />}
        </section>
    )

}