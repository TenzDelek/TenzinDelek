import { ProjectDesign } from "@/components/Projects";
import Image from "next/image";

const Page = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  const {id}= params
  const cleanid = parseInt(decodeURIComponent(id), 10);
  const project = ProjectDesign.find((p) => p.id === cleanid);

  if (!project) {
    return <div>Project not found
      <p>
      
      </p>
      </div>;


  }

  return (
    <div className="max-w-4xl text-center mx-auto px-4">
      <p className="text-lg">{project.name}</p>
      <p className="font-applefontlight mb-4">
        {project.description}
      </p>
      <Image
        className="w-full"
        src={project.imgss}
        placeholder="blur"
        width={800}
        height={400}
        alt="Melong"
      />
      <div className="flex items-center justify-between my-4">
        <div>
          <p>Role</p>
          <p className="font-applefontlight">Designer</p>
        </div>
        <div>
          <p>Timeline</p>
          <p className="font-applefontlight">Sept 2024 - Oct 2024</p>
        </div>
        <div>
          <p>Tools</p>
          <p className="font-applefontlight">Figma</p>
        </div>
      </div>
      <p className="font-applefontlight">
        Monlam Melong is one of the hero products for Monlam Manifest 2024. Designing it was a hurdle and a great learning experience. First comes the planning part.
      </p>
    </div>
  );
};

export default Page;
