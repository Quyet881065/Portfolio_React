import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import {cn} from "../lib/utilts";
export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('theme') === 'dark'){
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }else{
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    },[]);

    const toggleTheme = () => {
        if(isDarkMode ){
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);

        }else{
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }   
    }

    return <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full  duration-300  cursor-pointer")}>
        {isDarkMode ?
         <Sun className="h-6 w-6 text-yellow-600"/> 
        : 
        <Moon className="h-6 w-6 text-red-600"/>}
        </button>

}