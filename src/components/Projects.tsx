import Link from 'next/link';
import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { StaticImageData } from 'next/image';
import Melongimage from "../../public/Design/melongmonlam.png";
import Nyamrubimage from "../../public/Design/nyamrubmonlam.png";
import vitgram from "../../public/Design/hero.png";

interface DesignProject {
  id: number;
  name: string;
  description: string;
  tag: 'Design';
  imgss: StaticImageData;
}

interface DevProject {
  id: number;
  title: string;
  desc: string;
  link: string;
  code: string;
  tag: 'Development';
}

type Project = DesignProject | DevProject;

export const ProjectDesign: DesignProject[] = [
  {
    id: 1,
    name: "Monlam Melong",
    description: "Conversational Chatbot in Tibetan",
    tag: "Design",
    imgss: Melongimage
  },
  {
    id: 2,
    name: "Monlam Nyamrub",
    description: "Crowdsourcing initiative to collect Tibetan data for a Machine Learning project",
    tag: "Design",
    imgss: Nyamrubimage
  },
  {
    id: 3,
    name: "Monlam's Logo",
    description: "Logo for Monlam Melong, Monlam Translate and Monlam Extension",
    tag: "Design",
    imgss: Nyamrubimage
  },
  {
    id: 4,
    name: "VITgram",
    description: "Social Network for VIT Students",
    tag: "Design",
    imgss: vitgram
  },
];

const ProjectDev: DevProject[] = [
  {
    id: 5,
    title: "FlashCard Generator",
    desc: "helps generating flashcards based on the given word",
    link: "https://flashcardai-xi.vercel.app/",
    code: "https://github.com/TenzDelek/flashcardai",
    tag: "Development"
  },
  {
    id: 6,
    title: "CalPage",
    desc: "OCR based sum Generator",
    link: "https://tibetanwinterocr.vercel.app/",
    code: "https://github.com/TenzDelek/Sumit-OCR-Tool-for-Winter-Business",
    tag: "Development"
  },
  {
    id: 7,
    title: "RAGCHATBOT",
    link: "https://github.com/TenzDelek/ratemyprof",
    desc: "chatbot that takes context from gdrive file",
    code: "https://github.com/TenzDelek/ratemyprof",
    tag: "Development"
  },
  {
    id: 8,
    title: "VITtweet",
    desc: "Social hub for College Clubs and Chapter",
    link: "https://capstone-vitgram-2-0.vercel.app/",
    code: "https://github.com/TenzDelek/Capstone-VITGRAM2.0",
    tag: "Development"
  },
];


const Projects = ({ category }:{category:string}) => {
  const allProjects: Project[] = [...ProjectDesign, ...ProjectDev];
  
  const filteredProjects = category === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.tag === category);

  return (
    <div className='space-y-3 mt-2'>
      {filteredProjects.map((project) => (
        <div key={project.id} className='items-center justify-between flex font-applefontlight'>
          <div>
            {project.tag === 'Design' ? (
              <Link href={`/projects/${project.id}`} className='group flex items-center gap-x-1 cursor-pointer w-fit font-applefontregular'>
                {project.name}
                <ArrowIcon />
              </Link>
            ) : (
              <Link href={(project as DevProject).link} target="_blank" rel="noopener noreferrer" className='group flex items-center gap-x-1 cursor-pointer w-fit font-applefontregular'>
                {(project as DevProject).title}
                <ArrowIcon />
              </Link>
            )}
            <p className='text-sm text-neutral-500 w-60 md:w-96'>
              {project.tag === 'Design' ? project.description : (project as DevProject).desc}
            </p>
          </div>
          <p className='text-sm'>{project.tag}</p>
        </div>
      ))}
    </div>
  );
};

const ArrowIcon: React.FC = () => (
  <span className="relative overflow-hidden h-fit w-fit">
    <GoArrowUpRight className="text-neutral-400 text-sm group-hover:-translate-y-5 group-hover:translate-x-5 duration-500 transition-transform ease-in-out-circ fill-light-gray stroke-[0.2]" />
    <GoArrowUpRight className="absolute text-neutral-400 text-sm top-0 group-hover:translate-x-0 duration-500 group-hover:translate-y-0 transition-all ease-in-out-circ translate-y-5 -translate-x-5 fill-light-gray stroke-[0.2]" />
  </span>
);

export default Projects;