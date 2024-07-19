import React from 'react'

type HealthComponentProps = {
    items?: {
        label?: string;
        card?: {
            label?: string;
            url?: string;
            css?: string;
        }[]
    }[]
}

const Health = (props: HealthComponentProps) => {
    const items = props.items ?? [];
    return (
        <div className="min-[1441px]:max-w-[84rem] min-[1441px]:text-[24px]
        lg:text-[16px] lg:max-w-[56rem]mmd:max-w-[47rem] max-w-[42rem] mx-auto">

            <div className="flex">
                {items.map((val, i) => {
                    return (<div className="font-helvethaica-bd text-[57px]">
                        {val.label}
                    </div>)
                })}
                <div className="grid-masonry">
                    {items.map((val, i) => {
                        return (<>
                            {val.card?.map((val, i) => {
                                return (
                                    <a className="hover:text-[#00338d]" href="#">
                                        <div className={`grid-fill rounded-3xl mb-12 ${val.css}`}>
                                            <div className="flex flex-col">
                                                <div className={`mx-auto ${i === 1 || i === 2 || i === 5 ? "mt-16 mb-16" : "mt-8"}`}>
                                                    <img className={`mx-auto ${i === 1 || i === 2 || i === 5 ? "h-[220px]" : "h-[180px]"}`} src={val.url} alt="" />
                                                </div>
                                                <div className="mx-auto text-2xl pt-16">{val.label}</div>
                                            </div>
                                        </div>
                                    </a>
                                )
                            })}
                        </>)
                    })}
                </div>
            </div>

        </div>
    )
}

export default Health