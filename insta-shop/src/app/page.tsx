"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Splash, Check_Icon } from "./assets";
import CustomButton from "./components/CustomButton";

export default function Home() {
  const router = useRouter();

  return (
    <div
      className={`flex mx-auto py-[92px] flex-col px-[32px] justify-between  min-h-screen`}
    >
      <div className="text-[#000000E5]">
        <div className="w-full flex justify-center">
          <Image
            src={Splash}
            alt="splash_image"
            className="object-contain w-[296px] h-[210px] rounded-]105.58px]"
          />
        </div>

        <div className="text-center  py-10  w-[296px] mx-auto flex flex-col gap-3">
          <h2 className="font-bold text-[36px] leading-[39.6px] tracking-[0.5%] ">
            Welcome
          </h2>
          <p className="font-normal text-[14px] leading-[18.23px] tracking-[0.5%]">
            The safest platform to shop from social media vendors
          </p>
        </div>

        <div className="bg-[#FFEAFA] border-[#8A226F] mx-auto rounded-[12px] border-[0.5px] px-[16px] py-[12px] flex flex-col gap-[12px] w-[296px] ">
          {benefits.map((item, index) => (
            <div className="flex flex-row gap-[8px]" key={index}>
              <Image src={Check_Icon} alt="check_circle_icon" className="" />
              <p className="text-[14px] font-medium leading-[18.23px] tracking-[0.5%] ">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center pt-5">
        <CustomButton
          title="Get started"
          handleSubmit={() => router.push("/get-started")}
        />
      </div>
    </div>
  );
}

const benefits = [
  "Reach Millions of Shoppers",
  "Easy Product Listing",
  "Secure and Fast Payments",
  "Boost Your Visibility",
];
