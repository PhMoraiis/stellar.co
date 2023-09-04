import React, { useRef } from "react";
import Link from "next/link";
import { ButtonProps } from "./ButtonProps";

const Button = ({ href, title, bg, text }: ButtonProps) => {
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
            <div className={`mt-8 lg:mt-16 inline-block py-4 px-6 lg:px-[2rem] lg:py-[1.5rem] lg:text-2xl text-xl text-${text} font-geometosBd bg-${bg} rounded-full relative tracking-wide overflow-hidden border-0 btn`} ref={btnRef} onMouseMove={handleMouseMove}>
                <span>{title}</span>
            </div>
        </Link>
    )
}

export default Button;