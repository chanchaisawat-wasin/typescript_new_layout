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
    label?: {
        label?: string;
    }[]
}

const Health = (props: HealthComponentProps) => {
    const items = props.items ?? [];
    const card = props.card ?? [];
    const last = props.label ?? [];


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
                                <div className={`relative md:card-health rounded-3xl mb-8 
                                ${i === 0 ?"bg-[#FDEAEB]" : ""}
                                ${i === 1 ?"bg-[#EAF2EB]" : ""}
                                ${i === 2 ?"bg-[#E6EBF4]" : ""}
                                ${i === 3 ?"bg-[#FDEEE6]" : ""}
                                ${i === 4 ?"bg-[#F1F5F9]" : ""}
                                ${i === 5 ?"bg-[#FFF9EA]" : ""}
                                 flex justify-center items-center`}>

                                    <div className={`flex flex-col w-full h-full relative justify-between items-center `}>
                                        <div className={`${i===1 || i===2 || i === 5 ? "" : ""}`}>
                                            <img className="w-full h-auto max-w-[10rem]" src={val.url} alt="" />
                                        </div>
                                        <div className="font-helvethaica-bd text-lg p-4">{val.label}</div>
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