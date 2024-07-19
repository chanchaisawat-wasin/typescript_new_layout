import React from 'react'

type AwardComponentProps = {

  label?: {
    label?: string;
  }[]

  items?: {
    imgURL?: string
  }[]

}

const Award = (props: AwardComponentProps) => {

  const label = props.label ?? [];
  const items = props.items ?? [];

  return (
    <div className="min-[1441px]:max-w-[84rem] min-[1441px]:text-[24px]
            lg:text-[16px] lg:max-w-[56rem]
            md:max-w-[47rem]
            max-w-[42rem] mx-auto">
      <div className="flex items-center gap-[1.5rem]">
        <div className="py-[2rem] pr-[2rem] border-r-[1px] h-full">
          {label.map((val, i) => {
            return (
              <p className="font-helvethaica-bd text-[28px] text-[#A3A7AD]">
                {val.label}
              </p>
            )
          })}</div>
        <div className="award items-center">
          {items.map((val, i) => {
            return (
              <div className="">
                <img className="object-cover grayscale hover:grayscale-0 w-auto h-[6rem]" src={val.imgURL} alt="" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Award