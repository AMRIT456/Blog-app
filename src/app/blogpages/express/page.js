import React from "react";
const Page=()=>{
    return (
        <div className="bg-slate-200 w-full">
         <section class="max-w-2xl mx-auto w-full text-black bg-white p-6 rounded-md shadow-md mb-8">

            <h1 class="text-3xl font-bold mb-4">Express.js - A Minimalist Web Application Framework</h1>

            <p class="mb-4">
            Express.js is a fast, unopinionated, minimalist web framework for Node.js, designed to build web applications and APIs quickly and with ease. It is widely used for building server-side applications and RESTful APIs.
            </p>

            <h2 class="text-xl font-bold mb-2">Key Features of Express.js</h2>
            <ul class="list-disc pl-4 mb-4">
            <li>Robust routing</li>
            <li>Middleware support</li>
            <li>Template engines</li>
            <li>HTTP utility methods</li>
            <li>Focus on high performance</li>
            </ul>

            <h2 class="text-xl font-bold mb-2">Getting Started with Express.js</h2>
            <p class="mb-4">
            To get started with Express.js, you need to have Node.js installed on your machine. Once Node.js is installed, you can create a new Express.js application using the following steps:
            </p>

            <div class="bg-gray-200 p-4 rounded-md mb-4">
            <pre class="whitespace-pre-wrap"><code class="language-bash">npm install express</code></pre>
            </div>

            <p class="mb-4">
            After installing Express, you can create your application and define routes, middleware, and more. Here's a simple example of an Express.js application:
            </p>

            
            </section>
        </div>
    )
}
export default Page;