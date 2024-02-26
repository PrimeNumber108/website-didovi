import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <Image
          src="/image/banners/banner-4.jpg"
          alt="didovi"
          fill
          className="object-cover object-left-top w-full h-full -z-10 brightness-[0.85]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full sm:w-[500px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white uppercase text-heading">didovi</h3>
            <p className="leading-6 text-center text-white">
              Our promise is simple: deliver highly effective marketing strategies, uniquely tailored for your
              company&apos;s success.
            </p>
          </div>
        </div>
      </div>
      <div className="container max-w-[630px] flex-center flex-col gap-8 text-center">
        <h3 className="text-5xl uppercase text-heading">A LEGACY IN MARKETING LEADERSHIP AND INNOVATION</h3>
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
          With a legacy spanning over a decade, our company is led by seasoned marketing experts boasting a wealth of
          experience in steering numerous successful campaigns for globally recognized brands.
        </p>
        <p>
          Comprising around 150 dedicated professionals, our team brings together diverse expertise garnered from
          leading organizations in Singapore and internationally. Fueled by innovation, enthusiasm, and an unwavering
          commitment to excellence, each team member is poised to deliver exceptional results.
        </p>
      </div>
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/image/banners/banner-5.jpg"
            alt="didovi"
            fill
            className="object-cover object-center w-full h-full -z-10 brightness-[0.85]"
          />
        </div>
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[550px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-center text-white uppercase text-heading">OUR VALUES?</h3>
            <p className="leading-6 text-center text-white">
              At the heart of our operations are unwavering commitments that reflect our dedication to your success:
              <br />
              - Highest quality. <br />
              - Professionalism maintained. <br />
              - Prioritize transparency, integrity. <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
