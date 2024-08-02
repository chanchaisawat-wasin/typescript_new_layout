import React from 'react'

type AwardComponentProps = {

  award?: {
    label?: {
      label?: string;
    }[]
    items?: {
      imgURL?: string
    }[]
  }[]

}

const Award = (props: AwardComponentProps) => {

  const items = props.award ?? [];

  return (
    <div className="mx-auto px-6 py-6 max-w-screen-xl w-full">
      <div className="flex sm:flex-row flex-col items-center gap-[1.5rem] overflow-hidden">
        <div className="flex justify-center items-center py-[2rem] pr-[2rem] sm:border-r-[1px] w-64">
          {items.map((val, i) => {
            return (
              <p className="font-helvethaica-bd text-[24px] text-[#A3A7AD]">
                {val.label?.map((val,i) => {
                  return (
                    <>{val.label}</>
                  )
                })}
              </p>
            )
          })}</div>
        <div className="flex w-full h-full gap-6 justify-between overflow-auto items-center">
          {items.map((val, i) => {
            return (
              <>
                {val.items?.map((val, i) => {
                  return (
                    <img className="object-cover grayscale hover:grayscale-0 w-auto h-16" src={val.imgURL} alt="" />
                  )
                })}
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Award