import React from 'react'

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
    <div className=' space-y-2 mt-2'>
        {
            ProjectDesign.map((project)=>{
                return(
                    <div key={project.id} className=' items-center justify-between flex font-applefontlight'>
                       
                       <div>
                       <p className=' font-applefontregular'>{project.name}</p>
                       <p className=' text-sm'>{project.description}</p>
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