import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <Image
          src={"/image/banners/banner-4.png"}
          alt="irizn"
          fill
          className="object-cover object-left-top w-full h-full -z-10 brightness-[0.85]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full sm:w-[500px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white uppercase text-heading">irizn</h3>
            <p className="leading-6 text-center text-white">
              Remarkable accomplishments in business are the product of collective effort, rather than individual
              endeavor.
            </p>
          </div>
        </div>
      </div>
      <div className="container max-w-[630px] flex-center flex-col gap-8 text-center">
        <h3 className="text-5xl uppercase text-heading">MORE THAN 5 YEARS OF ESTABLISHMENT</h3>
        <div>
          <svg height="100" viewBox="0 0 8 100" width="8" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m1 100c0-3.845 6-3.845 6-7.69s-6-3.845-6-7.691c0-3.845 6-3.845 6-7.69 0-3.847-6-3.847-6-7.693 0-3.843 6-3.843 6-7.687 0-3.845-6-3.845-6-7.691 0-3.845 6-3.845 6-7.69 0-3.846-6-3.846-6-7.69 0-3.847 6-3.847 6-7.694s-6-3.847-6-7.695c0-3.846 6-3.846 6-7.693 0-3.849-6-3.849-6-7.698s6-3.849 6-7.698"
              fill="none"
              stroke="#daa855"
              strokeWidth="2"
            ></path>
          </svg>
        </div>
        <p>
          Founded in 2019, IRIZN has grown significantly over the past five years, boasting a team of over 120 seasoned
          professionals specializing in marketing and online advertising. Our extensive outreach has led to partnerships
          with over 20,000 individual and corporate clients across Cambodia, Asia, and select European countries.
        </p>
      </div>
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0">
          <Image
            src={"/image/banners/banner-5.png"}
            alt="irizn"
            fill
            className="object-cover object-center w-full h-full -z-10 brightness-[0.85]"
          />
        </div>
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[600px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-center text-white uppercase text-heading">Why Choose Us?</h3>
            <p className="leading-6 text-center text-white">
              - Opt for our distinctive and impactful marketing approach.
              <br />
              - Our creative and adaptable team prioritizes tangible value for your business.
              <br />
              - Experience high-performance solutions at reasonable costs - the ideal choice.
              <br />
              - Benefit from our proven track record, diverse marketing solutions, and unwavering commitment to your
              growth.
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
