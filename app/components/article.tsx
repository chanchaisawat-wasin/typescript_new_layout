'use client'
import React, { useEffect, useState } from 'react';
import '../globals.css';

type ArticleComponentProps = {
    title?: string;
    items?: {
        carouselURL?: string;
        avatarURL?: string;
        yearInAvatar?: string;
        avatarName?: string;
    }[]
}

const Article = (props: ArticleComponentProps) => {

    const [carouselIndex, setCarouselIndex] = useState<number>(0);
    const title = props.title ?? [];
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
        <div className="relative rounded-2xl overflow-hidden text-white">
            <div className="">
                <div className="absolute py-2 px-6 z-[10] min-[1440px]:text-3xl xl:text-2xl leading-tight rounded-br-2xl font-helvethaica-bd bg-[#00338d]">
                    {title}
                </div>
                <div className="absolute z-[5] bottom-0 ivd-comtomer rounded-b-2xl">
                    <div className="mb-8 px-5 flex flex-col min-[1440px]:gap-6 gap-2">
                        <div className="flex gap-2 min-[1440px]:text-[1.2rem] text-[0.8rem]">
                            <div className="text-[#00338d] backdrop-blur-sm bg-white/70 rounded-l-full rounded-r-full px-3 font-helvethaica">Care</div>
                            <div className="text-[#00338d] backdrop-blur-sm bg-white/70 rounded-l-full rounded-r-full px-3 font-helvethaica">General</div>
                        </div>
                        <div className="flex flex-col">
                            <div className="min-[1440px]:text-[2rem] text-[1.3rem] font-helvethaica-bd">
                                สิ่งที่คุณควรรู้ก่อนการส่องกล้องช่องท้องส่วนบน
                            </div>
                            <div className="min-[1440px]:text-[1.5rem] text-[1rem] leading-tight opacity-75 font-helvethaica line-clamp-3">
                                หากคุณมีอาการปวดท้องส่วนบนอย่างต่อเนื่องตลอดจนความผิดปกติอื่น ๆ ในระบบทางเดินอาหาร คุณจะต้องเข้ารับการตรวจส่องกล้องส่วนบนเพื่อพิจารณา ประเมิน และรักษา
                                ปัญหาของคุณตั้งแต่ระยะเริ่มแรก เพื่อให้คุณฟื้นคุณภาพชีวิตได้ทันที
                            </div>
                        </div>

                        <div className="flex justify-between items-center font-helvethaica">
                            <div className="flex gap-3">
                                <div className="flex items-center">
                                    <img className="mx-auto min-[1440px]:w-12 min-[1440px]:h-12 w-8 h-8 object-cover rounded-full" src={currentItem.avatarURL} alt="" />
                                </div>
                                <div className="leading-tight">
                                    <div className="min-[1440px]:text-[1.4rem] text-[1.13rem]">{currentItem.avatarName}</div>
                                    <div className="min-[1440px]:text-[1.2rem] text-[.83rem]">{currentItem.avatarName}</div>
                                </div>
                            </div>
                            <div className="text-[1.13rem]">
                                {currentItem.yearInAvatar}
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

                </div>

                <div className="aspect-[1.15/1] img-gradient">
                    <img className="h-full w-auto inline-block " src={currentItem.carouselURL} />
                </div>
            </div>
        </div >
    )
}

export default Article;