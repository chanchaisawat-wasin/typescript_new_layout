import React from 'react'

type VisionComponentProps = {
    label?: {
        title?: string;
        children?: {
            label?: string;
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
        <>
            <div className="min-[1441px]:max-w-[84rem] min-[1441px]:text-[24px]
            lg:text-[16px] lg:max-w-[56rem]
            md:max-w-[47rem]
            max-w-[42rem] mx-auto">
                <div className="bg-vision bg-white rounded-2xl justify-center mx-auto shadow-md">
                    <div className="pt-[3rem] pl-[3rem] flex flex-col font-helvethaica-bd overflow-x-auto">
                        <div className="">
                            {label.map((val, i) => {
                                return (<>
                                    <div className="text-[27px] text-[#00338d]">{val.title}</div>
                                    {val.children?.map((val, i) => {
                                        return (
                                            <div className="text-[56px]">
                                                {i === 0 ? '"' : ""}{val.label}{i === 1 ? '"' : ""}
                                            </div>
                                        )
                                    })}
                                </>
                                )
                            })}
                        </div>
                        <div className="vision-card">
                            {items.map((val, i) => {
                                return (<div className="w-[30rem] bg-white border shadow">
                                    <div>
                                        <img src={val.cardIcon} alt="" />
                                    </div>
                                    <div>
                                        {val.cardTitle}
                                    </div>
                                </div>)
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Vision