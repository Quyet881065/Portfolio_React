import { Close } from "@mui/icons-material"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utilts"

export const ProjectDetails = ({ items, close }) => {
    const [current, setCurrent] = useState(0);

    // ⌨️ Xử lý sự kiện ESC
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                close();  // gọi hàm đóng nếu bấm ESC
            }
        }
        document.addEventListener('keydown', handleKeyDown);
        // Cleanup khi component bị unmount
        return () => { document.removeEventListener('keydown', handleKeyDown) };
    }, [close])

    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/80 z-50">
            <div className="flex justify-center items-center min-h-full">
                <div className="max-w-[1200px] w-full h-130 p-3 bg-zinc-800 rounded-lg relative grid grid-cols-8 space-x-2">
                    {/* LEFT */}
                    <div className="col-span-5">
                        <div className="absolute  rounded-full p-2 right-[-11px] top-[-11px] 
                        cursor-pointer border shadow-[0_0_7px_rgba(0,0,0,0.9)] backdrop-blur-lg" onClick={close}>
                            <Close className="text-primary  " />
                        </div>
                        {/* Slide ảnh */}
                        <div className="flex flex-col space-y-3">
                            <div className="relative h-[430px] w-full overflow-hidden" >
                                {items.thumbUrl.map((src, index) => (
                                    <img key={index} src={src} className={cn("absolute top-0 left-0 w-full h-full object-cover rounded-lg",
                                        current == index ? "opacity-100 z-10" : "opacity-0 z-0"
                                    )} />
                                ))}
                            </div>
                            {/* Thumbnail duoi */}
                            <div className="flex justify-center gap-5 cursor-pointer">
                                {items.thumbUrl.map((src, index) => (
                                    <img src={src} key={index} onClick={() => setCurrent(index)}
                                        className={cn("h-[60px] w-[80px] object-cover border-2 rounded-lg transition-all duration-300 outline-none",
                                            current === index ? "ring-1 ring-[var(--main)] scale-105" : "opacity-70 hover:opacity-100"
                                        )} />
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* RIGHT */}
                    <div className="col-span-3 text-white/80 break-words overflow-hidden">
                        <h3 className="font-bold text-2xl mb-20 mt-10 text-center">{items.title}</h3>
                        <p className="my-5 font-medium text-xl">{items.description}</p>
                        <ul className="flex flex-col items-start space-y-5">
                            <li className="">
                                <span>Front End : </span>
                                <span className="font-semibold text-lg">{items.fontend.join(" , ")}</span>
                            </li>
                            <li>
                                <span>Back End : </span>
                                <span className="font-semibold text-lg">{items.backend.join(" , ")}</span>
                            </li>
                            <li className="flex flex-col">
                                <span>Demo Url : </span>
                                <span className="font-medium text-md">{items.demoUrl}</span>
                            </li>
                            <li className="flex flex-col ">
                                <span>GitHub Url : </span>
                                <span className="font-medium text-md break-all">{items.githubUrl}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}