import React from "react";

const Page=(item)=>{
  const {id,Title,Url,Source,Image,PublishedOn,Summary}=item;
  //console.log(item);
  return(
    <div>
      <h1>{Title}</h1>
    </div>
  );
};
export default Page;