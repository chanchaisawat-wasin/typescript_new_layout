'use client'
import React, { useEffect, useState } from 'react';
import '../globals.css';

type ArticleComponentProps = {
    header?: {
        label?: string;
        url?: string;
    }[]
    items?: {
        header?: string;
        label?: {
            label?: string;
        }[]
        title?: string;
        text?: string;
        children?: {
            avatarURL?: string;
            avatarName?: string;
            yearOfAvatar?: string;
            imgURL?: string;
        }[]
    }[]
}

function Article(props: ArticleComponentProps) {

    const [imgIndex, setImgIndex] = useState<number>(0);

    const header = props.header ?? [];
    const items = props.items ?? [];

    const imgArray = items.map((val,i) => {
        return(
            val.children
        )
    })

    console.log(imgArray)

    useEffect(() => {
        const to = setTimeout(() => {


            // console.log(imgIndex)
            // if (imgIndex == 0) {
            //     setImgIndex(0);
            // }
            // setImgIndex((imgIndex) => {
            //     return (
            //         imgIndex < (imgArray.children.flatMap - 1) ? imgIndex + 1 : 0
            //     )
            // })

        }, 8000)
        return () => {
            ///
            clearTimeout(to)
        }
    }, [imgIndex]);

    return (
        <div className="min-[1441px]:max-w-[84rem] min-[1441px]:text-[24px]
            lg:text-[16px] lg:max-w-[56rem]
            md:max-w-[47rem]
            max-w-[42rem] mx-auto">
            <div className="grid">

                {/* header on content */}
                <div>
                    {header.map((val, i) => {
                        return (
                            <div>{val.label}</div>
                        )
                    })}
                </div>

                {/* carousel */}
                <div className="grid grid-cols-2">
                    {items.map((val, i) => {
                        return (
                            <div>
                                <div className="text-white z-[10] font-helvethaica-bd bg-[#00338d]">{val.header}</div>
                                <div className="z-[10]">
                                    <div className="">
                                        {val.label?.map((val, i) => {
                                            return (
                                                <div className="font-helvethaica">{val.label}</div>
                                            )
                                        })}
                                    </div>
                                    <div className="font-helvethaica-bd">{val.title}</div>
                                    <div className="font-helvethaica">{val.text}</div>
                                </div>
                                <div></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Article