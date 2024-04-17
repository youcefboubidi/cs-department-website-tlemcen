import React from 'react';
import '@/app/globals.css'
import NavBar from '@/app/Components/NavBar';
import Footer from '@/app/Components/Footer';
import TopBar from '@/app/Components/TopBar';


const ContactUs = () => {
    return (

        <div className='mx-20'>
            <TopBar />
            <NavBar />
            <div className='bg-[#A32829] text-[#FDE4BE] p-4 sora-500 my-8 rounded-xl'>
                <h1 className='text-2xl sora-600'>CONTACT US</h1>
                <hr />
                <p className='mt-4'>
                    If you have any questions or would like to get in touch with the Department of Computer Science, please fill out the form below and we will get back to you as soon as possible.
                </p>
                <form className='mt-4'>
                    <label htmlFor="name" className='block mb-2'>Name:</label>
                    <input type="text" id="name" name="name" className='w-full p-2 rounded-md mb-4' />

                    <label htmlFor="email" className='block mb-2'>Email:</label>
                    <input type="email" id="email" name="email" className='w-full p-2 rounded-md mb-4' />

                    <label htmlFor="message" className='block mb-2'>Message:</label>
                    <textarea id="message" name="message" rows="4" className='w-full p-2 rounded-md mb-4'></textarea>

                    <button type="submit" className='bg-[#FDE4BE] text-[#A32829] p-2 rounded-md'>Send Message</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default ContactUs;
