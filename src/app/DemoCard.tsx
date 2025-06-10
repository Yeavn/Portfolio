import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface DemoCardProps {
  images: string[];
  title: string;
  description: string;
  demoLink: string;
  githubLink: string;
}

export default function DemoCard({
  images,
  title,
  description,
  demoLink,
  githubLink,
}: DemoCardProps) {
  return (
    <div className="bg-[#232323] rounded-xl shadow-lg p-6 flex flex-col items-center w-96 border border-[#444] hover:border-[#FD6F00] transition-all duration-200">
      {/* Bilder-Galerie */}
      <div className="w-full flex gap-2 mb-4 overflow-x-auto">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={title + " Screenshot " + (i + 1)}
            className="h-32 w-40 object-cover rounded-lg border border-[#444] shadow"
          />
        ))}
      </div>
      {/* Titel & Beschreibung */}
      <h2 className="text-2xl text-[#C1C1C1] font-semibold mb-2 text-center">{title}</h2>
      <p className="text-[#c1c1c1b0] mb-4 text-center">{description}</p>
      {/* Links */}
      <div className="flex gap-4 mt-2">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#FD6F00] text-white px-4 py-2 rounded-md shadow hover:bg-[#fd6e00db] transition-all duration-200 font-semibold"
        >
          <FaExternalLinkAlt /> Demo
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#353535] text-[#C1C1C1] px-4 py-2 rounded-md shadow border border-[#444] hover:border-[#FD6F00] transition-all duration-200 font-semibold"
        >
          <FaGithub /> GitHub
        </a>
      </div>
    </div>
  );
}