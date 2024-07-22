import React from 'react'

type HealthComponentProps = {
    items?: {
        label?: string;
    }[]
    card?: {
        label?: string;
        url?: string;
        css?: string;
    }[]
    lastLabel?: {
        label?: string;
    }[]
}

const Health = (props: HealthComponentProps) => {
    const items = props.items ?? [];
    const card = props.card ?? [];
    const last = props.lastLabel ?? [];


    return (
        <div className="min-[1441px]:max-w-[84rem] min-[1441px]:text-[24px]
        lg:text-[16px] lg:max-w-[56rem] font-helvethaica-bd
        md:max-w-[47rem] max-w-[42rem] mx-auto py-[2rem] my-[2rem]">

            <div className="flex gap-[1rem]">

                {items.map((val, i) => {
                    return (<div className="font-helvethaica-bd text-[57px]">
                        {val.label}
                    </div>)
                })}


                <div className="grid-masonry gap-12">
                    {card.map((val, i) => {
                        return (
                            <div className={`grid-fill rounded-3xl mb-12 ${val.css}`}>
                                <a className="hover:text-[#00338d]" href="#">
                                    <div className="flex flex-col justify-center items-center">
                                        <div className={`mx-auto ${i === 1 || i === 2 || i === 5 ? "mt-16 mb-16" : "mt-8"}`}>
                                            <img className={`mx-auto ${i === 1 || i === 2 || i === 5 ? "h-[220px]" : "h-[180px]"}`} src={val.url} alt="" />
                                        </div>
                                        <div className={`mx-auto text-2xl ${i === 1 || i === 2 || i === 5 ? "mt-[4.5rem]" : "mt-[3rem]"}`}>{val.label}</div>
                                    </div>
                                </a>
                            </div>
                        )
                    })}
                </div>

            </div>
            <div className="flex justify-center items-center">
                {last.map((val, i) => {
                    return (
                        <div className="border px-[1rem] py-[0.3rem] rounded-full">{val.label}</div>
                    )
                })}
            </div>

        </div>
    )
}

export default Health