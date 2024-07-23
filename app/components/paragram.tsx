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
        <div className="mx-auto py-6 max-w-screen-xl w-full">
            <div className="flex md:flex-row flex-col gap-2 items-center">

                <div className="md:basis-1/2">
                    <div className="px-10 flex flex-col gap-6">
                        <div>
                            {items.map((val, i) => {
                                return (
                                    <img className="w-full h-auto max-w-[33rem]" src={val.url} alt="" />
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
                </div>

                <div className="md:basis-1/2 flex md:flex-row flex-col gap-6">

                    <div className="basis-1/2 flex md:flex-col flex-row gap-6">
                        {items.map((val, i) => {
                            return (
                                <>
                                    {val.children?.map((val, i) => {
                                        return (
                                            <img className="object-cover md:w-full w-1/4 h-auto rounded-xl" src={val.url} alt="" />
                                        )
                                    })}
                                </>
                            )
                        })}
                    </div>

                    <div className="basis-1/2 flex md:flex-col flex-row gap-6">
                        {items.map((val, i) => {
                            return (
                                <>
                                    {val.children?.map((val, i) => {
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
    )
}

export default Paragram