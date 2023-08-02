import React from 'react'
import Navbar from '../components/Navbar'
import Tri from '../components/Tri'
import Footer from '../components/Footer'

export default function Tax() {
    return (
        <div>
            <Navbar />
            <div>
                <div>
                    <img src='https://static.wixstatic.com/media/f9273f_b991809ea7ba4352a56918d297b592c4~mv2.jpeg/v1/fill/w_1349,h_800,fp_0.50_0.50,lg_2,q_85,usm_0.66_1.00_0.01,enc_auto/f9273f_b991809ea7ba4352a56918d297b592c4~mv2.jpeg'
                        style={{ height: "95vh", width: "100%" }} />
                </div>
                <div className='bg-blue-900 text-white pb-[40px]'>
                    <h1 className='text-[45px] pt-[30px] '>
                        THE INFLATION <br /> REDUCTION ACT OF <br /> 2022
                    </h1>
                    <p className=' text-center'>
                        The Inflation Reduction Act of 2022 includes tax credits that reward homeowners for purchasing certain high- <br />efficiency HVAC equipment.
                    </p>
                </div>
                <div className='bg-blue-900 text-white pb-[40px]'>
                    <div className='w-[70%] mx-auto'>
                        <h1 className='text-4xl text-left '>
                            WHAT IS THE <br /> INFLATION <br /> REDUCTION ACT OF <br />2022?
                        </h1>
                        <p className='text-2xl text-left '>
                            To help reduce the effects of inflation, the U.S. Government has passed the Inflation Reduction Act of 2022. Of particular interest to homeowners, this act includes a number of tax credits for the installation of ENERGY STAR® certified home heating and cooling products. These include
                        </p>
                        <button className='p-4 mt-4' style={{ border: "1px solid white ", color: "white", borderRadius: "30px" }}>Lern More</button>
                    </div>
                    <div className='ml-[10%] mt-[50px]'>
                        <img src='https://static.wixstatic.com/media/f9273f_01cc609c4ac849989050f5e159bd9d66~mv2.png/v1/fill/w_940,h_440,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202022-11-05%20at%2011_20_28%20PM.png'
                            style={{ height: "450px", width: "90%" }} />
                    </div>
                </div>
                <div style={{ background: `url(https://static.wixstatic.com/media/9483cd14722d4f50a3e6adcd62a2e972.jpg/v1/fill/w_1349,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9483cd14722d4f50a3e6adcd62a2e972.jpg)`, backgroundSize: "100% 100%", height: "70vh" }}></div>
                <Tri />
                <Footer />
            </div>
        </div>
    )
}
