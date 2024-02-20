import ProductAds from "@/module/products/ProductAds";
import ProductLayout from "@/module/products/ProductLayout";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="relative w-full min-h-screen">
        <Image
          src={"/image/banners/banner-3.png"}
          alt="irizn"
          fill
          className="object-cover object-center w-full h-full -z-10 brightness-[0.8]"
        />
        <div className={`absolute inset-0 flex justify-center items-center`}>
          <div className="w-full sm:w-[550px] flex justify-center items-center flex-col lg:gap-9 gap-4">
            <h3 className="text-white uppercase text-heading">irizn</h3>
            <p className="leading-6 text-center text-white">
              We offer comprehensive social media marketing solutions tailored to your needs, including Social media
              marketing, Email marketing and Affiliate marketing.
            </p>
          </div>
        </div>
      </div>
      <ProductLayout />
      <div className="container max-w-[1200px] 2xl:max-w-[1600px] pt-0 flex justify-between md:flex-row flex-col gap-8 2xl:gap-16">
        <ProductAds
          image="/image/services/service-4.png"
          content="Over the past years, we have assisted more than 20,000 businesses from diverse industries in substantially increasing their revenue."
        />
        <ProductAds
          image="/image/services/service-5.png"
          content="In 2023, we gained an additional 4,500 new clients and supported them in achieving remarkable results."
        />
      </div>
    </>
  );
};

export default Services;
