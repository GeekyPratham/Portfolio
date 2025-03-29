import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "../header/Header";
import Button from "../components/Button";

export const Work = () => {
    const [project, setProject] = useState([]);
    const [currIndex, setCurrIndex] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:5000/getProject")
            .then(response => {
                console.log("Full Backend Response:", response.data || []);
                setProject(response.data.project);
            })
            .catch(error => console.error("Error fetching projects:", error));
    }, []);

    const navigate = useNavigate();

    return (
        <div className="w-screen h-screen overflow-y-auto bg-gradient-to-b from-black via-gray-900 to-gray-800 px-6 py-6 text-white">
            {/* Header */}
            <header className="mb-8">
                <Header />
            </header>

            {/* Upload Button (Outside Container) */}
            <div className="flex justify-end mb-6">
                <Button buttonName={"Upload Project"} onClick={() => navigate('/Verify')} />
            </div>

            {/* Main Project Container */}
            <div className="w-full max-w-6xl mx-auto bg-black/50 backdrop-blur-lg p-6 rounded-xl shadow-xl border border-gray-700">
                {project.length > 0 && <Proj proj={project[currIndex]} index={currIndex} />}
            </div>

            {/* Navigation Buttons (Outside Container) */}
            <div className="flex justify-between mt-6 max-w-6xl mx-auto">
                <Button buttonName={"Prev"} onClick={() => {
                    let newIdx = currIndex - 1;
                    setCurrIndex(newIdx < 0 ? project.length - 1 : newIdx);
                }} />
                <Button buttonName={"Next"} onClick={() => {
                    setCurrIndex((currIndex + 1) % project.length);
                }} />
            </div>
        </div>
    );
};

// Project Component
function Proj({ proj, index }) {
    const [currImageIndex, setCurrImageIndex] = useState(0);

    return (
        <div className="flex flex-col lg:flex-row w-full gap-8">
            {/* Project Details */}
            <div className="p-6 w-full lg:w-1/2 bg-gray-900/80 border border-gray-700 shadow-lg rounded-lg backdrop-blur-lg">
                <h1 className="text-2xl font-bold text-green-400">{proj.title}</h1>
                <p className="text-gray-300 mt-4">{proj.description}</p>

                {/* Tech Stack */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-blue-300">Tech Stack:</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {proj.techStack && proj.techStack.map((tech, index) => (
                            <span key={index} className="bg-green-500/30 text-green-300 px-3 py-1 rounded-full text-sm">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Links */}
                <div className="mt-6 flex justify-between">
                    <a href={proj.demoLink} target="_blank" rel="noopener noreferrer"
                        className="text-blue-400 hover:underline hover:text-blue-500 transition">
                        🚀 Live Demo
                    </a>
                    <a href={proj.githubLink} target="_blank" rel="noopener noreferrer"
                        className="text-gray-400 hover:underline hover:text-white transition">
                        🛠 GitHub Repo
                    </a>
                </div>
            </div>

            {/* Image Section (Same Background) */}
            <div className="p-6 w-full lg:w-1/2 bg-gray-900/80 border border-gray-700 shadow-lg rounded-lg backdrop-blur-lg flex items-center justify-center gap-4">
                <button 
                    onClick={() => {
                        let newImageIdx = currImageIndex - 1;
                        setCurrImageIndex(newImageIdx < 0 ? proj.image.length - 1 : newImageIdx);
                    }} 
                    className="px-4 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition">
                    ◀️
                </button>

                {proj.image.length > 0 && <Image img={proj.image[currImageIndex]} />}

                <button 
                    onClick={() => {
                        setCurrImageIndex((currImageIndex + 1) % proj.image.length);
                    }} 
                    className="px-4 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition">
                    ▶️
                </button>
            </div>
        </div>
    );
}

// Image Component
function Image({ img }) {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <img src={img} className="w-full h-auto max-h-96 object-cover rounded-lg shadow-lg" />
        </div>
    );
}
