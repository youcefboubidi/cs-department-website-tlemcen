import React from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
const NavBar = () => {
    const pathname = usePathname();
    const [searchParams, setSearchParams] = useSearchParams();

    const isActive = (path) => {
        return pathname === path;
    };

    return (
        <nav>
            <ul className='flex flex-row justify-center gap-9 bg-white py-8 sora-400 -mx-20 my-10 shadow-sm'>
                <li className={`sora-400 hover:text-red-600 transform hover:scale-110 transition duration-300 ease-in-out ${isActive('/') ? 'text-red-600 border-b-2 border-red-600' : ''}`}>
                    <Link href="/">Home</Link>
                </li>
                <li className={`hover:text-red-600 transform hover:scale-110 transition duration-300 ease-in-out ${isActive('/news') ? 'text-red-600 border-b-2 border-red-600' : ''}`}>
                    <Link href="/news">News & Events</Link>
                </li>
                <li className={`hover:text-red-600 transform hover:scale-110 transition duration-300 ease-in-out ${isActive('/students-space') ? 'text-red-600 border-b-2 border-red-600' : ''}`}>
                    <Link href="/students-space">Students Space</Link>
                </li>
                <li className={`hover:text-sred-600 transform hover:scale-110 transition duration-300 ease-in-out ${isActive('/about-us') ? 'text-red-600 border-b-2 border-red-600' : ''}`}>
                    <Link href="/about-us">About Us</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
