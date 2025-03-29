import { useState } from "react";
import Button from "../components/Button";
import { Header } from "../header/Header";

export const Resume = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="w-screen h-screen overflow-y-auto bg-gradient-to-b from-black via-gray-900 to-gray-800 px-6 py-6 text-white">
            {/* Header */}
            <header className="mb-8">
                <Header />
            </header>

            {/* Resume section */}
            <div className="w-full max-w-6xl mx-auto bg-black/50 backdrop-blur-lg p-6 rounded-xl shadow-xl border border-gray-700 flex flex-col sm:flex-row gap-5">
                
                {/* Left Part */}
                <div className="flex flex-col gap-5 justify-center items-center sm:items-start w-full sm:w-1/2 p-5 rounded-lg">
                    <h1 className="text-3xl sm:text-4xl font-bold text-green-400 text-center sm:text-left">Hello, I'm Pratham Raj</h1>
                    <p className="text-center sm:text-left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eligendi aperiam tempora aliquam dicta modi esse dolor a assumenda.
                    </p>

                    <div className="flex flex-col gap-3 w-full justify-center items-center sm:items-start">
                        <Button buttonName="Experience" onClick={() => setCount(0)} width="w-48 sm:w-60" />
                        <Button buttonName="Education" onClick={() => setCount(1)} width="w-48 sm:w-60" />
                        <Button buttonName="Courses" onClick={() => setCount(4)} width="w-48 sm:w-60" />
                        <Button buttonName="Skills" onClick={() => setCount(2)} width="w-48 sm:w-60" />
                        <Button buttonName="About Me" onClick={() => setCount(3)} width="w-48 sm:w-60" />
                    </div>
                </div>

                {/* Right Part */}
                <div className="flex flex-col gap-5 justify-center items-center sm:items-start w-full sm:w-1/2 h-full p-5 rounded-lg">
                    {count === 0 && <Experience />}
                    {count === 1 && <Education />}
                    {count === 4 && <Courses />}
                    {count === 2 && <Skills />}
                    {count === 3 && <AboutMe />}
                </div>
            </div>
        </div>
    );
};



function Experience(){
    return (
        <div className="flex flex-col gap-5 justify-center items-start w-full  rounded-lg">
            <h1 className="text-3xl font-bold text-green-400">Experience</h1> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eligendi aperiam tempora aliquam dicta modi esse dolor a assumenda. Deserunt deleniti eligendi, aliquam consequuntur quis minima! Nobis blanditiis necessitatibus distinctio!
                
            </p>

            <div className=" w-full h-70   rounded-lg bg-gray-900/80 border border-gray-700 shadow-lg backdrop-blur-lg p-6 overflow-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo laudantium minima reiciendis accusantium sunt ab necessitatibus nulla officiis maxime asperiores, distinctio rerum doloribus blanditiis earum, sint tenetur eveniet laborum?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate eaque, assumenda velit saepe unde eum consequatur obcaecati laudantium reprehenderit corrupti facere suscipit doloremque laboriosam incidunt quas tempora in quisquam corporis.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit laboriosam dicta dolore provident hic optio, error at animi omnis. Magni explicabo quos porro, corporis odio eveniet. Quod sit ratione eveniet!
            </div>
        </div>
    )
}

function Education(){
    return (
        <div className="flex flex-col gap-5 justify-center items-start w-full  rounded-lg">
            <h1 className="text-3xl font-bold text-green-400">Education</h1> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eligendi aperiam tempora aliquam dicta modi esse dolor a assumenda. Deserunt deleniti eligendi, aliquam consequuntur quis minima! Nobis blanditiis necessitatibus distinctio!</p>

            <div className=" w-full h-75   rounded-lg bg-gray-900/80 border border-gray-700 shadow-lg backdrop-blur-lg p-6 overflow-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo laudantium minima reiciendis accusantium sunt ab necessitatibus nulla officiis maxime asperiores, distinctio rerum doloribus blanditiis earum, sint tenetur eveniet laborum?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate eaque, assumenda velit saepe unde eum consequatur obcaecati laudantium reprehenderit corrupti facere suscipit doloremque laboriosam incidunt quas tempora in quisquam corporis.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit laboriosam dicta dolore provident hic optio, error at animi omnis. Magni explicabo quos porro, corporis odio eveniet. Quod sit ratione eveniet!
            </div>
        </div>
    )
}
function AboutMe(){
    return (
        <div className="flex flex-col gap-5 justify-center items-start w-full  rounded-lg">
            <h1 className="text-3xl font-bold text-green-400">AboutMe</h1> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eligendi aperiam tempora aliquam dicta modi esse dolor a assumenda. Deserunt deleniti eligendi, aliquam consequuntur quis minima! Nobis blanditiis necessitatibus distinctio!</p>

            <div className=" w-full h-75   rounded-lg bg-gray-900/80 border border-gray-700 shadow-lg backdrop-blur-lg p-6 overflow-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo laudantium minima reiciendis accusantium sunt ab necessitatibus nulla officiis maxime asperiores, distinctio rerum doloribus blanditiis earum, sint tenetur eveniet laborum?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate eaque, assumenda velit saepe unde eum consequatur obcaecati laudantium reprehenderit corrupti facere suscipit doloremque laboriosam incidunt quas tempora in quisquam corporis.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit laboriosam dicta dolore provident hic optio, error at animi omnis. Magni explicabo quos porro, corporis odio eveniet. Quod sit ratione eveniet!
            </div>
        </div>
    )
}
function Skills(){
    return (
        <div className="flex flex-col gap-5 justify-center items-start w-full  rounded-lg">
            <h1 className="text-3xl font-bold text-green-400">Skills</h1> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eligendi aperiam tempora aliquam dicta modi esse dolor a assumenda. Deserunt deleniti eligendi, aliquam consequuntur quis minima! Nobis blanditiis necessitatibus distinctio!</p>

            <div className=" w-full h-75   rounded-lg bg-gray-900/80 border border-gray-700 shadow-lg backdrop-blur-lg p-6 overflow-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo laudantium minima reiciendis accusantium sunt ab necessitatibus nulla officiis maxime asperiores, distinctio rerum doloribus blanditiis earum, sint tenetur eveniet laborum?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate eaque, assumenda velit saepe unde eum consequatur obcaecati laudantium reprehenderit corrupti facere suscipit doloremque laboriosam incidunt quas tempora in quisquam corporis.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit laboriosam dicta dolore provident hic optio, error at animi omnis. Magni explicabo quos porro, corporis odio eveniet. Quod sit ratione eveniet!
            </div>
        </div>
    )
}

function Courses(){
    return (
        <div className="flex flex-col gap-5 justify-center items-start w-full  rounded-lg">
            <h1 className="text-3xl font-bold text-green-400">Courses</h1> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eligendi aperiam tempora aliquam dicta modi esse dolor a assumenda. Deserunt deleniti eligendi, aliquam consequuntur quis minima! Nobis blanditiis necessitatibus distinctio!</p>

            <div className=" w-full h-75   rounded-lg bg-gray-900/80 border border-gray-700 shadow-lg backdrop-blur-lg p-6 overflow-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo laudantium minima reiciendis accusantium sunt ab necessitatibus nulla officiis maxime asperiores, distinctio rerum doloribus blanditiis earum, sint tenetur eveniet laborum?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate eaque, assumenda velit saepe unde eum consequatur obcaecati laudantium reprehenderit corrupti facere suscipit doloremque laboriosam incidunt quas tempora in quisquam corporis.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit laboriosam dicta dolore provident hic optio, error at animi omnis. Magni explicabo quos porro, corporis odio eveniet. Quod sit ratione eveniet!
            </div>
        </div>
    )
}