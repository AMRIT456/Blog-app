import Link from "next/link";
import React from "react";
import Newscard from "../component/newscard";
import Image from "next/image";
const Blogs=async()=>{
   return(
    <div className=" w-full bg-[url('/nek.avif')] bg-scroll mx-auto p-5 sm:p-10 md:p-16" >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div className="max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href="#">
                <Image  className="rounded-t-lg w-full h-60" 
                src="/blog1.png" 
                height={100} width={100} alt="" unoptimized/>
            </Link>
            <div className="p-5 bg-cyan-950">
                <Link href=" " target="_blank">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ExpressJS</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Express.js - A web framework for Node.js</p>
                
                <Link href="/blogpages/express"  target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                </Link>
            </div>
        </div>
        <div className="max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href="#">
                <Image  className="rounded-t-lg w-full h-60" 
                src="" 
                height={100} width={100} alt="" unoptimized/>
            </Link>
            <div className="p-5 bg-cyan-950">
                <Link href=" " target="_blank">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                
                <Link href="/blogpages/java"  target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                </Link>
            </div>
        </div>
        <div className="max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href="#">
                <Image  className="rounded-t-lg w-full h-60" 
                src="" 
                height={100} width={100} alt="" unoptimized/>
            </Link>
            <div className="p-5 bg-cyan-950">
                <Link href=" " target="_blank">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                
                <Link href=""  target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                </Link>
            </div>
        </div>
        <div className="max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href="#">
                <Image  className="rounded-t-lg w-full h-60" 
                src="" 
                height={100} width={100} alt="" unoptimized/>
            </Link>
            <div className="p-5 bg-cyan-950">
                <Link href=" " target="_blank">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                
                <Link href=""  target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                </Link>
            </div>
        </div>
        <div className="max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href="#">
                <Image  className="rounded-t-lg w-full h-60" 
                src="" 
                height={100} width={100} alt="" unoptimized/>
            </Link>
            <div className="p-5 bg-cyan-950">
                <Link href=" " target="_blank">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                
                <Link href=""  target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                </Link>
            </div>
        </div>
        <div className="max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href="#">
                <Image  className="rounded-t-lg w-full h-60" 
                src="" 
                height={100} width={100} alt="" unoptimized/>
            </Link>
            <div className="p-5 bg-cyan-950">
                <Link href=" " target="_blank">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                
                <Link href=""  target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                </Link>
            </div>
        </div>
      </div>
      
    </div>
  );
};
export default Blogs;