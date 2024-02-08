import React from "react";
import Image from "next/image";
import Link from "next/link";
const About=()=>{
  return(
    <div>
      
      <div className="bg-cyan-950 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
                <div className="w-full lg:w-6/12">
                    <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 dark:text-white leading-9">Welcome to Tech Titans, where technology meets innovation, and ideas transform into reality.</h2>
                    <p className="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6"> At Tech Titans, we are more than just a platform; we are a community of passionate individuals dedicated to exploring the vast landscape of technology and its limitless possibilities.</p>
                </div>
                <div className="w-full lg:w-6/12">
                    <Image className="lg:block hidden w-full rounded-lg" width={100} height={100} src="/teamwork.avif" unoptimized alt="people discussing on board" />
                </div>
            </div>
    
            <div className="relative mt-24">
                <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                    <div className="z-20 w-12 h-12 bg-white rounded-full flex justify-center items-center">
                        <Image src="/flag.png" width={100} height={100} alt="flag" className="h-8 w-6" />
                    </div>
                    <div className="z-20 w-12 h-12 bg-white rounded-full flex justify-center items-center">
                        <Image src="/job-enrichment.png" width={100} height={100} alt="flag" className="h-8 w-6" />
                    </div>
                    <div className="z-20 w-12 h-12 bg-white rounded-full flex justify-center items-center">
                        <Image src="/user.png" width={100} height={100} alt="flag" className="h-8 w-6" />
                    </div>
                  
                </div>
                <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
            </div>
            <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                <div>
                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6">Founded</p>
                    <p className="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6">2024</p>
                </div>
                <div>
                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6">50M montly enrichments</p>
                    <p className="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6"> Over 20 million tech enthusiasts engage with our content monthly.</p>
                </div>
                <div className="sm:block hidden">
                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6">200k User</p>
                    <p className="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6"> A thriving community of 200k users and counting.</p>
                </div>
            </div>
            <div className="sm:hidden block relative mt-8">
                <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                   <Image src="" width={100} height={100} alt="user" />
                </div>
                <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
            </div>
            <div className="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                <div>
                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white mt-6">400k User</p>
                    <p className="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
            </div>
    
            <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
                <div className="w-full lg:w-6/12">
                    <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 dark:text-white">Our Mission</h2>
                    <p className="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6 w-full lg:w-10/12 xl:w-9/12">We believe in the transformative power of technology to shape a better tomorrow. Our commitment extends beyond delivering information; we strive to create an environment where learning, collaboration, and innovation thrive. Tech Titans is not just a platform; it's a movement driving the future of tech.</p>
                    <p className="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 w-full lg:w-10/12 xl:w-9/12 mt-10"> Dive deep into our thoughtfully curated blogs covering the latest in tech trends.Stay informed with our real-time, comprehensive coverage of the ever-evolving tech landscape.Sharpen your coding skills with our meticulously designed Data Structures and Algorithms practice sheets.</p>
                </div>
                <div className="w-full lg:w-6/12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
                       
                        <div className="flex p-4 shadow-md bg-white rounded-lg">
                            <div className="mr-6  h-14  rounded-full">
                               <Image className=" "  src="/network.png" width={100} height={100} alt="team card" />
                            </div>
                            <div className="">
                                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-black dark:text-black">Team</p>
                                <p className="mt-2 font-normal text-base leading-6 text-black dark:text-black">Our team comprises visionary individuals with diverse expertise, united by a common goal — to empower you on your tech journey. </p>
                            </div>
                        </div>
    
                     
                        <div className="flex p-4 shadow-md bg-white rounded-lg">
                            <div className="mr-6 h-14  rounded-full">
                               <Image  className="p-2" src="/conference.png" width={100} height={100} alt="board card" />
                            </div>
                            <div className="">
                                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-black dark:text-black">Board</p>
                                <p className="mt-2 font-normal text-base leading-6 text-black dark:text-black">Our board is comprised of visionary leaders who guide Tech Titans towards excellence. </p>
                            </div>
                        </div>
    
                    
                        <div className="flex p-4 shadow-md bg-white rounded-lg">
                            <div className="mr-6 h-14  rounded-full">
                               <Image src="/press-release.png" width={100} height={100} alt="press card" className="p-2" />
                            </div>
                            <div className="">
                                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-black dark:text-black">Press</p>
                                <p className="mt-2 font-normal text-base leading-6 text-black dark:text-black">Tech Titans has been recognized by the press for our contribution to the tech and design landscape.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
  );
};
export default About;