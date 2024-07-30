import React from 'react'
import { useState } from "react";

type ParagramComponentProps = {
    items?: {
        url?: string;
        label?: string;
        img1?: {
            url?: string;
        }[]
        img2?: {
            url?: string;
        }[]
    }[]
}

const Paragram = (props: ParagramComponentProps) => {

    const items = props.items ?? [];

    return (
        <div className="mx-auto px-6 max-w-screen-xl w-full z-0">
            <div className="relative">

                <div className="flex md:mt-[-6rem] overflow-hidden md:flex-row flex-col gap-2 items-center relative">

                    <div className="md:basis-1/2 flex justify-center items-center">
                        <div className="px-10 justify-center flex flex-col gap-6">
                            <div>
                                {items.map((val, i) => {
                                    return (
                                        <img className="w-full h-auto max-w-[33rem]" src={val.url} alt="" />
                                    )
                                })}
                            </div>
                            <div className="relative">
                                <div className="relative">
                                    {items.map((val, i) => {
                                        return (
                                            <span className="overflow-hidden line-clamp-3 paragram font-helvethaica">
                                                {val.label}
                                            </span>
                                        )
                                    })}

                                </div>
                                <div className="bg-[#e5f6ff] text-[#00338d] px-2 font-helvethaica-bd absolute right-0 bottom-0">...อ่านเพิ่มเติม</div>
                            </div>
                            <div>
                                <button className="font-helvethaica-bd text-white bg-[#00338d] rounded-full px-3 py-1">ผลิตภัณฑ์และบริการของเรา</button>
                            </div>
                        </div>
                    </div>

                    <div className="md:basis-1/2 h-[100vh] flex md:flex-row flex-col gap-4 relative z-[0]">

                        <div className="basis-1/2 flex md:flex-col flex-row gap-4 ">
                            {items.map((val, i) => {
                                return (
                                    <>
                                        {val.img1?.map((val, i) => {
                                            return (
                                                <img className="object-cover md:w-full w-1/4 h-auto rounded-xl" src={val.url} alt="" />
                                            )
                                        })}
                                    </>
                                )
                            })}
                        </div>

                        <div className="basis-1/2 flex md:flex-col flex-row gap-4">
                            {items.map((val, i) => {
                                return (
                                    <>
                                        {val.img2?.map((val, i) => {
                                            return (
                                                <img className="object-cover md:w-full w-1/4 h-auto rounded-xl" src={val.url} alt="" />
                                            )
                                        })}
                                    </>
                                )
                            })}
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Paragram