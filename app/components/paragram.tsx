'use client'
import React from 'react';
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

    const [modalShow, setModalShow] = useState(false);

    const toggle = () => setModalShow(!modalShow)

    const items = props.items ?? [];

    return (
        <div className={`mx-auto md:px-6 max-w-screen-xl w-full z-0`}>
            <div className="relative flex justify-center items-center">
                {modalShow ?
                    <div className="fixed top-[0] z-20 h-full w-full bg-modal">
                        <div className="h-full w-full absolute" onClick={() => setModalShow(false)}></div>
                        <div className="z-30 p-4">
                            <div className="mx-auto relative translate-y-[10%] rounded-3xl overflow-hidden mh max-w-[22rem] bg-white z-30 font-helvethaica">
                                <div className="mh overflow-auto">
                                    <div className="p-6">
                                        <div className="flex justify-between relative">
                                            <div className="font-helvethaica-bd text-3xl">
                                                รายละเอียด
                                            </div>
                                        </div>
                                        {items.map((val, i) => {
                                            return (
                                                <>
                                                    {val.label}
                                                </>
                                            )
                                        })}
                                    </div>
                                    <div className="fixed top-[5%] right-[10%] z-50" onClick={() => setModalShow(false)}>
                                        <div className="bg-white">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="Icon " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : null}

                <div className="flex lg:mt-[-6rem] mt-[-1rem] overflow-hidden md:flex-row flex-col gap-6 items-center relative">

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
                                <div onClick={() => toggle()}
                                    className="bg-[#e5f6ff] text-[#00338d] px-2 font-helvethaica-bd absolute right-0 bottom-0">...อ่านเพิ่มเติม</div>
                            </div>
                            <div>
                                <button className="font-helvethaica-bd text-white bg-[#00338d] rounded-full px-3 py-1">ผลิตภัณฑ์และบริการของเรา</button>
                            </div>
                        </div>
                    </div>

                    <div className="md:basis-1/2 md:h-[100vh] flex md:flex-row flex-col gap-4 relative z-[0]">

                        <div className="basis-1/2 flex md:flex-col spin-1 flex-row gap-4 justify-items-start">
                            {items.map((val, i) => {
                                return (
                                    <>
                                        {val.img1?.map((val, i) => {
                                            return (
                                                <img className="object-cover md:w-auto md:h-auto md:aspect-[1/1.25] h-40 w-auto rounded-xl" src={val.url} alt="" />
                                            )
                                        })}
                                    </>
                                )
                            })}
                        </div>

                        <div className="basis-1/2 flex md:flex-col spin-2 flex-row gap-4 justify-items-end">
                            {items.map((val, i) => {
                                return (
                                    <>
                                        {val.img2?.map((val, i) => {
                                            return (
                                                <img className="object-cover md:w-auto md:h-auto md:aspect-[1/1.25] h-40 w-auto rounded-xl" src={val.url} alt="" />
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