import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full py-8">
      <div className="centered-container">
        <p className="text-black  text-4xl">
          Building Scalable, <br /> Efficient and Modular Software.
        </p>
      </div>
      <div className="centered-container mt-8">
        <p className="text-lg">
          My name is Sheharyar and I like to tinker with computers. <br /> 
          Here is some of the work I have done.
        </p>
      </div>
      <div className="flex overflow-hidden gap-x-2 mt-4 flex-row justify-start items-center centered-container">
        {Array.from({ length: 5 }).map((_, i) => (
          <ProjectCard key={i} />
        ))}
      </div>
    </main>
  );
}

function ProjectCard() {
  return (
    <div className="flex-shrink-0 w-72 rounded-sm p-2 border-[1px] flex flex-col justify-start items-start gap-y-2 border-black">
      <p className="font-medium">Contactless Checkout</p>
      <p className="font-light text-sm text-gray-700 tracking-wide">
        Contactless Checkout makes self checkout a breeze. Serving thousands of
        customer with ease. It was built using state of the art tech.
      </p>
      <div className="w-full font-mono gap-x-3 flex-wrap flex flex-row justify-start items-center">
        {["Typescript", "Nextjs", "Sanity", "Drizzle", "Sanity", "Drizzle", "Stripe", "ReactJs"].map(
          (item, i) => (
            <TechTag key={1} tech={item} />
          ),
        )}
      </div>
      <p className="self-end underline text-sm cursor-pointer active:text-gray-700">read more</p>
    </div>
  );
}

function TechTag({ tech }: { tech: string }) {
  return <p className="text-sm">#{tech}</p>;
}
