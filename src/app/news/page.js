import Link from "next/link";
import React from "react";
import Newscard from "../component/newscard";

const News=async()=>{
  const url = 'https://news67.p.rapidapi.com/v2/topic-search?languages=en&search=Technology';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '84b9781fe8mshdec4b48fb53c89dp166745jsne27c19220380',
      'X-RapidAPI-Host': 'news67.p.rapidapi.com'
    }
  };
  const response = await fetch(url, options);
	const result = await response.json();
  const array=await result.news;
	// console.log(result);
  
  return(
    <div className=" w-full bg-[url('/nek.avif')] bg-scroll mx-auto p-5 sm:p-10 md:p-16" >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {
        array.map((item)=>{
          return <Newscard key={item.id} {...item}/>
        })
      }
      </div>
      
    </div>
  );
};
export default News;