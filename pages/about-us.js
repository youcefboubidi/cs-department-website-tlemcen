import React from 'react';
import Head from 'next/head';
import TopBar from '@/app/Components/TopBar';
import Footer from '@/app/Components/Footer';
import NavBar from '@/app/Components/NavBar';
import '@/app/globals.css';

const AboutUsPage = () => {
    return (
        <div className='mx-10 sora-500'>
            <TopBar />
            <NavBar />
            <Head>
                <title>About Us - University of Tlemcen</title>
            </Head>
            <main className="bg-white w-full rounded-3xl bg-cover bg-center bg-no-repeat my-8 p-4">
                <div className='bg-[#A32829] text-[#FDE4BE] p-4 sora-500 rounded-xl'>
                    <h1 className='text-2xl sora-600 text-center'>ABOUT US</h1>
                    <hr className="my-4" />
                    <section className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
                        <p>
                            Empowering students with knowledge and skills, fostering innovation, and engaging with the community.
                        </p>
                    </section>
                    <section className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Our History</h2>
                        <p>
                            Since our founding in 1974, the University of Tlemcen has been a beacon of academic excellence and cultural enrichment. We've grown to offer a wide range of programs and have become a home for students from around the globe.
                        </p>
                    </section>

                    <section className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Our Campus</h2>
                        <p>
                            Our campus is a testament to our heritage, featuring historic architecture alongside modern facilities. It's a place where tradition meets innovation, creating an ideal environment for learning and discovery.
                        </p>
                    </section>

                    <section className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Our Programs</h2>
                        <p>
                            We offer an array of programs across various disciplines, each designed to challenge our students and prepare them for success in an increasingly complex world.
                        </p>
                    </section>

                    <section className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Our Community</h2>
                        <p>
                            The University of Tlemcen is more than an institution; it's a vibrant community where collaboration and service are part of our core values. Our students, faculty, and alumni are dedicated to making a positive impact.
                        </p>
                    </section>

                    <section className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Join Us</h2>
                        <p>
                            Discover the opportunities that await you at the University of Tlemcen. We invite you to explore our campus, connect with our community, and find your place in our university family.
                        </p>
                    </section>



                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AboutUsPage;
