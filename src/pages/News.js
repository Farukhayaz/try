import React from 'react'
import Navbar from '../components/Navbar'
import img from "../assets/img4.png"
import Footer from '../components/Footer'

export default function News() {
    return (
        <div>
            <Navbar />
            <div style={{ background: `url(${img})`, backgroundSize: "100% 100%", height: "80vh" }}>
                <div className='text-center text-blue-900 font-bold border h-full flex flex-col items-center justify-center'>
                    <h1 className='text-4xl'>
                        NEWS
                    </h1>
                    <p className='text-[20px]'>
                        Changes coming January 2023
                    </p>
                </div>

            </div>
            <div className='bg-blue-800 text-white pt-10 pb-10'>
                <div className='w-[70%] mx-auto'>
                    <h1 className='text-start text-2xl'>
                        <u>WHAT IS SEER2 AND WHY DOES IT MATTER?</u>
                    </h1>
                    <p className='text-[16px]'>The last time you purchased an AC, you probably considered the unit's SEER before deciding to buy it. <br />

                        SEER, of course, is a standard for gauging an air conditioner's efficiency. It's an acronym for "seasonal energy efficiency ratio" with higher SEER numbers indicating a more efficient AC. <br />

                        But starting on January 1, 2023, SEER won't be the standard anymore. Instead, every new AC will receive a SEER2 rating. <br />

                        A higher SEER2 will still be more efficient than a lower SEER2. However, SEER2 is calculated much differently from SEER. It's really an all new standard. <br /></p>
                </div>

                <div className='w-[70%] mx-auto mt-10'>
                    <h1 className='text-start text-2xl'>
                        <u>WHAT IS SEER2 ALL ABOUT?</u>
                    </h1>
                    <p className='text-[16px]'>The whole point of SEER2 is to make up for deficiencies in the way SEER was calculated. <br />

                        You see, the US Department of Energy (DOE) sets the standards for appliance efficiency and issues extremely precise <br />

                        guidance on how manufacturers need to calculate the relative efficiency of their equipment. The standards for SEER<br />

                        were established many years ago, and manufacturers have been abiding by them ever since. However, there were always problems with SEER.<br />

                        According to a recent report in ACHR, the DOE created SEER2 in an effort to better align AC efficiency ratings with real world operating conditions:</p>
                </div>
                <div className='w-[70%] mx-auto mt-10 mb-10'>
                    <h1 className='text-start text-2xl'>
                        <u>THAT'S COOL. BUT HOW DOES SEER2 AFFECT ME?</u>
                    </h1>
                    <p className='text-[16px]'>No matter if you're a budget minded home owner or if Efficiency and comfort is your primary concern the fact of the
                        <br /> matter is that equipment pricing is going to increase due to this change as well as constant supply chain issues. If
                        <br /> you're thinking of replacing your system at all now is the time before next years price increases</p>
                </div>
            </div>
            <Footer />
        </div>

    )
}
