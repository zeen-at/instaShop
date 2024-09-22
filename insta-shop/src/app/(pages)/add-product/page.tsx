"use client";

import {
  Add_photo_icon,
  Arrow_down_Icon,
  Check,
  More_Icon,
} from "../../../../public/assets";
import CustomButton from "@/app/components/CustomButton";
import CustomInput from "@/app/components/CustomInput";
import ReturnButton from "@/app/components/ReturnButton";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useRef } from "react";

const Page = () => {

    const router = useRouter();

    const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [product, setProduct] = useState({
    productTitle: "",
    price: "",
    oldprice: "",
    inventory: "",
  });

  const [productImg, setProductImg] = useState<string | null>(null);
  const [productDescription, setProductDescription] = useState("");
  const [productCollection, setProductCollection] = useState("");


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setProductDescription(e.target.value);
  };

  const handleCollectionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setProductCollection(e.target.value);
  };


  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProductImg(imageURL);
    }
  };

  const handleSubmit = () => {
    try {

        // dispatch to store

        router.push("product/1")
        
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div className="flex flex-col w-[328px] mx-auto">
      <div className="flex justify-between">
        <ReturnButton title="Create a product" />
        <Image src={More_Icon} alt="more_icon" />
      </div>

      <div className="flex justify-between leading-[15.62px] text-[12px] tracking-[0.5%] items-center  border-b py-[8px]">
        <div className="rounded-[90px] border border-[#0000001A] py-[2px] px-[4px] w-[65px] h-[22px] flex items-center justify-between">
          <p className="font-normal text-[#00000099]">Draft</p>
          <Image src={Check} alt="check" />
        </div>
        <Link href="/product/1" className="font-medium text-[#8A226F] ">
          Preview product
        </Link>
      </div>

      {/* Basic details */}

      <div className="py-3 flex flex-col gap-[10px]">
        <div className="flex justify-between">
          <p className="font-medium text-[14px] leading-[18.23px] tracking-[0.5%] text-[#000000]">
            Basic details
          </p>
          <Image src={Arrow_down_Icon} alt="arrow_down_icon" />
        </div>
        {/* form */}
        <div className="flex flex-col gap-[8px] ">
          <CustomInput
            value={product.productTitle}
            name="productTitle"
            placeholder="Product Title"
            handleChange={handleChange}
          />
          <textarea
            value={productDescription}
            name="productDescription"
            placeholder="Product Description"
            onChange={handleDescriptionChange}
            rows={3}
            className="border outline-none border-[#00000033] rounded-[12px] text-[#00000099] text-[14px] px-[4px] py-[10px]"
          >
            Product description
          </textarea>
          <div className="flex gap-[8px]">
            <CustomInput
              value={product.price}
              name="price"
              placeholder="Price"
              handleChange={handleChange}
            />
            <CustomInput
              value={product.oldprice}
              name="oldprice"
              placeholder="Old price"
              handleChange={handleChange}
            />
          </div>
          <textarea
            value={productCollection}
            name="productCollection"
            onChange={handleCollectionChange}
            rows={3}
            placeholder="Product Collection"
            className="border outline-none border-[#00000033] rounded-[12px] text-[#00000099] text-[14px] px-[4px] py-[10px]"
          >
            Product collection
          </textarea>
          <CustomInput
            value={product.inventory}
            name="inventory"
            type="number"
            placeholder="Inventory stocks"
            handleChange={handleChange}
          />
        </div>

        {/* product images */}
        <div className="border-b border-t py-[12px] flex flex-col gap-[8px]">
          <div className="flex justify-between p-[8px]">
            <p className="font-medium text-[14px] leading-[18.23px] tracking-[0.5%] text-[#000000]">
              Product images
            </p>
            <Image src={Arrow_down_Icon} alt="arrow_down_icon" />
          </div>
          <button
            onClick={handleButtonClick}
            className="rounded-[90px] bg-[#00000008] p-[10px] flex gap-[10px]  items-center w-[328px] justify-center"
          >
            <p className="text- [14px] text-[#8A226F] leading-[18.23px] tracking-[0.5%] font-medium py-[1px] px-[6px] ">
              Add Image
            </p>
            <input
              onChange={handleImageChange}
              ref={fileInputRef}
              type="file"
              hidden
              accept="image/*"
            />

            <Image src={Add_photo_icon} alt="Add_photo_icon" />
          </button>

          {productImg && (
            <div>
                {productImg}
            </div>
          )}
        </div>

        {/* inventory */}

        <div className="border-b  py-[12px] flex flex-col gap-[8px]">
          <p className="font-medium text-[14px] leading-[18.23px] tracking-[0.5%] text-[#000000]">
            Inventory variations
          </p>
          <div className=" p-[10px] flex gap-[10px] items-center w-[328px] ">
            <input type="checkbox" id="" name="" value="" />
            <label
              htmlFor=""
              className="text-[14px] text-[#00000099] leading-[18.23px] tracking-[0.5%] font-medium "
            >
              This product is variable; has different colors, sizes, weight,
              materials, etc.
            </label>
          </div>
        </div>

        {/* Shipping */}

        <div className="border-b border-t py-[12px] flex flex-col gap-[8px]">
          <div className="flex justify-between p-[8px]">
            <p className="font-medium text-[14px] leading-[18.23px] tracking-[0.5%] text-[#000000]">
              Shipping
            </p>
            <Image src={Arrow_down_Icon} alt="arrow_down_icon" />
          </div>
          <div>
            <div className=" p-[10px] flex justify-between items-center w-[328px] ">
              <label
                htmlFor=""
                className="text-[14px] text-[#00000099] leading-[18.23px] tracking-[0.5%] font-medium "
              >
                Self shipping
              </label>
              <input type="checkbox" id="" name="" value="" />
            </div>
            <div className=" p-[10px] flex justify-between items-center w-[328px] ">
              <label
                htmlFor=""
                className="text-[14px] text-[#00000099] leading-[18.23px] tracking-[0.5%] font-medium "
              >
                InstaShop shipping
              </label>
              <input type="checkbox" id="" name="" value="" />
            </div>
          </div>

          <CustomInput
            value={""}
            name="inventory"
            placeholder="Inventory stocks"
            handleChange={handleChange}
          />
        </div>

        {/* buttons */}

        <div className="flex gap-[16px] py-[16px]">
          <CustomButton
            shadowColor="shadow-white"
            title={"Cancel"}
            textColor="text-[#8A226F]"
            bgColor="bg-white"
            handleSubmit={() => router.back()}
          />
          <CustomButton title={"Save"} handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Page;
