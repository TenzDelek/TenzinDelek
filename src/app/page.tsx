
const categories = [
  {
    id: 1,
    name: "Design"
  },
  {
    id: 2,
    name: "Development"
  },
  {
    id: 3,
    name: "Case Study"
  }
];

const Page = () => {
 
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="animate-intro opacity-0 font-semibold ">
        Tenzin Delek
      </h1>
      
      <div className="flex animate-intro items-center font-light opacity-0 [animation-delay:0.25s]">
        <span className="text-neutral-500 text-sm">Design Engineer</span>
      </div>
      
      <p className="mt-4 font-light max-w-[60ch] animate-intro opacity-0 [animation-delay:0.4s]">
        I am a UI Developer by Profession. I do Designing and Development and some artwork as well.
        I believe every pixel makes a Difference
      </p>
      
      <div className="mt-4 animate-intro opacity-0 [animation-delay:0.5s]">
        <p className="font-semibold mb-2">
          Projects
        </p>
        
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              className="rounded border border-neutral-300 px-2 py-1 text-xs text-neutral-500 hover:bg-neutral-200 hover:text-neutral-600 transition"
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;