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
        <div className="mx-auto px-6 py-6 max-w-screen-xl w-full">
            <div className="bg-vision bg-white rounded-2xl justify-center shadow-md">
                <div className="flex flex-col font-helvethaica-bd overflow-x-auto">
                    <div className="">
                        {label.map((val, i) => {
                            return (<>
                                <div className=" text-[#00338d]">{val.title}</div>
                                {val.children?.map((val, i) => {
                                    return (
                                        <div className="">
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
    )
}

export default Vision