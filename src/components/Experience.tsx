import Image from 'next/image';
import React from 'react';
import Img1 from "../../public/company/monlam.png" 
import Img2 from "../../public/company/nucloe.png"
import Img3 from "../../public/company/headstarter.png"
const experiences = [
  {
    id: 1,
    imgs: Img1,
    name: "UI Developer",
    type: "FTE",
    company: "Monlam AI",
    duration: "OCT 2024 - PRESENT",
  },
  {
    id: 2,
    imgs: Img2,
    name: "Frontend Developer",
    type: "Intern",
    company: "Nucleo Research",
    duration: "AUG 2024 - OCT 2024",
  },
  {
    id: 3,
    imgs: Img3,
    name: "SWE Fellow",
    type: "Fellowship",
    company: "HeadStarter AI",
    duration: "JUL 2024 - SEPT 2024",
  },
];

const Experience = () => {
  return (
    <div className=' space-y-2 mt-2'>
      {experiences.map((experience) => (
        <div key={experience.id} className=' flex justify-between items-center gap-x-2'>
            <div className=' flex items-center gap-x-2'>
            <Image src={experience.imgs} placeholder='blur' width={40} height={40} className=' rounded-full border border-neutral-300' alt={experience.company} />
            <div>
            <p className=' text-sm font-applefontregular'>
              {experience.name}
            </p>
            <p className=' text-xs font-applefontlight'>
            {experience.company} | {experience.type}</p>
            </div>
            </div>
         <div className=' text-xs font-applefontlight'>
            {experience.duration}
         </div>
            
        </div>
      ))}
    </div>
  );
};

export default Experience;
