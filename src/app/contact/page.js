'use client';
import React, { useState } from 'react';
import Image from "next/image";
const ContactUs=()=>{
    const [user,setUser]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');
    const [status,setStatus]=useState(null);
    function handleuser(e){
        setUser(e.target.value);
        console.log(user);
    }
    function handleemail(e){
        setEmail(e.target.value);
    }
    function handlemessage(e){
        setMessage(e.target.value);
    }
    const handlesubmit=async(e)=>{
        e.preventDefault();
        try{
            const response=await fetch('/api/contact',{
                method:'POST',
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    username:user,
                    email:email,
                    message:message
                })
            })
            if(response.status===200){
                setUser("");
                setEmail("");
                setMessage("");
                setStatus('success');
            }else{
                setStatus('error');
            }
        }catch(e){
            console.log(e);
        }
        
        
    }
  return(
    <div>
      
      <div className="py-4 lg:py-8 relative  bg-pink-950">
            <Image  height={100} width={100} src="/c.jpg" unoptimized className="h-2/5 lg:h-full w-full lg:w-1/2 absolute inset-0 object-cover object-center xl:block hidden" alt="map" />
            <div className="xl:mx-auto xl:container relative">
                <div className="flex flex-wrap xl:mx-auto xl:container">
                    <div className="w-full relative lg:w-1/2 xl:mt-10 mb-10 2xl:pr-24 2xl:pl-0 xl:pl-12 pl-0">
    
                        <div className="w-full flex flex-col items-start xl:justify-start relative z-20 xl:px-0 px-4 xl:py-0 py-4">
                            <div className="w-full 2xl:pl-48 xl:pt-1">
                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-gray-800">We’re Here</h1>
                                <div className="w-full md:w-10/12 mt-3">
                                    <h2 className="text-gray-800 font-bold text-base md:text-lg leading-8 tracking-wider">We believe digital skills is at the heart of every success</h2>
                                    <div className="mt-4 md:mt-8">
                                        <h2 className="text-sm md:text-base  text-black font-bold">Address</h2>
                                        <h2 className="text-gray-800 font-bold text-base md:text-lg leading-8 tracking-wider mt-2"> BPIT, Rohini Sector-17, New Delhi</h2>
                                    </div>
                                    <div className="mt-4 md:mt-8">
                                        <h2 className="text-sm md:text-base text-black font-bold">Contact</h2>
                                        <h2 className="text-gray-800 text-base md:text-lg leading-8 font-bold tracking-wider mt-2">+2984298420 (Phone)</h2>
                                        <h2 className="text-gray-800 text-base md:text-lg leading-8 font-bold tracking-wider mt-2">+4829288394 (Cell)</h2>
                                    </div>
                                    <div className="mt-4 md:mt-8">
                                        <h2 className="text-sm md:text-base text-black font-bold">Email</h2>
                                        <h2 className="text-gray-800 text-base md:text-lg leading-8 font-bold tracking-wider mt-2">bpit@example.com</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form className="w-full lg:w-1/2 xl:pt-10 lg:pl-24" onSubmit={handlesubmit} action='POST'>
                        <div className="flex flex-col items-start xl:justify-start 2xl:justify-end xl:px-0 px-4">
                            <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold tracking-wider text-white">Let’s Talk</h1>
                            <div className="w-full 2xl:w-8/12 mt-3" role="form">
                                <h2 className="text-white-800 dark:text-white text-base md:text-lg leading-8 tracking-wider">For enquiries, please email us using the form below</h2>
                                <div className="mt-4 md:mt-8">
                                    <p  className="text-white-800 dark:text-white text-base font-medium">Name</p>
                                    <input value={user} required name="name" onChange={handleuser} className="mt-3 text-base dark:bg-white-800 border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none  py-5 pl-4 text-white-800 dark:text-black" type="text" placeholder="Justin Timberlake" aria-label="enter your name input" />
                                </div>
                                <div className="mt-4 md:mt-8">
                                    <p  className="text-white-800 dark:text-white text-base font-medium">Email Address</p>
                                    <input value={email} required name="email" onChange={handleemail} className="mt-3 text-base dark:bg-white-800 border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none  py-5 pl-4 text-white-800 dark:text-black" type="email" placeholder="example@mail.com" aria-label="enter your email input" />
                                </div>
                                <div className="mt-4 md:mt-8">
                                    <p className="text-white-800 dark:text-white text-base font-medium">Message</p>
                                    <textarea value={message} required name="message" onChange={handlemessage}  className="mt-3 text-base dark:bg-white-800 border-2 w-11/12 lg:w-full xl:w-10/12 resize-none hover:border-indigo-600 focus:border-indigo-600 focus:outline-none  xl:h-40 py-5 pl-4 text-white-800 dark:text-black" type="text" placeholder="Write us something..." aria-label="enter your message input"></textarea>
                                </div>
                                <div className="py-5 flex flex-col items-start xl:justify-start 2xl:justify-end">
                                     {status==='success' && <p className='text-white-800 dark:text-white text-base font-medium'>Thank You for your message!</p>}
                                     {status==="error" && <p className='text-white-800 dark:text-white text-base font-medium'>There was an error submitting your message</p>}
                                    <button type='submit' className="py-3 md:py-5 dark:bg-white dark:text-white-800 px-5 md:px-10 bg-white-900 text-black hover:opacity-90 ease-in duration-150 text-sm md:text-lg tracking-wider font-semibold focus:border-4 focus:ring-2 focus:ring-offset-2 focus:ring-white-900">Send</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    
    </div>
  );
};
export default ContactUs;