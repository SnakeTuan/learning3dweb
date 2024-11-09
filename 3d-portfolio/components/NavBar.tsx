'use client'
import Image from "next/image";
import { useState } from "react";

const items = [
    {

        name: "Home",
        url: "/",
    },
    {
        name: "About",
        url: "/about",
    },
    {
        name: "Projects",
        url: "/projects",
    },
    {
        name: "Contact",
        url: "/contact",
    },
]

export function NavBar() {
    const [isOpened, setIsOpened] = useState(false);

    const openMenu = async () => {
        setIsOpened(!isOpened);
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-place">
                    <a href="/" className="text-neutral-400 hover:text-white font-bold text-xl transition-colors">
                        SnakeTuan
                    </a>
                    <button onClick={() => openMenu()}
                    className="flex hover:text-white text-neutral-400 sm:hidden focus:outline-0" aria-label="Toggle Menu">
                        <img src={isOpened ? "/assets/close.svg" : "/assets/menu.svg"} onClick={() => setIsOpened(!isOpened)}
                        alt="toggle" className="w-6 h-6"/>
                    </button>
                    <nav className="sm:flex hidden">
                        <ul className="nav-ul">
                            {items.map((item, index) => (
                                <li key={index} className="nav-li">
                                    <a href={item.url} className="nav-li_a">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
            <div className={isOpened ? 'max-h-screen nav-sidebar' : 'max-h-0 nav-sidebar'}>
                <nav className="p-5">
                    <ul className="nav-ul">
                        {items.map((item, index) => (
                            <li key={index} className="nav-li">
                                <a href={item.url} className="nav-li_a">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}