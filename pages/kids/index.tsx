import React, {useState} from 'react';
import MainLayout from "../../components/MainLayout";
import CourseCategory from "../../components/CourseCategory";
import MainButton from "../../components/UI/MainButton";

const categories = [
    {
        title: "Занимательный русский язык",
        description: "1"
    },
    {
        title: "Занимательный математика",
        description: "2"
    },
    {
        title: "Индивидуальные занятия",
        description: "3"
    },
    {
        title: "Подготовка к школе",
        description: "4"
    },
    {
        title: "Сопровождение семейного обучения",
        description: "5"
    },
]

const Kids = () => {
    const [activeCategory, setActiveCategory] = useState(categories[0])
    return (
        <MainLayout title={"Для детей"}>
            <div className={"flex flex-col-reverse md:flex-row"}>
                <div className={"w-full md:w-1/2 space-y-2 md:space-y-10 "}>
                    {categories.map((category) =>
                        <CourseCategory
                            title={category.title}
                            active={activeCategory.title === category.title}
                            onClick={() => setActiveCategory(category)}
                            key={category.title}
                        />
                    )}
                </div>
                <div className={"w-full md:w-1/2 h-52 md:h-auto mb-8 md:mb-0"}>
                    <div className={"w-full bg-gray-300 rounded h-full p-3"}>
                        {activeCategory.description}
                    </div>
                </div>
            </div>
            <div className={"absolute left-0 w-full sm:w-auto px-4 sm:px-0 sm:static md:flex md:justify-end"}>
                <MainButton href={"https://google.com"} title={"Записаться"}/>
            </div>
        </MainLayout>
    );
};

export default Kids;