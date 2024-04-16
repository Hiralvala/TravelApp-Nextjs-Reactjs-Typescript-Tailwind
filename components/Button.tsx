import Image from 'next/image';
import React from 'react'

type Buttonprops={
    type: "button" | "submit";
    title: string;
    icon?:string;
    variant:'btn_dark_green' | 'btn_green' | 'btn_white_text' | "btn_dark_green_outline" | "btn_white"
    full?: boolean;

}
const Button = ({type,title,icon,variant,full}: Buttonprops) => {
  return (
    <button type={type} className={`flexCenter gap-3 rounded-full border ${variant}`}>
        {icon&& <Image src={icon} alt={title} height={24} width={24}/>}
        <label className='bold-16 whitespace-nowrap cursor-pointer'>{title}</label>
    </button>
  )
}

export default Button