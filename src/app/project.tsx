import { CiLocationArrow1 } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function Project({
  project,
  img,
  descrtiption,
  demoLink,
  github,
}: {
  project?: string;
  img?: string;
  descrtiption?: string;
  demoLink?: string;
  github?: string;
}) {
  return (
    <div className="w-full lg:w-2/5 flex items-center justify-center flex-col shadow-lg">
      <div className="w-full bg-[#1E1E1E] py-6 flex items-center justify-center rounded-t-lg h-[250px]">
        <img
          src={`/projects/${img}`}
          alt=""
          className="w-4/5 rounded-lg shadow-lg"
        />
      </div>
      <div className="bg-[#353535] w-full p-8 rounded-b-lg h-[250px] overflow-scroll scrollbar-hide">
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            boxShadow: "inset 0 -30px 20px -20px rgba(0, 0, 0, 0.5)",
          }}
        ></div>
        <h1 className="text-xl text-[#C7C5C5]">{project}</h1>
        <p className="text-[#878787] mt-2">{descrtiption}</p>
        <div className="mt-4">
          <span
            className=" text-[#FD6F00] cursor-pointer"
            onClick={() => window.open(demoLink, "_blank")}
          >
            <CiLocationArrow1 className="inline mr-2" />
            Ansehen
          </span>
          <br />
          <span
            className={`text-[#FD6F00] ${!github && "hidden"} cursor-pointer`}
            onClick={() => window.open(github, "_blank")}
          >
            <FaGithub className="inline mr-2" />
            Code ansehen
          </span>
        </div>
      </div>
    </div>
  );
}
