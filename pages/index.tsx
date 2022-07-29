import type {NextPage} from 'next'
import MainLayout from "../components/MainLayout";
import TextBlock from "../components/TextBlock"
import {links} from "../constants/links";

const Home: NextPage = () => {
    return (
        <MainLayout title={"Любо знать"}>
            <div className={"flex justify-between flex-col md:flex-row"}>
                <TextBlock title={"Для детей"} href={links.kids} className={"w-full md:w-1/2 md:mr-10 "}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </TextBlock>
                <TextBlock title={"Для взрослых"} href={links.adults} className={"w-full md:w-1/2 mt-8 md:mt-0"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </TextBlock>
            </div>

        </MainLayout>
    )
}

export default Home
