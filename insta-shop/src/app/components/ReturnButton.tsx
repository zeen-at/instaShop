"use client";

import React from 'react'
import Image from 'next/image'
import { IButton } from '../types'
import { Arrow_Icon } from '../../../public/assets'
import { useRouter } from 'next/navigation'


const ReturnButton = ({title}: IButton) => {
    const router = useRouter();
  return (
    <button onClick={() => router.back()} className='flex flex-row w-full py-[44px] px-[8px] gap-[10px] hover:underline items-center'>
        <Image src={Arrow_Icon} alt="arrow_back_icon" className="" />
        <h3 className='font-medium text-[16px] text-[#000000E5] leading-[17.6px] tracking-[0.5%] font-dmsans'>{title}</h3>
    </button>
  )
}

export default ReturnButton