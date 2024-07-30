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
        <div className="mx-auto px-6 py-6 max-w-screen-xl  w-full">

            <div className="flex flex-col md:flex-row">

                {items.map((val, i) => {
                    return (<div className="font-helvethaica-bd basis-1/4 text-[57px]">
                        {val.label}
                    </div>)
                })}


                <div className="basis-3/4">
                    <div className="health gap-8">
                        {card.map((val, i) => {
                            return (
                                <div className={`relative md:card-health rounded-3xl mb-8 ${val.css} flex justify-center items-center`}>

                                    <div className={`flex flex-col w-full h-full relative justify-between items-center pb-6`}>
                                        <div className={`${i===1 || i===2 || i === 5 ? "md:pt-20" : "md:pt-3"}`}>
                                            <img className="w-full h-auto max-w-[10rem]" src={val.url} alt="" />
                                        </div>
                                        <div className="font-helvethaica-bd text-lg">{val.label}</div>
                                    </div>
                                    <a className="absolute top-0 left-0 w-full h-full rounded-3xl" href="#"></a>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
            <div className="flex justify-center items-center">
                {last.map((val, i) => {
                    return (
                        <div className="border px-[1rem] py-[0.3rem] rounded-full font-helvethaica-bd">{val.label}</div>
                    )
                })}
            </div>

        </div>
    )
}

export default Health