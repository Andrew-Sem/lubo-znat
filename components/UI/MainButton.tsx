import React, {FC} from 'react';
import Link from "next/link";

interface MoreLinkProps {
    href: string,
    title: string
}

const MainButton: FC<MoreLinkProps> = ({href, title}) => {
    return (
        <Link href={href}>
            <a className={"p-5 bg-yellow-300 rounded-xl my-4 w-full md:w-40 hover:bg-white border-solid border-yellow-300 border ease-in duration-200 inline-block cursor-pointer flex items-center justify-center"}>
                {title}
            </a>
        </Link>
    );
};

export default MainButton;