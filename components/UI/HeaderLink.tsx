import React, {FC} from 'react';
import Link from "next/link";

interface HeaderLinkProps{
    href: string,
    children: React.ReactNode
}

const HeaderLink:FC<HeaderLinkProps> = ({href, children}) => {
    return (
        <Link href={href}>
            <a>
                <div className={"flex space-x-1 items-center"}>
                    {children}
                </div>
            </a>
        </Link>
    );
};

export default HeaderLink;