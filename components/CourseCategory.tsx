import React, {FC} from 'react';

interface CourseCategoryProps {
    title: string,
    active: boolean,
    onClick: (arg0: any) => void
}

const CourseCategory: FC<CourseCategoryProps> = ({title, active, onClick}) => {
    let rootClasses = "w-full md:w-4/5 bg-gray-100 p-3 rounded cursor-pointer hover:bg-yellow-300 easy-in duration-200 outline:none"
    if (active) rootClasses += " bg-yellow-300"

    return (
        <div className={rootClasses} onClick={onClick}>
            {title}
        </div>
    );
};

export default CourseCategory;