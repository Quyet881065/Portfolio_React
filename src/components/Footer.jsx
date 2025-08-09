import { ArrowUp } from "lucide-react"


export const Footer = () => {
    return (
        <footer className="py-12 px-5 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} Personal Portfolio .</p>
            <a href="#hero" className="p-2 rounded-full bg-primary/30 hover:bg-primary/50 text-primary transition-colors">
                <ArrowUp/>
            </a>
        </footer>
    )
}