import React from 'react'
import { useState } from "react";

type ParagramComponentProps = {
    items?: {
        url?: string;
        label?: string;
        children?: {
            url?: string;
        }[]
    }[]
}

const Paragram = (props: ParagramComponentProps) => {

    const items = props.items ?? [];

    return (
        <div className="grid md:grid-cols-4 max-[767px]:grid-rows-4 min-[1441px]:gap-5 lg:gap-4 md:gap-4 max-w-[42rem] max-[767px]:gap-4
        min-[1441px]:max-w-[84rem] lg:max-w-[56rem] md:max-w-[47rem] md:justify-between items-center mx-auto">

            <div className="md:col-span-2 max-[767px]:row-span-2 text-[#616366] flex flex-col gap-5 
            min-[1441px]:px-[3rem] min-[1441px]:text-[28px]
            lg:px-[3rem] lg:text-[18px]
            md:px-[3rem] md:text-[18px]
            pr-[7rem]">
                <div>
                    {items.map((val, i) => {
                        return (
                            <img className="w-[35rem]" src={val.url} alt="" />
                        )
                    })}
                </div>
                <div>
                    {items.map((val, i) => {
                        return (
                            <p className="line-clamp-3 font-helvethaica">
                                {val.label}
                            </p>
                        )
                    })}
                </div>
                <div>
                    <button className="font-helvethaica-bd text-white bg-[#00338d] rounded-full px-3 py-1">ผลิตภัณฑ์และบริการของเรา</button>
                </div>
            </div>

            <div className="flex md:flex-col flex-row min-[1441px]:gap-5 lg:gap-4 md:gap-4 max-[767px]:gap-4">
                {items.map((val, i) => {
                    return (
                        <>
                            {val.children?.map((val, i) => {
                                return (
                                    <img className="object-cover min-[1441px]:h-[400px] lg:h-[280px] md:h-[220px] max-[767px]:h-[165px] rounded-xl" src={val.url} alt="" />
                                )
                            })}
                        </>
                    )
                })}
            </div>

            <div className="flex md:flex-col flex-row min-[1441px]:gap-5 lg:gap-4 md:gap-4 max-[767px]:gap-4">
                {items.map((val, i) => {
                    return (
                        <>
                            {val.children?.map((val, i) => {
                                return (
                                    <img className="object-cover min-[1441px]:h-[400px] lg:h-[280px] md:h-[220px] max-[767px]:h-[165px] rounded-xl" src={val.url} alt="" />
                                )
                            })}
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Paragram