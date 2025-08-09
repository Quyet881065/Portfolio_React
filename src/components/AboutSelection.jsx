import { Briefcase, Code, User } from "lucide-react"


export const AboutSelection = () => {
    return (
        <section id="about" className="py-25 px-5 relative">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold uppercase">personal information</h3>
                        <ul className="flex flex-col space-y-3 text-xl">
                            <li className="">
                                <span className="font-light">Full Name :</span>
                                <span className="font-bold text-xl ml-2">Nguyen Van Quyet</span>
                            </li>
                            <li>
                                <span className="font-light">Birthday :</span>
                                <span className="font-bold text-xl ml-2">12/12/1999</span>
                            </li>
                            <li>
                                <span className="font-light">Phone :</span>
                                <span className="font-bold text-xl ml-2">0326881065</span>
                            </li>
                            <li>
                                <span className="font-light">Gender :</span>
                                <span className="font-bold text-xl ml-2">Male</span>
                            </li>
                            <li>
                                <span className="font-light">Address :</span>
                                <span className="font-bold text-xl ml-2">Từ Sơn Bắc Ninh</span>
                            </li>
                            <li>
                                <span className="font-light">Email :</span>
                                <span className="font-bold text-xl ml-2">nvquyet881065@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                    {/* <div className="gradient-border p-6 card-hover">
                            <div className="flex flex-start gap-5">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project Management</h4>
                                    <p>
                                        Leading projects from conception to completion with agile
                                        methodologies.
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    <div className="flex flex-col space-y-6 mb-15">
                        <h3 className="font-semibold text-2xl uppercase">Education & Experience</h3>
                        <div className="flex flex-row justify-center space-x-8">
                            <div className="w-9 h-9 bg-[var(--main)] rounded-full relative">
                                <div className="absolute w-1 h-12 bg-gray-600 bottom-[-48px] left-4"></div>
                            </div>
                            <div>
                                <span className="border border-gray-500 bg-gray-600 p-1 rounded-lg text-xs">2017-2021</span>
                                <div className="flex space-x-2">
                                    <p className="uppercase font-bold">Bách Khoa - </p>
                                    <span className="uppercase font-medium opacity-50">college</span>
                                </div>
                                <p className="text-sm">Graduated</p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center space-x-8">
                            <div className="w-9 h-9 bg-[var(--main)] rounded-full relative ml-2">
                                <div className="absolute w-1 h-12 bg-gray-600 bottom-[-48px] left-4"></div>
                            </div>
                            <div>
                                <span className="border border-gray-500 bg-gray-600 p-1 rounded-lg text-xs">2023-2025</span>
                                <div className="flex space-x-2">
                                    <p className="uppercase font-bold">FPT Aptech - </p>
                                    <span className="uppercase font-medium opacity-50">Academy</span>
                                </div>
                                <p className="text-sm">Graduated</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}