import React from "react";
import ReturnButton from "@/app/components/ReturnButton";
import Image from "next/image";
import {
  Arrow_down_Icon,
  Big_star,
  Favorite_icon,
  More_Icon,
  Product,
  Profile,
  Ratings,
  Share_icon,
  Upload,
} from "../../../../../public/assets";
import Link from "next/link";
import CustomButton from "@/app/components/CustomButton";





const Page = () => {
  function truncateString(str: string, num: number) {
    const words = str.split(" ");
    if (words.length > num) {
      return words.slice(0, num).join(" ") + "...";
    }
    return str;
  }

  return (
    <div className="flex flex-col mx-auto">
      <div className="flex justify-between  w-[328px] mx-auto">
        <ReturnButton title="Product preview" />
        <Image src={More_Icon} alt="more_icon" />
      </div>

      <div className="">
        <Image
          src={Product}
          alt="product_img"
          quality={80}
          width={360}
          height={360}
          className="w-full md:w-[360px] mx-auto h-[360px] object-cover"
        />
      </div>

      {/* product details */}

      <div className=" w-[328px] py-[12px]  flex flex-col mx-auto gap-[8px]">
        <div className="flex justify-between gap-[8px]">
          <div className="w-[244px] flex flex-col gap-[8px]">
            <p className=" text-[#000000] mediumText">
              Gucci bag – the epitome of luxury and sophistication
            </p>
            <div className="flex gap-[4px] w-[147px] items-center">
              <p className="normalText text-[#3B3B3B] ">
                #18.0
              </p>
              <p className="text-[#ACACAC] tinyText ">
                #28.0
              </p>
              <p className="bg-[#8A226F] font-normal text-[#FFFFFF] rounded-[24px] py-[2px] px-[4px] text-[10px] ">
                25% OFF
              </p>
            </div>
          </div>

          <div className="">
            <div className="flex gap-[4px] justify-end">
              <div className="rounded-[100px] p-[8px] bg-[#0000000D]">
                <Image
                  src={Share_icon}
                  alt="share_icon"
                  quality={80}
                  className=" object-cover"
                />
              </div>
              <div className="rounded-[100px] p-[8px] bg-[#0000000D]">
                <Image
                  src={Favorite_icon}
                  alt="favorite_icon"
                  quality={80}
                  className=" object-cover"
                />
              </div>
              
            </div>
            <div>
              <Image
                  src={Ratings}
                  alt="ratings"
                  quality={80}
                  className=" object-cover"
                />
              </div>
          </div>
        </div>

        {/* variants */}

        <div className="border-t border-b py-[4px] ">
          <p className="text-[#000000] mediumText pt-[8px]">
            Select variants
          </p>
          <div className="py-[16px] flex flex-col gap-[8px]">
            <p className="text-[#00000099] text-[10px] font-medium">Size: <span>SMALL</span></p>
            <div className="w-full flex gap-[8px] items-center">
                {filterOptions.map((item, index) => (
                    <p key={index} className="first:bg-black first:text-white py-[1px] items-center px-[6px] rounded-[90px] text-[#000000E5] text-[12px] bg-[#00000008] w-[48px] text-center h-[22px]">{item}</p>
                ))}
            </div>
            <p className="text-[#00000099] text-[10px] font-medium">Color: <span>White</span></p>
            <div className="w-full flex gap-[8px] items-center">
                {filterOptions.map((item, index) => (
                    <p key={index} className=" py-[1px] items-center px-[6px] rounded-[90px] text-[#000000E5] text-[12px] bg-[#00000008] w-[48px] text-center h-[22px]">{item}</p>
                ))}
            </div>
          </div>
        </div>

        {/* Product description */}

        <div className="border-b py-[12px] flex flex-col gap-[8px]">
          <div className="flex justify-between py-[8px]">
            <p className="mediumText text-[#000000]">
              Product description
            </p>
            <Image src={Arrow_down_Icon} alt="arrow_down_icon" />
          </div>
          <div>
            <p className="tinyText text-[#000000B2] font-normal ">
              {truncateString(productDescription, 21)}
            </p>
            <Link
              href="/"
              className="font-medium text-[#8A226F] text-[12px] leading-[15.62px] tracking-[0.5%]"
            >
              Read more
            </Link>
          </div>
        </div>

        {/* About vendor */}
        <div className="border-b py-[12px] flex flex-col gap-[8px]">
          <div className="flex justify-between py-[12px]">
            <p className="mediumText text-[#000000]">
              About this vendor
            </p>
            <Image src={Arrow_down_Icon} alt="arrow_down_icon" />
          </div>


            <div className="flex justify-between">
                <div className="flex gap-[8px] items-center">
                <Image src={Upload} width={52} height={52} quality={80} alt="upload_img" />
                <div>
                    <p className="text-[#000000E5] font-medium tinyText">Gucci Store</p>
                    <div className="flex gap-[6px] text-[#00000066] tinyText">
                        <p>Fashion</p>
                        <div className="flex">
                            <Image src={Big_star} alt="big_star" className="object-contain"
                             />
                            <p>5.4</p>
                            </div>
                        
                            <div className="flex">
                            <Image src={Profile} alt="profile" className="object-contain"
                             />
                            <p>100k</p>
                            </div>
                    </div>
                </div>
                </div>
                <div>
                    <button className="tinyText text-[#8A226F]">Follow</button>
                </div>
            </div>

          <div>
            <p className=" text-[#000000B2] font-normal tinyText">
              {truncateString(
                `Vendor description: You can track your parcel on the following website using your tracking number: www.17track.net/en  (Copied to the browser to open)
                What can I do when purchase protection time is running out?`,
                16
              )}
            </p>
            <div className="flex flex-wrap gap-[8px] py-[8px]">
                {productSpec.map((item, index) => (

                <p key={index} className="text-[10px] leading-[13.02px] font-normal tracking-[0.5%] rounded-[24px] px-[4px] py-[2px] bg-[#00000008]">
                    {item}
                </p>
                ))}
            </div>
          </div>
        </div>

        <div className="py-[16px]">
            <CustomButton title="Publish" />
        </div>
      </div>
    </div>
  );
};

export default Page;

const productDescription = `Wholesale and drop shipping are both welcomed. For wholesale,we
will offer discount or free express shipping which only takes 3-7
days to arrive. For drop shipping,we could send the goods to your
customers directly and won't leave information about us if you'd
like to. How can track my parcel? You can track your parcel on the
following website using your tracking number: www.17track.net/en 
(Copied to the browser to open) What can I do when
purchase protection time is running out? If your purchase
protection time is running out, please contact us and we can help
you to extend it. So your money will not go to my account.`;


const productSpec = ["Quality goods", "Nice designs", "Quality goods", "Nice designs", "Quality goods", "Nice designs"]

const filterOptions = ["filter", "filter", "filter", "filter", "filter"]