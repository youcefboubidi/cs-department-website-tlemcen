import React, { useState } from 'react';
import TopBar from '@/app/Components/TopBar';
import NavBar from '@/app/Components/NavBar';
import Footer from '@/app/Components/Footer';
import '@/app/globals.css'
const levels = [
    { id: 'L1', title: 'Licence 1ére année' },
    { id: 'L2', title: 'License 2éme année' },
    { id: 'L3', title: 'License 3éme année' },
    { id: 'M1', title: 'Master 1ére année' },
    { id: 'M2', title: 'Master 2éme année' }
];

const subMenus = ['Time Schedule', 'Courses', 'TDs', 'TPs', 'Solved Exams'];

const StudentsSpace = () => {
    const [expanded, setExpanded] = useState({});

    const toggleExpand = (id) => {
        setExpanded(prevExpanded => ({
            ...prevExpanded,
            [id]: !prevExpanded[id]
        }));
    };

    return (
        <div className="mx-10 sora-500">
            <title>University of Tlemcen - Students Space</title>
            <TopBar />
            <NavBar />
            <div className="container mx-auto px-4 py-6">
                {levels.map((level) => (
                    <div key={level.id} className="mb-5">
                        <button
                            className="text-xl bg-white font-bold my-2 sora-500 transition duration-300 ease-in-out hover:bg-[#A32829] hover:text-white rounded-md px-4 py-2 w-full text-left"
                            onClick={() => toggleExpand(level.id)}
                        >
                            {level.title}
                        </button>
                        {expanded[level.id] && (
                            <div className="ml-4 mt-2 bg-white shadow-md rounded-lg py-2">
                                {subMenus.map((subMenu, index) => (
                                    <div key={index} className="my-1 px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                        {subMenu}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
                <hr />
            </div>
            <Footer />
        </div>
    );
};

export default StudentsSpace;
