"use client";

import CustomButton from "@/app/components/CustomButton";
import CustomInput from "@/app/components/CustomInput";
import ReturnButton from "@/app/components/ReturnButton";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Upload } from "@/app/assets";
import { ProgressBar3 } from "@/app/components/ProgressBar";
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();
    
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const [logo, setLogo] = useState<string | null>(null)
  const [storeProfile, setStoreProfile] = useState({
    storeName: "",
    tagName: "",
    storeNumber: "",
    storeEmail: "",
    category: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStoreProfile((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  
  const handleImageChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if(file){
        const imageURL = URL.createObjectURL(file);
        setLogo(imageURL);
      }
    
  }

  const handleButtonClick = () => {
    if(fileInputRef.current){

        fileInputRef.current.click();
    }
  };

  return (
    <div className="flex flex-col justify-between mx-auto w-[328px] min-h-screen ">
      <div>
        <div>
          <ReturnButton title="Get Started" />
        </div>

        <div className="pb-[16px]">
          <ProgressBar3 />
          </div>

        <div className="w-[320px] flex flex-col gap-[24px]">
          <div className="text-[14px] font-normal text-[#00000099] leading-[18.23px] tracking-[0.5%] flex flex-col gap-[8px]">
            <button onClick={handleButtonClick} className="rounded-[12px] border border-[#00000033] h-[140px] flex flex-col gap-[12px] py-[16px] px-[4px] justify-center items-center">
                <input onChange={handleImageChange} ref={fileInputRef} type="file" hidden accept="image/*" />
              <Image src={logo ? logo : Upload } alt="upload_img" width={0} height={0} className="object-contain w-[80px] h-[80px]" />
              <p className="leading-[15.62px] text-[12px] tracking-[0.5%] text-[#00000066] ">
                Upload store logo
              </p>
            </button>
            <CustomInput
              value={storeProfile.storeName}
              name="storeName"
              placeholder={"Store name"}
              handleChange={handleChange}
            />
            <CustomInput
              value={storeProfile.tagName}
              name="tagName"
              placeholder="Store tag name"
              handleChange={handleChange}
            />
            <CustomInput
              value={storeProfile.storeNumber}
              name="storeNumber"
              placeholder="Store phone number"
              handleChange={handleChange}
            />
            <CustomInput
              value={storeProfile.storeEmail}
              name="storeEmail"
              placeholder="Store email"
              type="email"
              handleChange={handleChange}
            />
            <CustomInput
              value={storeProfile.category}
              name="category"
              placeholder="Category"
              handleChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="py-16">
        <CustomButton title="Continue" handleSubmit={() => router.push("/add-product")} />
      </div>
    </div>
  );
};

export default Page;
