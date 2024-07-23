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
        <div className="mx-auto px-6 py-6 max-w-screen-xl w-full">

            <div className="flex flex-col md:flex-row">

                {items.map((val, i) => {
                    return (<div className="font-helvethaica-bd basis-1/4 text-[57px]">
                        {val.label}
                    </div>)
                })}


                <div className="basis-3/4">
                    <div className="health gap-6">
                        {card.map((val, i) => {
                            return (
                                <div className={`card-health rounded-3xl mb-12 ${val.css}`}>
                                    <a className="hover:text-[#00338d]" href="#">
                                        <div className="flex flex-col ">
                                            <div className={i === 1 || i === 2 || i === 5 ? "mt-16 mb-16 mx-auto" : "mt-8 mx-auto"}>
                                                <img className={i === 1 || i === 2 || i === 5 ? "h-[220px] mx-auto" : "h-[180px] mx-auto "} src={val.url} alt="" />
                                            </div>
                                            <div className={`mx-auto text-2xl pt-16`}>{val.label}</div>
                                        </div>
                                    </a>
                                </div>
                            )
                        })}
                    </div>
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