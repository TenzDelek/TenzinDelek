'use client'
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Link from "next/link";
import { useState } from "react";
const links = [
  {
    title: "Github",
    link: "https://github.com/TenzDelek",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/tenzin-delek-8a157724b/",
  },
  {
    title: "LeetCode",
    link: "https://leetcode.com/u/TenzinDelek/",
  },
];
const categories = [
  { id: 0, name: "All" },
  { id: 1, name: "Design" },
  { id: 2, name: "Development" },
  { id: 3, name: "Case Study" }
];

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(prev => 
      prev === categoryName ? "All" : categoryName
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="animate-intro opacity-0 font-semibold ">
        Tenzin Delek 
      </h1>
      
      <div className="flex animate-intro items-center font-light opacity-0 [animation-delay:0.25s]">
        <span className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-neutral-700">Design Engineer</span>
      </div>
      
      <p className="mt-4 font-applefontlight max-w-[60ch] animate-intro opacity-0 [animation-delay:0.3s]">
        I am a UI Developer by Profession. I do Designing and Development and some artwork as well.
        I believe every pixel makes a Difference
      </p>
      <div className="mt-4 animate-intro opacity-0 [animation-delay:0.4s]">
        <p>Experience</p>
        <Experience/>
      </div>
      <div className="mt-4 animate-intro opacity-0 [animation-delay:0.5s]">
        <p className="font-semibold mb-2">
          Projects
        </p>
        
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`rounded border px-2 py-1 text-xs transition ${
                selectedCategory === category.name
                  ? "bg-neutral-200 text-neutral-600 border-neutral-400"
                  : "border-neutral-300 text-neutral-500 hover:bg-neutral-200 hover:text-neutral-600"
              }`}
              onClick={() => handleCategoryClick(category.name)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      <div>
        <Projects category={selectedCategory}/>
      </div>
      <p className=" text-lg mt-8"> Connect</p>
      <div className=" flex gap-x-2 ">
       
        {links.map((item, index) => (
              <Link
                className=" text-sm font-applefontregular  sm:block relative  overflow-hidden group h-fit  "
                href={item.link}
                key={index}
                target="_blank"
              >
                <span className="flex flex-col group-hover:-translate-y-5 group-hover:opacity-0 transition-all ease-in-out-circ duration-500">
                  {item.title}
                </span>
                <span className="absolute inset-0 group-hover:translate-y-0 translate-y-5 xl:translate-y-8 transition-all ease-in-out-circ duration-500 ">
                  {item.title}
                </span>
              </Link>
            ))}
      </div>
      <div className="mb-6 mt-6 text-sm text-gray-400 font-applefontlight">
      <p>Made with Nextjs</p>
      <p>Last edited 15th November,2024</p>
      </div>
      
    </div>
  );
};

export default Page;