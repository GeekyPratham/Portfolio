import { useNavigate } from "react-router-dom";
import { Project } from "../components/Project";
import { Header } from "../header/Header";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import Count from "../components/Count";

export const Work = () => {
    const [project, setProject] = useState([]);
    const [currIndex, setCurrIndex] = useState(0);
    
    useEffect(() => {
        axios.get("http://localhost:5000/getProject")
            .then(response => {
                console.log("Full Backend Response:", response.data || []); // Check what you receive
                setProject(response.data.project);
            })
            .catch(error => console.error("Error fetching projects:", error));
    }, []);

    const navigate = useNavigate();

    return (
        <div className="w-screen h-screen overflow-y-auto bg-gradient-to-r from-orange-500 via-purple-500 to-indigo-600 px-8 py-6">
            {/* Header */}
            <header className="mb-8">
                <Header />
            </header>

            {/* Main Section */}
            <div className="w-full h-auto min-h-[600px] bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-xl shadow-lg mt-10 flex-col">
                <div className="h-full bg-green-300">
                    <div className="w-full bg-pink-300 flex justify-end mb-10">
                        <Button buttonName={"Upload Project"} onClick={() => navigate('/Verify')} />
                    </div>

                    {/* Projects Section */}
                    <div className="flex h-auto min-h-[600px] flex-row w-full   bg-yellow-200 ">
                        {/* {project.map(proj => <Proj key={proj._id || Math.random()} proj={proj} />)} */}
                        {project.length >0 && <Proj proj={project[currIndex]} index={currIndex} />}
                       

                    </div>
                </div>
                <div className=" w-full flex  flex-row justify-between">
                    <Button buttonName={"Prev"} onClick={()=>{
                         let newIdx = currIndex - 1;
                         setCurrIndex(newIdx < 0 ? project.length - 1 : newIdx);
                    }}/>
                    <Button buttonName={"Next"} onClick={()=>{
                        setCurrIndex((currIndex + 1) % project.length);
                    }}/>
                </div>

            </div>
           
        </div>
    );
};
function Proj({ proj, index }) {
    const [currImageIndex, setCurrImageIndex] = useState(0);

    return (
        <div className="flex flex-row h-auto min-h-[600px] w-full">
            {/* Project Details */}
            <div className="p-6 m-6 w-full md:w-2/3 lg:w-1/2 bg-white bg-opacity-90 border border-gray-300 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl backdrop-blur-md">
                <div className="mt-4 flex flex-col justify-between gap-10 min-h-[500px]">
                    
                    {/* Project Title */}
                    <h1 className="text-2xl font-bold text-gray-900 tracking-wide">{proj.title}</h1>

                    {/* Project Description */}
                    <p className="text-gray-700 mt-2 text-sm md:text-base leading-relaxed">{proj.description}</p>

                    {/* Tech Stack */}
                    <div className="mt-4">
                        <h3 className="font-semibold text-gray-800 text-lg">Tech Stack:</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {proj.techStack && proj.techStack.map((tech, index) => (
                                <span key={index} className="bg-blue-600 text-white text-xs md:text-sm px-3 py-1 rounded-full shadow-md">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="mt-6 flex justify-between items-center">
                        <a href={proj.demoLink} target="_blank" rel="noopener noreferrer" 
                        className="text-blue-600 font-medium text-sm md:text-base hover:underline hover:text-blue-800 transition duration-200">
                            🚀 Live Demo
                        </a>
                        <a href={proj.githubLink} target="_blank" rel="noopener noreferrer" 
                        className="text-gray-700 font-medium text-sm md:text-base hover:underline hover:text-black transition duration-200">
                            🛠 GitHub Repo
                        </a>
                    </div>
                </div>
            </div>

            {/* Fix Image Container */}
            <div className="bg-white p-6 m-6 w-1/2 flex items-center justify-center rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg h-auto min-h-[600px]">
                {/* Ensure Image Takes Full Height */}
                <button 
                    onClick={() => {
                        let newImageIdx = currImageIndex - 1;
                        setCurrImageIndex(newImageIdx < 0 ? proj.image.length - 1 : newImageIdx);
                    }} 
                    type="button" 
                    className="flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-md border border-white/30 
                            hover:bg-white/30 hover:border-white/50 text-white text-xl font-semibold rounded-full shadow-xl 
                            transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
                >
                    ◀️
                </button>

                {proj.image.length > 0 && <Image img={proj.image[currImageIndex]} />}

                <button 
                    onClick={() => {
                        setCurrImageIndex((currImageIndex + 1) % proj.image.length);
                    }} 
                    type="button" 
                    className="flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-md border border-white/30 
                            hover:bg-white/30 hover:border-white/50 text-white text-xl font-semibold rounded-full shadow-xl 
                            transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
                >
                    ▶️
                </button>

                
            </div>
        </div>
    );
}

function Image({ img }) {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <img
                src={img}
                className="w-full h-full object-cover rounded-lg"
            />
        </div>
    );
}
