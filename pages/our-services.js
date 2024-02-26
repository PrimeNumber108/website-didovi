import ProductAds from "@/module/products/ProductAds";
import ProductLayout from "@/module/products/ProductLayout";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <Image
          src="/image/banners/banner-3.jpg"
          alt="didovi"
          fill
          className="object-cover object-center w-full h-full -z-10 brightness-[0.8]"
        />
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[550px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white uppercase text-heading">didovi</h3>
            <p className="leading-6 text-center text-white">
              Unlock the full potential of your brand with our comprehensive suite of marketing services, ranging from
              strategic planning and creative content development to social media management and data-driven analytics.
            </p>
          </div>
        </div>
      </div>
      <ProductLayout />
      <div className="container max-w-[1200px] 2xl:max-w-[1600px] pt-0 flex justify-between md:flex-row flex-col gap-8 2xl:gap-16">
        <ProductAds
          image="/image/services/service-6.jpg"
          content="Your success is our mission. We promise to provide tailored marketing strategies that make a lasting impact."
        />
        <ProductAds
          image="/image/services/service-7.jpg"
          content="Our solutions effectively engaged with over 7,000 prospective clients, expanding our reach and impact in the market in 2023."
        />
      </div>
    </>
  );
};

export default Services;
