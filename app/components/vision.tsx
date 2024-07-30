import React, { ReactElement } from 'react'

type VisionComponentProps = {
    label?: {
        title?: string;
        children?: {
            label?: string | ReactElement;
        }[]
    }[]
    items?: {
        cardIcon?: string;
        imageHover?: string;
        cardTitle?: string;
    }[]
}

const Vision = (props: VisionComponentProps) => {

    const items = props.items ?? [];
    const label = props.label ?? [];

    return (
        <div className="mx-auto px-6 py-6 relative max-w-screen-xl w-full">
            <div className="py-8 pl-8 w-full relative bg-white rounded-2xl justify-center shadow-md overflow-hidden">
                <div className='absolute top-[0%] right-[0%] left-[20%] h-auto'>
                    <img src="https://nhealth-frontend-dev.tillitsdone.com/grid_bg.png" alt="" />
                </div>
                <div className="flex flex-col font-helvethaica-bd overflow-hidden gap-10">
                    <div className="">
                        {label.map((val, i) => {
                            return (<>
                                <div className=" text-[#00338d] text-xl">{val.title}</div>
                                {val.children?.map((val, i) => {
                                    return (
                                        <div className="text-3xl leading-relaxed">
                                            {val.label}
                                        </div>
                                    )
                                })}
                            </>
                            )
                        })}
                    </div>
                    <div className="flex overflow-auto">
                        <div className="flex gap-4">
                            {items.map((val, i) => {
                                return (
                                    <div className={`bg-card relative w-40 flex flex-col gap-6 min-h-40 rounded-xl justify-between overflow-hidden h-auto border shadow`}>
                                        <div className="p-2">
                                            <img className="h-auto w-16 " src={val.cardIcon} alt="" />
                                        </div>
                                        <img className="absolute object-cover h-full w-auto imgVision" src={val.imageHover} alt="" />
                                        <div className="text-2xl p-2 z-[10] text">
                                            {val.cardTitle}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vision