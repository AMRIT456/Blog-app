import React from "react";

const Practice=()=>{
  return(
    <div className="bg-gray-100 p-4 ">
      <section class="w-full mx-auto bg-white p-6 rounded-md shadow-md mb-8">


        <div class="mb-4">
        <h2 class="text-xl text-black font-bold mb-2">1. What is OOPS?</h2>
        <p className="text-slate-950">OOPS is abbreviated as Object Oriented Programming system in which programs are considered as a collection of objects. Each object is nothing but an instance of a class.</p>
        </div>


        <div class="mb-4 text-black">
        <h2 class="text-xl font-bold mb-2">2. Write basic concepts of OOPS?</h2>
        <ul class="list-disc pl-4">
            <li>Abstraction</li>
            <li>Encapsulation</li>
            <li>Inheritance</li>
            <li>Polymorphism</li>
        </ul>
        </div>

 
        <div class="mb-4 text-black">
        <h2 class="text-xl font-bold mb-2">3. What is a class?</h2>
        <p>A class is simply a representation of a type of object. It is the blueprint/plan/template that describes the details of an object.</p>
        </div>


        <div class="mb-4 text-black">
        <h2 class="text-xl font-bold mb-2">4. What is an Object?</h2>
        <p>An object is an instance of a class. It has its own state, behavior, and identity.</p>
        </div>


        <div class="mb-4 text-black">
        <h2 class="text-xl font-bold mb-2">5. What is Encapsulation?</h2>
        <p>Encapsulation is an attribute of an object, and it contains all data which is hidden. That hidden data can be restricted to the members of that class.</p>
        </div>

        </section>
    </div>
  );
};
export default Practice;