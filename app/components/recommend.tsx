import React from 'react'

type RecommendComponentProps = {

    items?: {
        title?: {
            title?: string;
            label?: string;
        }[]
        image?: {
            label?: string;
            url?: string;
        }[]
    }[]

}

const Recommend = (props: RecommendComponentProps) => {

    const items = props.items ?? [];

    return (
        <div className="mx-auto px-6 py-6 max-w-screen-xl w-full">
            <div className="flex flex-col gap-[2rem]">
                {items.map((val, i) => {
                    return (<>
                        {val.title?.map((val, i) => {
                            return (<div className="flex flex-col gap-[1rem]">
                                <div className="text-center font-helvethaica-bd text-[56px]">
                                    {val.title}
                                </div>
                                <div className="text-center font-helvethaica text-[28px] text-[#616366]">{val.label}</div>
                            </div>
                            )
                        })}
                    </>
                    )
                })}
                <div>
                    {items.map((val, i) => {
                        return (<div className="grid sm:grid-cols-3 grid-cols-1 gap-[2.2rem]">
                            {val.image?.map((val, i) => {
                                return (<div className={`${i === 0 ? "sm:col-span-2" : "sm:col-1"} relative`}>
                                    <img className="object-cover h-full w-full rounded-2xl" src={val.url} alt="" />
                                    <div className="z-[2] absolute object-cover bottom-0 h-[25%] w-full img-gradient rounded-b-2xl">
                                        <div className="z-[2] absolute bottom-[1.8rem] left-[1.5rem] font-helvethaica-bd text-[50px] text-white">{val.label}</div>
                                    </div>
                                </div>)
                            })}
                        </div>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default Recommend