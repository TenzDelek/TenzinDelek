import Image from "next/image";

const Page = async ({ params }: { params: { id: string } }) => {
  const id = decodeURIComponent((await params).id);
  return (
    <div className="max-w-4xl text-center mx-auto px-4">
      <p className=" text-lg">{id}</p>
      <p className=" font-applefontlight mb-4 ">
        A Conversational Tibetan Chatbot Trained with 6 billion Tokens{" "}
      </p>
      <Image
       className="w-full"
        src="/Design/melongmonlam.png"
        quality={100}
        priority
        width={800}
        height={400}
        alt="Melong"
      />

      <div className=" flex items-center justify-between my-4 ">
        <div>
            <p>Role</p>
            <p className=" font-applefontlight">Designer</p>
        </div>
        <div>
            <p>Timeline</p>
            <p className=" font-applefontlight">Sept 2024 - Oct 2024</p>
        </div>
        <div>
            <p>Tools</p>
            <p className=" font-applefontlight">Figma</p>
        </div>
      </div>
      <p className=" font-applefontlight">Monlam Melong is one of the hero product for Monlam Manifest 2024.
designing it was kind of a hurdle and a great learning experience. First 
comes the planning part</p>
    </div>
  );
};

export default Page;
