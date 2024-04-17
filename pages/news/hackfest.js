import React from 'react';
import Image from 'next/image';
import TopBar from '@/app/Components/TopBar';
import NavBar from '@/app/Components/NavBar';
import Footer from '@/app/Components/Footer';

const Hackfest = () => {
    return (
        <div className='mx-10'>
            <title>Hackfest - University of Tlemcen</title>
            <TopBar />
            <NavBar />
            <div className="mb-8">
                <h1 className="text-3xl font-bold my-4">Hackfest Begins!</h1>

                <img src='/hackfest2.jpg' alt="Hackfest Banner" width={900} height={300} />
                <p>Hosted by one of our clubs, Cywork, Hackfest is an exciting event where participants engage in various challenges ranging from Arduino projects to Ethical Hacking competitions. It's a great opportunity for students to showcase their technical skills and creativity.</p>
                <div className="grid grid-cols-2 gap-4 my-4">
                    <div>
                        <img src='hackfest.jpg' alt="Arduino Challenge" width={450} height={300} />
                        <p className="text-center">Arduino Challenge</p>
                    </div>
                    <div>
                        <img src='hackfest1.jpg' alt="Ethical Hacking Competition" width={450} height={300} />
                        <p className="text-center">Ethical Hacking Competition</p>
                    </div>
                </div>
                <p>Join us on <strong>4/17/2024</strong> for a day full of innovation, learning, and fun. Whether you're a beginner or an expert, there's something for everyone at Hackfest!</p>
            </div>
            <Footer />
        </div>
    );
};

export default Hackfest;
