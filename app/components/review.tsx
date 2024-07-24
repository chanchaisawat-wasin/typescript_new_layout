import React from 'react'

type ReviewComponentProps = {
    title?: string;
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
            <div className="max-w-screen-xl w-full px-6 py-6">

                {/* circle */}
                <div className="absolute left-[50%] circle-1">
                        <div className="circle-2"></div>
                        <div className="circle-3"></div>
                        <div className="circle-4"></div>
                    </div>

                <div className="min-h-[55rem] relative w-full flex justify-center items-center">

                    {/* text title */}
                    <div className="text-[#00338D] text-4xl font-helvethaica-bd">รีวิวจากลูกค้า</div>
                </div>

            </div>
        </div>
    )
}

export default Review;