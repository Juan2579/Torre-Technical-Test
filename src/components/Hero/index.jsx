import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="w-full flex items-center relative bg-hero-bg bg-primary-purple">
      <div className="overlay"></div>
      <section className="w-[90%] relative h-full mx-auto flex flex-col gap-10 py-10 items-center justify-between md:flex-row lg:py-20 xl:w-[85%] min-[1800px]:w-[75%] min-[2000px]:w-[65%] z-50">
        <div className="max-w-[600px] flex flex-col items-center text-center gap-5 lg:text-left lg:items-start lg:gap-8">
          <p className="font-normal text-primary-blue tracking-widest">
            WELCOME TO JOBFINDLY
          </p>
          <h1 className="text-white text-3xl font-bold lg:text-6xl">
            We help you find your ideal candidate.
          </h1>
          <p className="text-white lg:text-2xl">
            Are you ready to find outstanding candidates? With JobFindly, your
            ideal candidate is just a click away.
          </p>
          <Link
            href="#jobs"
            className="bg-primary-blue text-white font-bold rounded-md py-4 px-6 cursor-pointer transition-all hover:opacity-50"
          >
            GET STARTED
          </Link>
        </div>
        <Image
          className="max-h-[300px] max-w-[300px] md:min-w-[400px] md:min-h-[400px] lg:min-h-[500px] lg:min-w-[500px]"
          src="/heroImage.png"
          width={500}
          height={500}
          alt="Person thinking"
        />
      </section>
    </div>
  );
};
