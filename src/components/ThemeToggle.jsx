import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import {cn} from "../lib/utilts";
export const ThemeToggle = () => {
    const [isDartMode, setIsDartMode] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('theme') === 'dark'){
            setIsDartMode(true);
            document.documentElement.classList.add('dark');
        }else{
            localStorage.setItem('theme', 'light');
            setIsDartMode(false);
        }
    },[]);

    const toggleTheme = () => {
        if(isDartMode ){
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDartMode(false);

        }else{
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDartMode(true);
        }   
    }

    return <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 focus:outline-hidden")}>
        {isDartMode ?
         <Sun className="h-6 w-6 text-yellow-600"/> 
        : 
        <Moon className="h-6 w-6 text-blue-600"/>}
        </button>

}