import React from "react";
import Images from "next/image";
import Link from "next/link";
const Newscard=(item)=>{
    const {id,Title,Url,Image,PublishedOn}=item;
    let result=PublishedOn.slice(0,10);
  return(
    <div>
      <div className="max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href="#">
                <Images  className="rounded-t-lg w-full h-60" 
                src={Image} 
                height={100} width={100} alt="" unoptimized/>
            </Link>
            <div className="p-5 bg-cyan-950">
                <Link href={Url} target="_blank">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{Title}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">- {result}</p>
                
                <Link href={Url}  target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                </Link>
            </div>
        </div>

    </div>
  );
};
export default Newscard;