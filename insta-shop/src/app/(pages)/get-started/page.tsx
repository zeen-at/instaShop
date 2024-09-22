"use client";

import CustomButton from "@/app/components/CustomButton";
import CustomInput from "@/app/components/CustomInput";
import ReturnButton from "@/app/components/ReturnButton";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { useRouter } from "next/navigation";
import { app } from "@/firebase";
import { ProgressBar1 } from "@/app/components/ProgressBar";
import { useDispatch } from "react-redux";
import { login } from "@/app/redux/slice/authSlice";

const Page = () => {
  const auth = getAuth(app);
  const dispatch = useDispatch();

  const router = useRouter();

  const actionCodeSettings = {
    url: "http://localhost:3000/profile",
    handleCodeInApp: true,
  };

  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (email.trim() === "") {
      toast.error("Email is required!");
    }

    await sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", email);

        toast.success("Email sent successfull! Confirm to verify your email");

        // if there was a server side api that was being consumed, users would be grouped into different roles to enable appropriate routing

        // if(user?.role === "storeOwner"){
        //   router.push("/profile")
        // }else{
        //   router.push("/products")
        // }

        dispatch(login({email}))

        router.push("/profile");
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        // toast.error(error.message)
      });
  };

  return (
    <div className="flex flex-col justify-between mx-auto w-[328px] min-h-screen ">
      <div>
        <div>
          <ReturnButton title="Get Started" />
        </div>

        <div className="pb-[16px]">
          <ProgressBar1 />
        </div>

        <div className="w-[320px] flex flex-col gap-[16px]">
          <h2 className="text-[#000000E5] font-medium text-[24px] leading-[26.4px] tracking-[0.5%]">
            Enter your phone number or email to get started
          </h2>
          <p className="text-[#00000099] font-normal text-[14px] leading-[18.23px] tracking-[0.5%] ">
            We will send you a verification code for confirmation
          </p>

          <CustomInput
            value={email}
            name={"email"}
            placeholder={"Enter phone number or email"}
            handleChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="py-16">
        <CustomButton
          title="Continue"
          type="button"
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Page;
