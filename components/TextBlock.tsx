import React, {FC} from 'react';
import MainButton from "./UI/MainButton";

interface TextBlockProps{
    title?: string,
    children: React.ReactNode,
    className: string,
    href: string
}

const TextBlock:FC<TextBlockProps> = ({title, children, className, href}) => {
    return (
        <div className={className}>
            <div className={"text-4xl md:text-5xl"}>
                {title}
            </div>
            <div className={"bg-gray-50 p-3 md:p-4 rounded-xl mt-2 lg:mt-4 w-full text-gray-800 text-lg"}>
                {children}
            </div>
            <MainButton href={href} title={"Подробнее"}/>
        </div>

    );
};

export default TextBlock;