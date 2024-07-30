'use client'
import { useState } from 'react';
import '../globals.css';

type NavbarComponentProps = {
    img?: {
        logo?: string;
    }[]
    items?: {
        label?: string;
        url?: string;
        children?: {
            label?: string;
            url?: string;
        }[]
    }[]
    language?: {
        label?: string;
    }[]
}

// const NavLanguage = (props: NavbarComponentProps) => {

//     const dropIcon = () => {
//         return (
//             <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 10 580 100" className="Icon text-text-secondary text-sm text-text-secondary text-sm" height="2em" width="2em"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>
//         )
//     }

//     const language = props.language ?? [];

//     return (

//     )
// }

const Navbar = (props: NavbarComponentProps) => {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    const img = props.img ?? [];
    const items = props.items ?? [];
    const language = props.language ?? [];

    const dropIcon = () => {
        return (
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="mxl:w-[1.3rem] lg:w-[0.9rem] Icon text-text-secondary text-sm text-text-secondary text-sm" height="2em" width="2em"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>
        )
    }

    const burgerIcon = () => {
        return (
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="Icon text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path></svg>
        )
    }

    const xIcon = () => {
        return (
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="Icon text-2xl " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path></svg>
        )
    }

    return (
        <div className="mx-auto px-6 py-6 max-w-screen-xl w-full">
            <nav
                /* default screen */
                className="">
                <div
                    /* default screen */
                    className={`${toggle ? 'logo-on-click' : ''} z-[10] md:px-0 sm:px-10`}>
                    {img.map((val, i) => {
                        return (
                            <img src={val.logo}
                                className="w-full h-auto max-w-[9rem]"
                                alt="" />
                        )
                    })}
                </div>

                <div className={`${toggle ? 'x-click' : ''} burgerIcon z-[2]`} onClick={handleToggle}>
                    <div className="backdrop-blur-sm bg-white/70 rounded-full p-1">
                        {toggle ? xIcon() : burgerIcon()}
                    </div>
                </div>

                {/* <div className={`${toggle ? 'open-nav' : ''}mt-[1.5rem]`}> */}
                <div
                    /* default screen */
                    className={`z-10 flex backdrop-blur-sm bg-white/70 mid-nav  lg:gap-[1.5rem] rounded-r-full rounded-l-full ${toggle ? 'nav-show' : ''} `}>
                    {items.map((val, i) => {
                        return (
                            <div className={`${i === 4 ? "dropdown" : ""}`}>
                                {/* <div className=""> */}
                                <a className="" href={val.url}>
                                    <div className={`font-helvethaica-bd hover:text-[#00338d] flex ${i === 4 ? "gap-[0.2rem]" : ""}`}>{val.label}
                                        <div className="drop-icon">{i === 4 ? dropIcon() : ""}</div>
                                    </div>
                                </a>
                                {/* </div> */}
                                <div className="">
                                    <div className={i === 4 ? "dropdown-menu backdrop-blur-sm bg-white/70 py-[0.5rem] px-[2rem] rounded-3xl" : ""}>
                                        {val.children?.map((val, i) => {
                                            return (
                                                <a href={val.url}><div className="font-helvethaica hover:text-[#00338d] py-[0.5rem]">{val.label}</div></a>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                        )
                    })}
                </div>

                <div className={`z-10 lg:flex hidden backdrop-blur-sm bg-white/70 rounded-full`}>
                    {language.map((val, i) => {
                        return (
                            <div className={`font-helvethaica-bd gap-2 ${i > 0 ? "hidden" : "flex"}`}>{val.label}{i === 0 ? dropIcon() : ""}</div>
                        )
                    })}
                </div>
                {/* </div> */}



            </nav>
        </div >
    )

}

export default Navbar;