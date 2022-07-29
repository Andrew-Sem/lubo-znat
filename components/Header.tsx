import React, {FC, useRef, useState} from 'react';
import LuboZnatLogo from "../assets/img/LuboZnatLogo.png"
import Image from "next/image";
import {DuplicateIcon, HomeIcon, PhoneIcon, UserIcon} from "@heroicons/react/outline";
import Link from "next/link";
import {links} from "../constants/links";
import HeaderLink from "./UI/HeaderLink";

const address = "Волжский, Мира 71"
const phone = "8-902-380-43-84"

const Header: FC = () => {
    const addressRef = useRef(null)
    const copyText = (text:string) => {
        navigator.clipboard.writeText(text)
    }

    return (
        <div className={"bg-white py-3 shadow-md fixed w-full"}>
            <div className={"container mx-auto flex flex-row items-center justify-between"}>
                <Link href={links.home}>
                    <a><Image alt="Любо знать лого" src={LuboZnatLogo} width={86} height={48}/></a>
                </Link>
                <div className={"space-x-1 md:space-x-6 flex"}>
                    <HeaderLink href={links.about}>
                        <UserIcon className={"w-5 h-5 text-gray-800"}/>
                        <span className={"hidden md:block"}>Обо мне</span>
                    </HeaderLink>
                    <div
                        className={"flex space-x-1 items-center cursor-pointer relative"}
                        onClick={() => copyText(address)}
                        ref={addressRef}
                    >
                        <HomeIcon className={"w-5 h-5 text-gray-800"}/>
                        <span className={"hidden md:block"}>{address}</span>
                    </div>
                    <div
                        className={"flex space-x-1 items-center cursor-pointer"}
                        onClick={() => copyText(phone)}
                    >
                        <PhoneIcon className={"w-5 h-5 text-gray-800"}/>
                        <span className={"hidden md:block"}>{phone}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;