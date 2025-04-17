import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSwipeable } from "react-swipeable";
import { Header } from "../header/Header";
import Button from "../components/Button";

export const Work = () => {
    const [project, setProject] = useState([]);
    const [currIndex, setCurrIndex] = useState(0);

    useEffect(() => {
        axios.get("https://portfolio-hppv.onrender.com/getProject")
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

            {/* Upload Button */}
            <div className="flex justify-end mb-6">
                <Button buttonName={"Upload Project"} onClick={() => navigate('/Verify')} />
            </div>

            {/* Main Project Container */}
            <div className="w-full max-w-6xl mx-auto bg-black/50 backdrop-blur-lg p-6 rounded-xl shadow-xl border border-gray-700">
                {project.length > 0 && <Proj proj={project[currIndex]} index={currIndex} />}
            </div>

            {/* Navigation Buttons */}
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

    const handleSwipe = (dir) => {
        if (dir === "LEFT") {
            setCurrImageIndex((currImageIndex + 1) % proj.image.length);
        } else if (dir === "RIGHT") {
            const newIdx = currImageIndex - 1;
            setCurrImageIndex(newIdx < 0 ? proj.image.length - 1 : newIdx);
        }
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => handleSwipe("LEFT"),
        onSwipedRight: () => handleSwipe("RIGHT"),
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

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

            {/* Swipeable Image Section with Buttons on Larger Screens */}
            <div
                {...swipeHandlers}
                className="p-2 w-full lg:w-1/2 bg-gray-900/80 border border-gray-700 shadow-lg rounded-lg backdrop-blur-lg flex items-center justify-between"
            >
                {/* Prev Button - only visible on sm and up */}
                <button
                    onClick={() => handleSwipe("RIGHT")}
                    className="hidden sm:flex px-2 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition"
                >
                    ◀️
                </button>

                {/* Image */}
                {proj.image.length > 0 && <Image img={proj.image[currImageIndex]} />}

                {/* Next Button - only visible on sm and up */}
                <button
                    onClick={() => handleSwipe("LEFT")}
                    className="hidden sm:flex px-2 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition"
                >
                    ▶️
                </button>
            </div>
        </div>
    );
}

// Image Component
function Image({ img }) {
    return (
        <div className="w-full h-64 sm:h-80 md:h-[28rem] overflow-x-auto">
            <div className="w-full h-full flex justify-center">
                <img
                    src={img}
                    className="h-full object-contain rounded-lg shadow-lg"
                    alt="project"
                />
            </div>
        </div>
    );
}

