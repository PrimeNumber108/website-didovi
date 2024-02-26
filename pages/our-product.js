/* eslint-disable @next/next/no-img-element */
import React from "react";
import { v4 } from "uuid";

const products = [
  {
    name: "HolySmile Teeth Whitening",
    image: "/image/products/product-1.jpg",
    desc: ["Eliminate yellow undertones in your teeth, unveiling a brighter, enhanced smile."],
  },
  {
    name: "Air Cushion CC Cream | Mushroom Head Foundation",
    image: "/image/products/product-2.jpg",
    desc: ["CC Cream Foundation Full Coverage, Even Skin Tone, Suitable for All Skin Types."],
  },
  {
    name: "Charmante Hands Hydration Gel",
    image: "/image/products/product-3.png",
    desc: ["Defend your hands against environmental and household stresses, leaving skin smooth and refreshed."],
  },
  {
    name: "KASOMO Boosting Hair Growth Spray",
    image: "/image/products/product-4.png",
    desc: ["Revitalize your scalp, repair damage, and trigger cell renewal for denser hair growth."],
  },
  {
    name: "KASOMO Nourishing Hair Repair Mask",
    image: "/image/products/product-5.jpg",
    desc: ["An ideal therapy for damaged, unruly hair, effortlessly restore smoothness."],
  },
  {
    name: "KASOMO Stimulating Beard & Eyebrow Growth Serum",
    image: "/image/products/product-6.jpg",
    desc: ["Regrow beards & eyebrows fast in weeks, improve patchy, short beards, and eyebrows."],
  },
  {
    name: "KASOMO Anti Dandruff & Hair Loss Shampoo",
    image: "/image/products/product-7.jpg",
    desc: ["Reduce hair loss, breakage problems and prevent dandruff back."],
  },
  {
    name: "Morri Glow Renewal Exfoliating Gel",
    image: "/image/products/product-8.jpg",
    desc: [
      "Frequent use gently exfoliates, promoting a clearer, even complexion, while simultaneously hydrating and smoothing the skin.",
    ],
  },
  {
    name: "Trezzen Grey Hair Removal Bar Soap",
    image: "/image/products/product-9.jpg",
    desc: ["Diminishes grey tones with each wash while simultaneously boosting hair thickness by up to 98%."],
  },
  {
    name: "Berari Vein Recovery Balm",
    image: "/image/products/product-10.jpg",
    desc: [
      "Swiftly diminish spider veins and broken blood vessels, fortify veins, and enhance vein wall functionality for a noticeable reduction in unsightly spider veins.",
    ],
  },
];

const OurProduct = () => {
  return (
    <div className="px-3 py-6 lg:px-16 sm:px-6 sm:py-8 lg:py-10">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 md:gap-4 xl:gap-6">
        {products.map(({ name, image, desc }) => (
          <div key={v4()} className="flex flex-col overflow-hidden rounded shadow">
            <img src={image} alt="product" className="aspect-square"></img>
            <div className="flex flex-col gap-3 px-3 pt-4 pb-5">
              <p className="text-[16px] text-center hover:text-blue-400 text-black leading-6">{name}</p>
              <div className="flex-center">
                <ul className="space-y-1">
                  {desc.map((text) => (
                    <li key={v4()} className="text-center text-secondary">
                      &bull; {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProduct;
