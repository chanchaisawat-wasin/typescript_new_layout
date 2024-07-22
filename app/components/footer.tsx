import React from 'react'

type FooterComponentProps = {
    items?: {
        label?: string;
        url?: string;
        children?: {
            label?: string;
            url?: string;
        }[]
    }[]
}

const Footer = (props: FooterComponentProps) => {

    const items = props.items ?? [];

    return (
        <div className="max-w-[84rem] mx-auto
        grid grid-cols-6">
            {items.map((val, i) => {
                return (
                    <div className={`${i === 0 ? "col-span-2" : "col-1"} text-[#8AA1CB] mt-[6rem] text-[20px] gap-[2rem]`}>
                        <div className="font-helvethaica">
                            {i === 0 ? <img className="w-[11rem]" src={val.url} alt="" /> : val.label}
                        </div>
                        <div className={` ${i===0 ? "font-helvethaica mt-[1.5rem]" : "font-helvethaica-bd"} `}>
                            {val.children?.map((val, i) => {
                                return (
                                    <div>
                                        {val.label}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default Footer;