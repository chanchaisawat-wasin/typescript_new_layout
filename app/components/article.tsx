'use client'
import React, { useEffect, useState } from 'react';
import '../globals.css';

type ArticleComponentProps = {
    items?: {
        carouselURL?: string;
        avatarURL?: string;
        yearInAvatar?: string;
        avatarName?: string;
    }[]
}

const Article = (props: ArticleComponentProps) => {

    const [carouselIndex, setCarouselIndex] = useState<number>(0);
    const items = props.items ?? [];
    const currentItem = items[carouselIndex];
    const handleCarousel = (e: number) => {
        setCarouselIndex(e);
    }

    useEffect(() => {
        const to = setTimeout(() => {

            console.log(carouselIndex)
            if (carouselIndex == 0) {
                setCarouselIndex(0);
            }
            setCarouselIndex((carouselIndex) => {
                return (
                    carouselIndex < (items.length - 1) ? carouselIndex + 1 : 0
                )
            })

        }, 8000)


        return () => {
            ///
            clearTimeout(to)
        }
    }, [carouselIndex]);

    return (
        <div className="relative">
            <div className="absolute py-4 px-6 z-[10] text-3xl text-white rounded-br-2xl rounded-tl-2xl font-helvethaica-bd bg-[#00338d]">
                บทความทางการแพทย์
            </div>
            {/* <div className="absolute z-[10] bottom-0 ivd-comtomer rounded-b-2xl">
                <div className="pb-8 px-5">
                    <div className="flex gap-2 text-[1.2rem]">
                        <div className="text-[#00338d] backdrop-blur-sm bg-white/70 rounded-l-xl rounded-r-xl px-3 font-helvethaica">Care</div>
                        <div className="text-[#00338d] backdrop-blur-sm bg-white/70 rounded-l-xl rounded-r-xl px-3 font-helvethaica">General</div>
                    </div>
                    <div className="pt-5 text-[2rem] text-white font-helvethaica-bd">
                        สิ่งที่คุณควรรู้ก่อนการส่องกล้องช่องท้องส่วนบน
                    </div>
                    <div className="text-white text-[1.5rem] opacity-75 font-helvethaica">
                        หากคุณมีอาการปวดท้องส่วนบนอย่างต่อเนื่องตลอดจนความผิดปกติอื่น ๆ ในระบบทางเดินอาหาร คุณจะต้องเข้ารับการตรวจส่องกล้องส่วนบนเพื่อพิจารณา ประเมิน และรักษา
                        ปัญหาของคุณตั้งแต่ระยะเริ่มแรก เพื่อให้คุณฟื้นคุณภาพชีวิตได้ทันที
                    </div>

                    <div className="gap-4 py-8 text-white font-helvethaica">
                        <div className="flex align-center">
                            {currentItem.avatarURL}
                            <img className="w-full h-auto rounded-full max-w-[10rem]" src={currentItem.avatarURL} alt="" />
                        </div>
                        <div className="grid grid-rows-2 grid-flow-col align-center">
                            <div className="text-2xl">{currentItem.avatarName}</div>
                            <div className="flex flex-row justify-between text-xl">
                                <div>{currentItem.avatarName}</div>
                                <div className="text-right">{currentItem.yearInAvatar}</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-1">
                        <div className="grid grid-cols-3 gap-5">

                            {items.map((val, index) => {
                                const i = index;
                                return (
                                    <button onClick={() => handleCarousel(i)}>
                                        <div className="bg-slate-600 hover:bg-slate-500 progress-bar rounded-full">
                                            <div className={carouselIndex === i ? "carousel-duration-bar" : ""}></div>
                                        </div>
                                    </button>
                                )
                            })}

                        </div>
                    </div>
                </div>

            </div> */}

            <div className="">
                <img className=" w-full h-auto max-w-[50rem]" src={currentItem.carouselURL} alt="" />
            </div>

        </div >
    )
}

export default Article;