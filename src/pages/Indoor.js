import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Footer from '../components/Footer'

export default function Indoor() {
    return (
        <div>
            <Navbar />
            <div className='bg-blue-800 flex justify-center items-center h-[60vh] text-white'>
                <h1 className='text-5xl ' style={{ lineHeight: "1.2", letterSpacing: "2px" }}>INDOOR AIR QUALITY <br /> SOLUTIONS</h1>
            </div>
            <div className='bg-blue-700'>
                <Slider />
            </div>
            <Footer className="bg-white" />

        </div >

    )
}
