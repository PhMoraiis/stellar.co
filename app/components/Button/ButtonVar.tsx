import React, { useRef } from "react";
import Link from "next/link";
import { ButtonProps } from "./ButtonProps";



const ButtonVar = ({ href, title, bg, text }: ButtonProps) => {
    const btnRef = useRef<HTMLDivElement | null>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (btnRef.current) {
            const x = e.pageX - btnRef.current.offsetLeft;
            const y = e.pageY - btnRef.current.offsetTop;

            btnRef.current.style.setProperty('--x', x + 'px');
            btnRef.current.style.setProperty('--y', y + 'px');
        }
    }

    return (
        <Link href={href}>
            <div className={`mt-8 lg:mt-16 inline-block py-2 px-4 lg:px-[1.5rem] lg:py-[1rem] lg:text-xl text-xl text-${text} font-geometosBd border-[2px] rounded-full relative tracking-wide overflow-hidden btn`} ref={btnRef} onMouseMove={handleMouseMove}>
                <span>{title}</span>
            </div>
        </Link>
    )
}

export default ButtonVar;