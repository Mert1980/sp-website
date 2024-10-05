import CustomButton from "@/components/custom-button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative pt-48 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <div className="container">
        <div className="relative z-2 max-w-512 max-lg:max-w-388">
          <div className="uppercase text-purple-800 dark:text-p1 !mb-10">
            Smart business solutions
          </div>
          <h1 className="mb-6 h1 text-foreground max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12 max-sm:text-4xl">
            Painless digital transformation
          </h1>
          <p className="max-w-440 mb-14 body-1 max-md:mb-10">
            We help businesses grow by providing seamless{" "}
            <span className="dark:text-p1 text-purple-800">digital</span> and{" "}
            <span className="dark:text-p1 text-purple-800">AI</span> solutions
            that are tailored to their needs.
          </p>
          <Link href="/services">
            <CustomButton icon="/images/zap.svg">Services</CustomButton>
          </Link>
        </div>

        <div className="absolute -top-4 left-[calc(50%-200px)] pointer-events-none w-[1230px] hero-img_res">
          <Image
            src="/images/hero-9.png"
            width={1230}
            height={600}
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
