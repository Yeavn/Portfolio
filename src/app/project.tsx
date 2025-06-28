import { CiLocationArrow1 } from "react-icons/ci";
import { FaGithub } from "react-icons/fa"

export default function Project({project, img, descrtiption, demoLink, github}: {project?: string, img?: string, descrtiption?: string, demoLink?: string, github?: string}) {
    return (
        <div className="w-full lg:w-2/5 flex items-center justify-center flex-col shadow-lg">
            <div className="w-full bg-[#1E1E1E] py-6 flex items-center justify-center rounded-t-lg">
                <img src={`/projects/${img}`} alt="" className="w-4/5 rounded-lg shadow-lg" />
            </div>
            <div className="bg-[#353535] w-full p-8 rounded-b-lg">
                <h1 className="text-xl text-[#C7C5C5]">{project}</h1>
                <p className="text-[#878787] mt-2">{descrtiption}</p>
                <div className="mt-4"><a className=" text-[#FD6F00]" href={demoLink}><CiLocationArrow1 className="inline mr-2"  />Demo ansehen</a>
                <br /> 
                <a href={github} className="text-[#FD6F00]"><FaGithub className="inline mr-2" />Code ansehen</a></div>
            </div>
        </div>
    )
}