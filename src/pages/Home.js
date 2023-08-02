import React, { useState, useEffect } from 'react'
import Navbar from "../components/Navbar"
import img from "../assets/img1.png"
import img3 from "../assets/img3.png"
import img2 from "../assets/img2.png"
import { BsFacebook } from "react-icons/bs"
import { AiFillGoogleCircle, AiFillLinkedin } from "react-icons/ai"


import Data from "../components/Api"
import Footer from '../components/Footer'
export default function Home() {
    const [hom] = useState(Data.home);
    const [quo] = useState(Data.quote);
    const [ser] = useState(Data.service);

    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [comment, setcomment] = useState('');

    useEffect(() => {

        const dataToSave = JSON.stringify({ firstname, lastname, email, phone, comment });
        localStorage.setItem('fourInputsData', dataToSave);
    }, [firstname, lastname, email, phone, comment]);

    const handleSubmit = (e) => {
        e.preventDefault()
        // Your code here to handle the submission
        // For example, you can log the values to the console:
        console.log('Input 1:', firstname);
        console.log('Input 2:', lastname);
        console.log('Input 3:', email);
        console.log('Input 4:', phone);
        console.log('Input 5:', comment);

    };
    // =================

    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');
    const [input5, setInput5] = useState('');
    const [input6, setInput6] = useState('');


    // Load data from localStorage on component mount
    useEffect(() => {
        const savedData = localStorage.getItem('fourInputsData2');
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            setInput1(parsedData.input1);
            setInput2(parsedData.input2);
            setInput3(parsedData.input3);
            setInput4(parsedData.input4);
            setInput5(parsedData.input5);
            setInput6(parsedData.input6);

        }
    }, []);

    // Save data to localStorage on input change
    useEffect(() => {
        const dataToSave = JSON.stringify({ input1, input2, input3, input4, setInput5, setInput6 });
        localStorage.setItem('fourInputsData2', dataToSave);
    }, [input1, input2, input3, input4, setInput5, setInput6]);

    const handle = (e) => {
        e.preventDefault()

        // Your code here to handle the submission
        // For example, you can log the values to the console:
        console.log('Input 1:', input1);
        console.log('Input 2:', input2);
        console.log('Input 3:', input3);
        console.log('Input 4:', input4);
        console.log('Input 5:', input5);
        console.log('Input 6:', input6);

    };

    return (
        <div>
            <Navbar />
            <div className=' w-full h-auto lg:bg-red-600'>
                <div class="flex items-center lg:py-16 border justify-center justify-space-between ">
                    <div class="flex  flex-col md:flex-row w-[85%]  items-center ">
                        <div class="flex-col  space-y-4 text-center lg:mb-0 mb-[40px] bg-white flex justify-center lg:h-[600px]  md:w-1/2 lg:w-[80%]">
                            <div class="text-[40px] text-red-500 font-small">{hom.h1}</div>
                            <p class="lg:w-[80%] text-[#0B0B82] lg:mt-[30px] mx-auto" >{hom.p1}</p>
                            <p class="lg:w-[80%]  text-[#0B0B82] lg:mt-[30px] mx-auto" >{hom.p2}</p>
                        </div>
                        <div class=" ">
                            <img src={img} alt="" class="lg:h-[600px] lg:w-[700px]  md:ml-[25px]" />

                        </div>
                    </div>
                </div>
            </div>
            {/* ------------------Section 2 */}
            <div>
                <img src={img2} className='lg:h-[380px] md:h-[300px] sm:h-[200px] h-[300px] w-full' />
            </div>
            {/* --------------------Section 3 ------------------ */}
            {/* <div style={{ background: "#0B0B82", color: "white" }}>
                <div >
                    <h1 className='text-center text-4xl pt-[35px] '>
                        {quo.h1}
                    </h1>
                    <p className='text-center w-[75%] mx-auto mt-[30px] pb-[20px]'>{quo.p}</p>
                </div>
                <div>

                    <input type="text" name="" id="" placeholder="First Name" />
                    <input type="text" name="" id="" placeholder="Last Name" />
                    <input type="text" name="" id="" placeholder="Email" />
                    <input type="text" name="" id="" placeholder="Phone" />
                    <input type="text" name="" id="" placeholder="Comments" />
                    <button> Submit</button>

                </div>

            </div> */}
            <div style={{ background: "#0B0B82", color: "white" }}>
                <div class="container " >
                    <h1 className='pt-[20px]'>{quo.h1}</h1>
                    <p className='w-[80%] mx-auto text-center mb-6'>{quo.p}</p>
                    <form id="quoteForm" className='mx-auto'>
                        <input type="text" id="firstname" onChange={(e) => setfirstname(e.target.value)} placeholder='First Name' name="name" required />
                        <input type="text" id="lastname" onChange={(e) => setlastname(e.target.value)} placeholder='Last Name' name="name" required />

                        <div className='flex justify-between'>
                            <input type="email" id="email" className='w-[48%]' onChange={(e) => setemail(e.target.value)} placeholder='Email' name="email" required />
                            <input type="tel" id="phone" className='w-[48%]' onChange={(e) => setphone(e.target.value)} placeholder='Phone' name="phone" required />
                        </div>

                        <textarea id="message" name="message" placeholder='Comments' onChange={(e) => setcomment(e.target.value)} rows="4" required></textarea>

                        <button type="submit" className='mt-[20px] mb-[30px] bg-white text-black w-[25%] mx-auto p-4' onClick={handleSubmit}>Submit</button>
                    </form>

                </div>
            </div>

            {/* -----------Section 4-------------- */}

            <div class="flex justify-center" style={{ background: "url(https://static.wixstatic.com/media/096e426dde5949b1b02de1b97e618034.jpg/v1/fill/w_1349,h_860,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/096e426dde5949b1b02de1b97e618034.jpg)", backgroundSize: "100% 100%" }}>
                <div class="flex flex-col md:flex-row justify-center w-[90%] mb-7  mt-7">
                    <div class="flex flex-col bg-white text-black lg:py-5 lg:pl-4  md:w-[65%] ">
                        <h1 class="text-4xl text-red-600  px-5 my-5">{ser.h1}</h1>
                        <div class="flex px-5 space-x-2">
                            <p className='text-center mt-4 mb-4'>{ser.p}</p>
                        </div>
                        <div class="flex px-5 space-x-2">
                            <h2 className='text-xl text-center mx-auto mt-4'>{ser.addre}</h2>
                        </div>
                        <div class="flex px-5 mb-4">
                            <ion-icon name="globe-outline" class="text-orange-500 mt-1 my-3" ></ion-icon>
                            <span class="text-xl mx-auto text-center mt-4">{ser.email}</span>
                        </div>
                        <div class="flex px-5 mb-4">
                            <ion-icon name="globe-outline" class="text-orange-500 mt-1 my-3" ></ion-icon>
                            <span class="text-md mx-auto text-center mt-4">{ser.call}</span>
                        </div>
                        <div class="px-5 flex space-x-5 mt-7 mx-auto mb-5" >
                            <a href="https://www.facebook.com/AirProNWA/"><i class=" text-blue-500 text-3xl"><BsFacebook /></i></a>
                            <a href="https://goo.gl/maps/bUBwEvXtnZA9QSddA "><i class="text-red-500  text-3xl"><AiFillGoogleCircle /></i></a>
                        </div>
                    </div>
                    <div class="flex flex-col px-7 py-2 bg-white  w-full ">
                        <div className='lg:w-[60%] mx-auto'>
                            <input type="text" name="" onChange={(e) => setInput1(e.target.value)} id="" placeholder="Name" class="w-full border-2 border-white text-sm outline-none px-3 py-1 placeholder:text-black placeholder:opacity-40 mt-4 focus:border-blue-500 duration-200 ease-in-out rounded-lg" />

                            <input type="email" name="" id="" onChange={(e) => setInput2(e.target.value)} placeholder="Email" class="w-full border-2 border-white text-sm outline-none px-3 py-1 placeholder:text-black placeholder:opacity-40 mt-4 focus:border-blue-500 duration-200 ease-in-out rounded-lg" />

                            <input type="tel" name="" id="" placeholder="Phone " onChange={(e) => setInput3(e.target.value)} class="w-full border-2 border-white text-sm outline-none px-3 py-1 placeholder:text-black placeholder:opacity-40 mt-4 focus:border-blue-500 duration-200 ease-in-out rounded-lg" />
                            <input type="text" name="" id="" placeholder="Address" onChange={(e) => setInput4(e.target.value)} class="w-full border-2 border-white text-sm outline-none px-3 py-1 placeholder:text-black placeholder:opacity-40 mt-4 focus:border-blue-500 duration-200 ease-in-out rounded-lg" />
                            <textarea id="message" name="message" placeholder='Comments' rows="4" onChange={(e) => setInput5(e.target.value)} className='w-full' required></textarea>
                            <input type="tel" name="" id="" placeholder="Enter your phone number " onChange={(e) => setInput6(e.target.value)} class="w-full border-2 border-white text-sm outline-none px-3 py-1 placeholder:text-black placeholder:opacity-40 mt-4 focus:border-blue-500 duration-200 ease-in-out rounded-lg" />

                            <button class="bg-blue-900 hover:bg-blue-600 px-4 font-semibold text-white w-[100%] p-3 text-center mx-auto my-3 rounded-tr-lg rounded-bl-lg" onClick={handle}>Submit</button>

                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div >
    )
}
