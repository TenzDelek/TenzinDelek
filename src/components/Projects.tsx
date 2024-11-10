import Link from 'next/link';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const ProjectDesign=[
    {
        id:1,
        name:"Monlam Melong",
        description:"Conversational Chatbot in Tibetan",
        tag:"Design",
    },
    {
        id:2,
        name:"Monlam Nyamrub",
        description:"Crowdsourcing initiative to collect Tibetan data for a Machine Learning project",
        tag:"Design",
    },
    {
        id:3,
        name:"Monlam's Logo",
        description:"Logo for Monlam Melong, Monlam Translate and Monlam Extension", 
        tag:"Design", 
    },
    {
        id:4,
        name:"VITgram",
        description:"Social Network for VIT Students", 
        tag:"Design", 
    },
    
]

const ProjectDev = [
    {
      title: "FlashCard Generator",
      desc: "helps generating flashcards based on the given text. It uses the GEMINI API to generate the flashcards.",
      link: "https://flashcardai-xi.vercel.app/",
      code: "https://github.com/TenzDelek/flashcardai",
      tag: "Development"
    },
    {
      title: "CalPage",
      desc: "is a OCR based sum generator. aiming toward the Tibetan Winter Business Seller to calculate their loan faster ",
      link: "https://tibetanwinterocr.vercel.app/",
      code: "https://github.com/TenzDelek/Sumit-OCR-Tool-for-Winter-Business",
      tag: "Development"
    },
    {
      title: "RAGCHATBOT",
      desc: "is a RAG based chatbot that takes context from gdrive file, and uses it to answer questions. ",
      code: "https://github.com/TenzDelek/ratemyprof",
      tag: "Development"
    },
    {
        title: "VITtweet",
        desc: "allows you to share your thoughts with the community of Vellore Institute of Technology. ",
        link: "https://capstone-vitgram-2-0.vercel.app/",
        code: "https://github.com/TenzDelek/Capstone-VITGRAM2.0",
        tag: "Development"
      },
  ];

const Projects = () => {
  return (
    <div className=' space-y-3 mt-2'>
        {
            ProjectDesign.map((project)=>{
                return(
                    <div key={project.id} className=' items-center justify-between flex font-applefontlight'>
                       
                       <div>
                       <Link href={`/projects/${project.name}` }className=' group flex items-center gap-x-1 cursor-pointer w-fit font-applefontregular'>{project.name} <span className="relative overflow-hidden h-fit w-fit">
              <GoArrowUpRight className=" text-neutral-400 text-sm group-hover:-translate-y-5 group-hover:translate-x-5 duration-500 transition-transform ease-in-out-circ fill-light-gray stroke-[0.2]" />
              <GoArrowUpRight className="absolute text-neutral-400 text-sm top-0 group-hover:translate-x-0 duration-500 group-hover:translate-y-0 transition-all ease-in-out-circ translate-y-5 -translate-x-5 fill-light-gray stroke-[0.2]" />
            </span></Link>
                       <p className=' text-sm text-neutral-500'>{project.description}</p>
                        </div>
                        <p className=' text-sm'>{project.tag}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Projects