import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#A32829] text-white -mx-20">
            <div className="container mx-auto px-4 py-6">
                <div className="flex justify-evenly">
                    <Link href="/calendar">
                        <span className="hover:underline cursor-pointer">Calendar</span>
                    </Link>
                    <Link href="/news">
                        <span className="hover:underline cursor-pointer">News & Events</span>
                    </Link>
                    <Link href="/about-us">
                        <span className="hover:underline cursor-pointer">About Us</span>
                    </Link>
                    <Link href="/contact-us">
                        <span className="hover:underline cursor-pointer">Contact Us</span>
                    </Link>
                </div>
                <div className="text-center mt-4">
                    © University of Tlemcen
                </div>
            </div>
        </footer>
    );
};

export default Footer;
