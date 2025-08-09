import { ThemeToggle } from "../components/ThemeToggle";
import {Navbar} from "../components/Navbar";
import { HeroSeclection } from "../components/HeroSeclection";
import { AboutSelection } from "../components/AboutSelection";
import { SkillsSelection } from "../components/SkillsSelection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
export const Home = () => {
    return (
    <div>
       {/**theme toggle */}
        <ThemeToggle/>
       <Navbar/>
       {/* main content*/} 
       <main>
        <HeroSeclection/>
        <AboutSelection/>
        <SkillsSelection/>
        <ProjectsSection/>
        <ContactSection/>
        <Footer/>
       </main>
    </div>
    );
}