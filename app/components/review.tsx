import React, { ReactElement } from 'react'

type ReviewComponentProps = {
    title?: {
        title?: string;
    }[]
    items?: {
        label?: string;
        name?: string;
        imgURL?: string;
        package?: string;
    }[]
}

const Review = (props: ReviewComponentProps) => {
    const title = props.title ?? [];
    const items = props.items ?? [];

    return (
        <div className="bg-[#F7F9FC]">
            <div className="mx-auto relative">

                <div className="min-h-[55rem] w-full relative flex flex-col justify-center items-center overflow-hidden">

                    {/* circle */}
                    <div className="absolute">
                        <div className="circle-1 overflow-hidden justify-center items-center flex">
                            <div className="circle-2"></div>
                            <div className="circle-3"></div>
                            <div className="circle-4"></div>
                        </div>

                    </div>

                    {/* text title */}
                    <div className="text-[#00338D] relative text-4xl font-helvethaica-bd text-review">
                        {title.map((val, i) => {
                            return (<>{ val.title }</>)
                        })}
                    </div>
                    <div className="md:absolute relative top-[0] w-full flex justify-center ">

                        <div className="relative md:w-[55rem] md:min-h-[55rem] font-helvethaica-bd 
                            flex p-6 max-md:gap-6 max-md:justify-items-start overflow-x-auto">

                                {items.map((val, i) => {
                                    return(
                                        <div className={`md:absolute relative bg-white md:w-72 min-w-72 border shadow rounded-xl px-4 py-4
                                            ${i===0 ? "md:top-[2%] md:left-[50%] md:translate-x-[-50%]" :""}
                                            ${i===1 ? "md:right-[0%] md:top-[30%]":""}
                                            ${i===2 ? "md:bottom-[25%] md:right-[5%]" : ""}
                                            ${i===3 ? "md:bottom-[25%] md:left-[5%]":""}
                                            ${i===4 ? "md:left-[0%] md:top-[30%]":""}`}>
                                                <div className="flex flex-col">
                                                    <div>{val.label}</div>
                                                    <div className="flex flex-row gap-2 items-center">
                                                        <div><img className="w-8 h-8 object-cover rounded-full" src={val.imgURL} alt="" /></div>
                                                        <div className="flex flex-col">
                                                            <div>{val.name}</div>
                                                            <div className="font-helvethaica">{val.package}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    )
                                })}

                            {/* comment 1 */}
                            {/* <div className={`md:absolute relative bg-white 
                                md:top-[2%] md:left-[50%] md:translate-x-[-50%]
                                 md:w-72 min-w-72 border shadow rounded-xl px-4 py-4`}>
                                <div className="flex flex-col">
                                    <div>{items[0].label}</div>
                                    <div className="flex flex-row gap-2 items-center">
                                        <div><img className="w-8 h-8 object-cover rounded-full" src={items[0].imgURL} alt="" /></div>
                                        <div className="flex flex-col">
                                            <div>{items[0].name}</div>
                                            <div className="font-helvethaica">{items[0].package}</div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            {/* comment 2 */}
                            {/* <div className="md:absolute relative bg-white md:right-[0%] md:top-[30%] md:w-72 min-w-72 border shadow rounded-xl px-4 py-4">
                                <div className="flex flex-col">
                                    <div>{items[1].label}</div>
                                    <div className="flex flex-row gap-2 items-center">
                                        <div><img className="h-8 w-8 object-cover rounded-full" src={items[1].imgURL} alt="" /></div>
                                        <div className="flex flex-col">
                                            <div>{items[1].name}</div>
                                            <div className="font-helvethaica">{items[1].package}</div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            {/* comment 3 */}
                            {/* <div className="md:absolute relative bg-white md:bottom-[25%] md:right-[5%] md:w-72 min-w-72 border shadow rounded-xl px-4 py-4">
                                <div className="flex flex-col">
                                    <div>{items[2].label}</div>
                                    <div className="flex flex-row gap-2 items-center">
                                        <div><img className="h-8 w-8 object-cover rounded-full" src={items[2].imgURL} alt="" /></div>
                                        <div className="flex flex-col">
                                            <div>{items[2].name}</div>
                                            <div className="font-helvethaica">{items[2].package}</div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            {/* comment 4 */}
                            {/* <div className="md:absolute relative bg-white md:bottom-[25%] md:left-[5%] md:w-72 min-w-72 border shadow rounded-xl px-4 py-4">
                                <div className="flex flex-col">
                                    <div>{items[3].label}</div>
                                    <div className="flex flex-row gap-2 items-center">
                                        <div><img className="h-8 w-8 object-cover rounded-full" src={items[3].imgURL} alt="" /></div>
                                        <div className="flex flex-col">
                                            <div>{items[3].name}</div>
                                            <div className="font-helvethaica">{items[3].package}</div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            {/* comment 5 */}
                            {/* <div className="md:absolute relative bg-white md:left-[0%] md:top-[30%] sm:top[50%] md:w-72 min-w-72 border shadow rounded-xl px-4 py-4">
                                <div className="flex flex-col">
                                    <div>{items[4].label}</div>
                                    <div className="flex flex-row gap-2 items-center">
                                        <div><img className="h-8 w-8 object-cover rounded-full" src={items[4].imgURL} alt="" /></div>
                                        <div className="flex flex-col">
                                            <div>{items[4].name}</div>
                                            <div className="font-helvethaica">{items[4].package}</div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default Review;