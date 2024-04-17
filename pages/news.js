import React from 'react';
import Link from 'next/link';
import '../app/globals.css';
import TopBar from '@/app/Components/TopBar';
import NavBar from '@/app/Components/NavBar';
import Footer from '@/app/Components/Footer';
const newsArticles = [
    {
        id: 1,
        title: 'Hackfest Begins!',
        description: 'Hosted by one our clubs, Cywork, Hackfest participants engage in various challenges from Arduino to Ethical Hacking',
        detailPage: '/news/hackfest',
        date: '4/17/2024',
    },
    {
        "id": 2,
        "title": "University of Tlemcen Celebrates Student's Quranic Achievement",
        "description": "The University of Tlemcen's Faculty of Natural Sciences, Life Sciences, Earth and Universe Sciences, led by Dean Nassima Amal Mokhtari Souleymane, honored student Nour El Iman Aissani for winning the 13th edition of the 'Crown of the Quran' representing Tlemcen with distinction.",
        "detailPage": "/news/university-of-tlemcen-celebrates-quranic-achievement",
        date: '4/15/2024',

    },
    {
        id: 3, title: 'National Seminar on Innovation in Life Sciences', description: 'The GenApAgiE laboratory organizes the 5th National Seminar, MGIBR 2024, bringing together academics, scientists, project holders in nature and life sciences, as well as investors and industrialists to assess the feasibility of innovative projects leading to professional networking.', detailPage: '/events/national-seminar-life-sciences', date: '4/12/2024',
    },
    {
        id: 4,
        title: 'Hackfest Begins!',
        description: 'Hosted by one our clubs, Cywork, Hackfest participants engage in various challenges from Arduino to Ethical Hacking',
        detailPage: '/news/hackfest'
    },
    {
        "id": 5,
        "title": "University of Tlemcen Celebrates Student's Quranic Achievement",
        "description": "The University of Tlemcen's Faculty of Natural Sciences, Life Sciences, Earth and Universe Sciences, led by Dean Nassima Amal Mokhtari Souleymane, honored student Nour El Iman Aissani for winning the 13th edition of the 'Crown of the Quran' representing Tlemcen with distinction.",
        "detailPage": "/news/university-of-tlemcen-celebrates-quranic-achievement"
    },
    { id: 6, title: 'National Seminar on Innovation in Life Sciences', description: 'The GenApAgiE laboratory organizes the 5th National Seminar, MGIBR 2024, bringing together academics, scientists, project holders in nature and life sciences, as well as investors and industrialists to assess the feasibility of innovative projects leading to professional networking.', detailPage: '/events/national-seminar-life-sciences' },

];

const News = () => {
    return (
        <div className='mx-10'>
            <title>News - University of Tlemcen</title>
            <TopBar />
            <NavBar />
            {newsArticles.map((article) => (
                <div key={article.id} className="mb-8">
                    <Link href={article.detailPage}>
                        <span className="text-xl font-bold text-blue-600 hover:underline cursor-pointer">
                            {article.title}
                        </span>
                    </Link>
                    <p>{article.description}</p>
                    <p className="text-gray-600">Date: {article.date}</p>
                </div>
            ))}
            <Footer />
        </div>
    );
};

export default News;
