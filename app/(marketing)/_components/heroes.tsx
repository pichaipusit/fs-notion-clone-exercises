import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="flex gap-x-2">
      <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
        <Image
          src="/documents.png"
          alt="documents"
          fill
          className="object-contain dark:hidden"
        />
        <Image
          src="/documents-dark.png"
          alt="documents"
          fill
          className="object-contain hidden dark:block"
        />
      </div>
      <div className="relative h-[400px] w-[400px] hidden md:block">
        <Image
          src="/reading.png"
          fill
          className="object-contain dark:hidden"
          alt="Reading"
        />
        <Image
          src="/reading-dark.png"
          fill
          className="object-contain hidden dark:block"
          alt="Reading"
        />
      </div>
    </div>
  );
};
