import { ArrowDown, ArrowRight } from "lucide-react"
import { ButtonCustom } from "./button/ButtonCustom"
import { avatar } from "@/assets/project"

export const HeroSeclection = () => {
    return (
        <section id="hero"
            className="relative flex flex-col items-center justify-center min-h-screen">
            <div className="container grid grid-cols-1 md:grid-cols-8 gap-10 items-center">
                <div className="col-span-3 w-full h-full ">
                    <img src={avatar} alt="" className="rounded-3xl w-full max-w-[400px] object-cover hover:scale-105 duration-300 transition-transform" />
                </div>
                <div className="col-span-5 space-y-7">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi , I'am </span>
                        <span className="text-primary animate-fade-in-delay-1">Nguyễn Văn Quyết </span>
                    </h1>
                    <p className="text-lg text-justify leading-8 opacity-0 animate-fade-in-delay-3  ">
                        Nice to meet you! My name is Quyet and I am a person who is very passionate about
                        technology, especially the web. I aspire to create websites that not only operate
                        efficiently but also deliver significant practical value, featuring optimal design
                        and exceptional user experiences. I continuously strive to learn and apply new technologies to
                        improve my knowledge and build high-quality products that meet client needs.
                    </p>
                    <div className="flex flex-row justify-center space-x-5 relative mt-5 text-primary">
                        <a href="#about">
                            <ButtonCustom>
                                <div className="w-1/3 h-full flex items-center justify-center">
                                    <div className="w-13 h-12 bg-primary text-white rounded-full flex items-center justify-center
                                transform transition-transform duration-300 ease-in-out 
                                group-hover:animate-slide-icon-right">
                                        <ArrowRight />
                                    </div>
                                </div>
                                <div className="w-2/3 text-center font-bold transform transition-transform duration-300 ease-in-out
                                    group-hover:animate-slide-text-left">
                                    ABOUT
                                </div>

                            </ButtonCustom>
                        </a>
                        <a href="#projetcts">
                            <ButtonCustom>
                                <div className="w-1/3 h-full flex items-center justify-center ">
                                    <div className="w-13 h-12 rounded-full bg-primary text-white flex items-center justify-center
                                               group-hover:animate-slide-icon-right">
                                        <ArrowRight className="" />
                                    </div>
                                </div>
                                <div className="w-2/3 text-center font-bold group-hover:animate-slide-text-left">
                                    PROJECT
                                </div>
                            </ButtonCustom>
                        </a>

                    </div>
                    {/* <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div> */}
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>

        </section>
    )
}