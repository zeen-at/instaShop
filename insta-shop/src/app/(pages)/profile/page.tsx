"use client";

import { Google, Ig, Tiktok } from "../../../../public/assets";
import CustomButton from "@/app/components/CustomButton";
import CustomInput from "@/app/components/CustomInput";
import { ProgressBar2 } from "@/app/components/ProgressBar";
import ReturnButton from "@/app/components/ReturnButton";
import { updateProfile } from "@/app/redux/slice/authSlice";
import { RootState, useAppSelector } from "@/app/redux/store";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Page = () => {
    const router = useRouter();

    const dispatch = useDispatch();
    
    const userEmail = useAppSelector((state: RootState) => state.auth.user?.email);

    console.log(userEmail)


    const [profile, setProfile] = useState({
        fullname: "",
        username: "",
        phoneNumber: "", 
        email: userEmail || ""
        
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProfile((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })

    }

    const handleSubmit = () => {
        try {
            //  if there were an endpoint, one would post user details to the api
            if(!profile.fullname) {
                toast.error("Full name is required")
            }
            else {
                dispatch(updateProfile(profile))
                toast.success("Profile updated successfully!")
                router.push("/store-profile")
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
      <div className="flex flex-col justify-between mx-auto w-[328px] min-h-screen ">
        <div>
          <div>
            <ReturnButton title="Get Started" />
          </div>

          <div className="pb-[16px]">
          <ProgressBar2 />
          </div>

          <div className="w-[320px] flex flex-col gap-[24px]">
            <h2 className="text-[#000000E5] font-medium text-[24px] leading-[26.4px] tracking-[0.5%]">
              Complete profile setup
            </h2>
            <div className="flex flex-col gap-[16px]">
              <p className="text-[#00000099] font-normal text-[14px] leading-[18.23px] tracking-[0.5%] ">
                Connect your socials for quick setup
              </p>

              <div className="flex gap-[8px]">
                {socialIcons.map(({ icon, link }, index) => (
                  <Link
                    href={link}
                    key={index}
                    className="w-[101.33px] py-[10px] px-[40px] bg-[#00000008] rounded-[12px] h-[48px] flex items-center"
                  >
                    <Image src={icon} alt={link} className="" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="text-[14px] font-normal text-[#00000099] leading-[18.23px] tracking-[0.5%] flex flex-col gap-[12px]">
              <p>Or enter manually</p>
                <CustomInput value={profile.fullname} name="fullname" placeholder={"Full name"} handleChange={handleChange} />
                <CustomInput value={profile.username} name="username" placeholder="Username" handleChange={handleChange} />
                <CustomInput value={profile.phoneNumber} name="phoneNumber" placeholder="Phone number" handleChange={handleChange} />
                <CustomInput value={profile.email} name="email" placeholder="Email" type="email" handleChange={handleChange} />
            </div>

          </div>
        </div>
        <div className="py-16">
          <CustomButton title="Continue" handleSubmit={handleSubmit} />
        </div>
      </div>
  );
};

export default Page;

const socialIcons = [
  {
    icon: Ig,
    link: "",
  },
  {
    icon: Tiktok,
    link: "",
  },
  {
    icon: Google,
    link: "",
  },
];
