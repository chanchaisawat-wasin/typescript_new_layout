import React, { ReactElement } from 'react'

type FooterComponentProps = {
    items?: {
        label?: string;
        url?: string;
        children?: {
            label?: string | ReactElement;
            url?: string;
        }[]
    }[]
}

const Footer = (props: FooterComponentProps) => {

    const items = props.items ?? [];

    return (
        <div className="bg-[#00338d]">
            <div className="mx-auto px-6 py-6 xl:max-w-screen-xl w-full">
                {/* <div className="px-12 pb-6 pt-12"> 
                    <div className="px-4 pt-6"> */}
                        <div className='flex flex-col gap-12'>
                            <div className="grid lg:grid-cols-6 md:grid-rows-1 grid-cols-4 gap-4">
                                {items.map((val, i) => {
                                    return (
                                        <div className={`${i === 0 ? "lg:col-span-2 col-span-4" : "md:col-span-1 col-span-2"} text-[#8AA1CB] flex flex-col gap-6`}>
                                            <div className={`font-helvethaica ${i === 0 ? "" : "opacity-50 "}`}>
                                                {i === 0 ? <img className='w-full h-auto max-w-[10rem]' src={val.url} alt="" /> : val.label}
                                            </div>
                                            <div className={` ${i === 0 ? "font-helvethaica" : "font-helvethaica-bd"} leading-tight flex flex-col gap-2`}>
                                                {val.children?.map((val, i) => {
                                                    return (
                                                        <div className={``}>
                                                            {val.label}
                                                        </div>
                                                    )
                                                })}
                                            </div>

                                        </div>
                                    )
                                })}
                            </div>

                            <div className="">
                                <hr className="border-[#8AA1CB] py-2" />
                                <div className="justify-between md:flex">
                                    <div className="text-[#8AA1CB] font-helvethaica">Copyright © 2024 N Health. All rights reserved.</div>
                                    <div className="text-[#8AA1CB] flex flex-col md:flex-row gap-6">
                                        <div className="font-helvethaica">
                                            คอลเซ็นเตอร์ (66) 2762 4000
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="Icon h-6 w-auto" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
                                            </div>
                                            <div className="">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="Icon h-6 w-auto" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M336 96c21.2 0 41.3 8.4 56.5 23.5S416 154.8 416 176v160c0 21.2-8.4 41.3-23.5 56.5S357.2 416 336 416H176c-21.2 0-41.3-8.4-56.5-23.5S96 357.2 96 336V176c0-21.2 8.4-41.3 23.5-56.5S154.8 96 176 96h160m0-32H176c-61.6 0-112 50.4-112 112v160c0 61.6 50.4 112 112 112h160c61.6 0 112-50.4 112-112V176c0-61.6-50.4-112-112-112z"></path>
                                                    <path d="M360 176c-13.3 0-24-10.7-24-24s10.7-24 24-24c13.2 0 24 10.7 24 24s-10.8 24-24 24zM256 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64m0-32c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96z"></path></svg>
                                            </div>
                                            <div className="">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="Icon h-6 w-auto" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M311 196.8v81.3c0 2.1-1.6 3.7-3.7 3.7h-13c-1.3 0-2.4-.7-3-1.5l-37.3-50.3v48.2c0 2.1-1.6 3.7-3.7 3.7h-13c-2.1 0-3.7-1.6-3.7-3.7V196.9c0-2.1 1.6-3.7 3.7-3.7h12.9c1.1 0 2.4 .6 3 1.6l37.3 50.3V196.9c0-2.1 1.6-3.7 3.7-3.7h13c2.1-.1 3.8 1.6 3.8 3.5zm-93.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 2.1 1.6 3.7 3.7 3.7h13c2.1 0 3.7-1.6 3.7-3.7V196.8c0-1.9-1.6-3.7-3.7-3.7zm-31.4 68.1H150.3V196.8c0-2.1-1.6-3.7-3.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 1 .3 1.8 1 2.5c.7 .6 1.5 1 2.5 1h52.2c2.1 0 3.7-1.6 3.7-3.7v-13c0-1.9-1.6-3.7-3.5-3.7zm193.7-68.1H327.3c-1.9 0-3.7 1.6-3.7 3.7v81.3c0 1.9 1.6 3.7 3.7 3.7h52.2c2.1 0 3.7-1.6 3.7-3.7V265c0-2.1-1.6-3.7-3.7-3.7H344V247.7h35.5c2.1 0 3.7-1.6 3.7-3.7V230.9c0-2.1-1.6-3.7-3.7-3.7H344V213.5h35.5c2.1 0 3.7-1.6 3.7-3.7v-13c-.1-1.9-1.7-3.7-3.7-3.7zM512 93.4V419.4c-.1 51.2-42.1 92.7-93.4 92.6H92.6C41.4 511.9-.1 469.8 0 418.6V92.6C.1 41.4 42.2-.1 93.4 0H419.4c51.2 .1 92.7 42.1 92.6 93.4zM441.6 233.5c0-83.4-83.7-151.3-186.4-151.3s-186.4 67.9-186.4 151.3c0 74.7 66.3 137.4 155.9 149.3c21.8 4.7 19.3 12.7 14.4 42.1c-.8 4.7-3.8 18.4 16.1 10.1s107.3-63.2 146.5-108.2c27-29.7 39.9-59.8 39.9-93.1z"></path></svg>
                                            </div>
                                            <div className="">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="Icon h-6 w-auto" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M508.6 148.8c0-45-33.1-81.2-74-81.2C379.2 65 322.7 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.6-.1 220.2 0 255.8c-.1 35.6 1 71.2 3.4 106.9 0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8 60.8.2 120.3-1 178.6-3.8 40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107 .2-35.6-.9-71.2-3.3-106.9zM207 353.9V157.4l145 98.2-145 98.3z"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* </div>
                </div> */}
            </div>
        </div>
    )
}

export default Footer;