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
    <div className="mx-auto px-6 py-6 max-w-screen-xl w-full">
      <div className="flex sm:flex-row flex-col items-center gap-[1.5rem]">
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