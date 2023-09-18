import Image from "next/image";

export const Hero = () => {
  return (
    <div className="w-full relative bg-hero-bg bg-primary-purple">
      <div className="overlay"></div>
      <section className="w-[90%] relative h-full mx-auto flex flex-col gap-10 pt-10 items-center xl:w-[85%] min-[1800px]:w-[75%] min-[2000px]:w-[65%] z-50">
        <div className="flex flex-col items-center text-center gap-5">
          <p className="font-normal text-primary-blue tracking-widest">WELCOME TO JOBFINDLY</p>
          <h1 className="text-white text-3xl font-bold">We help you find your dream job.</h1>
          <p className="text-white"> Are you ready to elevate your professional journey to new heights? With Job Findly, your dream job is just a click away. </p>
          <a className="bg-primary-blue text-white font-bold rounded-md py-4 px-6">
            GET STARTED
          </a>
        </div>
        <Image className="max-h-[300px] max-w-[300px]" src="/heroImage.png" width={500} height={500}  />
      </section>
    </div>
  );
};
