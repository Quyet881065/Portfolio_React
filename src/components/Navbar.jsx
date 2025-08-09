import { useEffect, useState } from "react"
import { cn } from "@/lib/utilts";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projetcts" },
    { name: "Contact", href: "#contact" }
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
       <div className="relative">
         <nav className={cn("fixed w-full z-40",
            isScrolled ? "py-5 backdrop-blur-md shadow-xs" : "py-5"
        )}>
            <div className="container flex items-center justify-center">

                {/* desktop nav */}
                <div className="hidden md:flex space-x-10 ml-50">
                    {navItems.map((item, index) => (
                        <a key={index} href={item.href} className="text-foreground/80 text-xl font-semibold hover:text-primary transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                </div>
                {/* mobile nav */}
                <button onClick={() => setIsMenuOpen((prev) => !prev)} className="md:hidden  text-foreground z-50 absolute right-5 top-3 cursor-pointer">
                    {isMenuOpen ? <X size={27} /> : <Menu size={27} />}
                </button>

                <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                )}>
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, index) => (
                            <a key={index} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
       </div>
    )
}