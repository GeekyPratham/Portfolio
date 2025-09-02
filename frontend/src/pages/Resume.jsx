import { useState, useRef } from "react";
import Button from "../components/Button";
import { Header } from "../header/Header";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { SiHono, SiTailwindcss, SiMongodb, SiCplusplus, SiTypescript, SiPython, SiMysql, SiExpress, SiDocker, SiTurborepo, SiPostgresql, SiPrisma , SiCloudflare ,SiNumpy, SiPandas, SiScikitlearn   } from "react-icons/si";


const skills = [
    { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
    { name: "Numpy", icon: <SiNumpy className="text-yellow-400" /> },
    { name: "Pandas", icon: <SiPandas className="text-yellow-400" /> },
    { name: "Scikitlearn", icon: <SiScikitlearn className="text-yellow-400" /> },
    // { name: "Matplotlib", icon: <SiMatplotlib className="text-yellow-400" /> },
    { name: "Python", icon: <SiPython className="text-green-400" /> },
    { name: "SQL", icon: <SiMysql className="text-blue-500" /> },
    { name: "HTML 5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS 3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
    { name: "Turborepo", icon: <SiTurborepo className="text-gray-400" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
    { name: "Prisma", icon: <SiPrisma className="text-gray-900" /> },
    { name: "Hono", icon: <SiHono className="text-blue-500" /> },
    { name: "Cloudflare", icon: <SiCloudflare className="text-yellow-400" /> },



];


export const Resume = () => {
    const [count, setCount] = useState(0);
    const rightBoxRef = useRef(null);

    const handleButtonClick = (index) => {
        setCount(index);
        setTimeout(() => {
            if (window.innerWidth < 640 && rightBoxRef.current) {
                rightBoxRef.current.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    };

    return (
        <div className="w-screen min-h-screen overflow-y-auto bg-gradient-to-b from-black via-gray-900 to-gray-800 px-1 md:px-6 py-4 md:py-6 text-white">
            <header className="mb-8">
                <Header />
            </header>

            <div className="w-full max-w-6xl mx-auto bg-black/50 backdrop-blur-lg p-5 rounded-xl shadow-xl border border-gray-700 flex flex-col sm:flex-row gap-5 min-h-[80vh]">
                {/* Left Box */}
                <div className="flex flex-col  gap-5 justify-center items-center sm:items-start w-full sm:w-1/2 h-full p-5 rounded-lg mt-5">
                    <h1 className="text-3xl sm:text-4xl font-bold text-green-400 text-center sm:text-left">Hello, I'm Pratham Raj</h1>
                    <p className="text-center sm:text-left">
                       A passionate tech enthusiast with a deep interest in software development and problem-solving. I’m driven by the challenge of building impactful solutions using cutting-edge technologies. My goal is to create meaningful, user-focused experiences while continuously evolving in the ever-changing tech world.
                    </p>

                    <div className="flex flex-col gap-3 w-full justify-center items-center sm:items-start">
                        <Button buttonName="Experience" onClick={() => handleButtonClick(0)} width="w-48 sm:w-60" />
                        <Button buttonName="Education" onClick={() => handleButtonClick(1)} width="w-48 sm:w-60" />
                        <Button buttonName="Courses/Certificate" onClick={() => handleButtonClick(4)} width="w-48 sm:w-60" />
                        <Button buttonName="Skills" onClick={() => handleButtonClick(2)} width="w-48 sm:w-60" />
                        <Button buttonName="About Me" onClick={() => handleButtonClick(3)} width="w-48 sm:w-60" />
                        <Button buttonName="View Resume" onClick={() => window.open("/PrathamRaj_resume.pdf", "_blank")} width="w-48 sm:w-60" />
                    </div>

                </div>

                {/* Right Box */}
                <div
                    ref={rightBoxRef}
                    className="flex flex-col gap-4 justify-start items-center sm:items-start w-full sm:w-1/2  sm:p-5  sm:mt-5"
                >

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

function Education() {
    return (
        <div className="flex flex-col gap-5 justify-center items-start w-full rounded-lg">
            <h1 className="text-3xl font-bold text-green-400">Education</h1>
            <div className="w-full  grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-lg bg-gray-900/80 border border-gray-700 shadow-lg backdrop-blur-lg p-6 h-[500px] overflow-y-auto">
                <div className="p-2  bg-gray-900/80 border border-gray-700 shadow-lg rounded-lg">
                    <h2 className="text-l font-bold text-green-400">B-Tech : 2022-2026</h2>
                    <p>Heritage Institute of Technology</p>
                    <h5>Percentage - 79.5</h5>
                </div>
                <div className="p-2  bg-gray-900/80 border border-gray-700 shadow-lg rounded-lg">
                    <h2 className="text-l font-bold text-green-400">12th(PCM) : 2019-2021</h2>
                    <p>Millia Convent English School, Rambagh, Purnea</p>
                    <h5>Percentage - 74.5</h5>
                </div>
                <div className="p-2  bg-gray-900/80 border border-gray-700 shadow-lg rounded-lg">
                    <h2 className="text-l font-bold text-green-400">10th : 2019</h2>
                    <p>S. R. D.A.V. Public School, Purnea</p>
                    <h5>Percentage - 93.4</h5>
                </div>
                
            </div>
        </div>
    );
}

function Experience() {
    return (
        <div className="flex flex-col gap-5 justify-center items-start w-full rounded-lg">
            <h1 className="text-3xl font-bold text-green-400">Experience</h1>
            <div className="w-full flex flex-col gap-3 rounded-lg bg-gray-900/80 border border-gray-700 shadow-lg backdrop-blur-lg p-6 h-[500px] overflow-y-auto">
                <div className="p-2 bg-gray-900/80 border border-gray-700 shadow-lg rounded-lg">
                    <h2 className="text-l font-bold text-green-400">
                        Alumni Association Portal - Smart India Hackathon (SIH) 2024
                    </h2>
                    <p className="text-gray-300">
                        Collaborated in a team to develop a full-stack Alumni Association Platform as part of SIH 2024.
                    </p>
                </div>
                <div className="p-2 bg-gray-900/80 border border-gray-700 shadow-lg rounded-lg">
                    <h2 className="text-l font-bold text-green-400">
                        Participated in Code2Career Coding Arena
                    </h2>
                    <a href="https://unstop.com/certificate-preview/3bdecfc4-28fa-4756-9b8a-cc9ea24fb70b"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline hover:text-blue-300">Certificate</a>
                    <p className="text-gray-300">
                        Second Runner Up in the Code2Career Coding Arena, showcasing strong problem-solving skills and coding proficiency.
                    </p>
                </div>
                
            </div>
        </div>
    );
}

function AboutMe() {
    return (
        <div className="flex flex-col gap-5 justify-center items-start w-full rounded-lg">
            <h1 className="text-4xl font-extrabold text-green-400">About Me</h1>
            <div className="w-full gap-3 rounded-lg bg-gray-900/80 border border-gray-700 shadow-lg backdrop-blur-lg p-6 h-[500px] overflow-y-auto text-lg space-y-4">
                <div className="flex items-center gap-2"><span className="font-semibold">Name:</span> <span>Pratham Raj</span></div>
                <div className="flex items-center gap-2"><FaPhone className="text-green-400" /> <span>7050861440</span></div>
                <div className="flex items-center gap-2"><FaEnvelope className="text-red-400" /><a href="mailto:kprathamraj2021@gmail.com" className="hover:underline">kprathamraj2021@gmail.com</a></div>
                <div className="flex items-center gap-2"><FaGithub className="text-gray-400" /><a href="https://github.com/GeekyPratham" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/GeekyPratham</a></div>
                <div className="flex items-center gap-2"><FaLinkedin className="text-blue-400" /><a href="https://www.linkedin.com/in/pratham-raj-890625257/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn Profile</a></div>
                <div className="flex items-center gap-2"><a href="https://www.geeksforgeeks.org/user/kprathamiemf/" rel="noopener noreferrer" className="hover:underline">GFG</a></div>
                <div className="flex items-center gap-2"><span className="font-semibold">Freelance:</span> <span className="text-green-400">Available</span></div>
                <div className="flex items-center gap-2"><span className="font-semibold">Languages:</span> <span>Hindi, English</span></div>
                <div className="flex items-center gap-2"><span className="font-semibold">Hobbies:</span> <span>Cricket, Badminton</span></div>
                <div className="flex items-center gap-2"><span className="font-semibold">Location:</span> <span>Kolkata, India</span></div>
            </div>
        </div>
    );
}

function Skills() {
    const [tooltip, setTooltip] = useState("");

    return (
        <div className="flex flex-col gap-5 justify-center items-start w-full rounded-lg px-4 md:px-8">
            <h1 className="text-3xl font-bold text-green-400">Skills</h1>
            <div className="w-full rounded-lg bg-gray-900/80 border border-gray-700 shadow-lg backdrop-blur-lg p-6 h-[500px] overflow-y-auto"
            style={{
                    scrollbarWidth: 'none',        // Firefox
                    msOverflowStyle: 'none'        // IE 10+
                }}>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="relative group p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300 cursor-pointer"
                            onMouseEnter={() => setTooltip(skill.name)}
                            onMouseLeave={() => setTooltip("")}
                        >
                            <div className="flex justify-center text-6xl">{skill.icon}</div>
                            {tooltip === skill.name && (
                                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-md shadow-md">
                                    {skill.name}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function Courses() {
    return (
        <div className="flex flex-col gap-5 justify-center items-start w-full rounded-lg ">
            <h1 className="text-3xl font-bold text-green-400">Courses/Certificate</h1>
            <div
                className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-lg bg-gray-900/80 border border-gray-700 shadow-lg backdrop-blur-lg p-6 max-h-[500px] overflow-auto"
                style={{
                    scrollbarWidth: 'none',        
                    msOverflowStyle: 'none'        
                }}
                >
               
                <div className="p-2 max-h-[200px] bg-gray-900/80 border border-gray-700 shadow-lg rounded-lg overflow-auto"
                style={{
                    scrollbarWidth: 'none',        
                    msOverflowStyle: 'none'       
                }}>
                    <h2 className="text-l font-bold text-green-400">Pandas - July 1, 2025</h2>
                    <a href="https://www.kaggle.com/learn/certification/geekyprathamraj/pandas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline hover:text-blue-300">Certificate</a>
                    <p>Demonstrated proficiency in data manipulation, cleaning, and analysis using Pandas and Python through hands-on project work.</p>
                </div>
                <div className="p-2 max-h-[200px] bg-gray-900/80 border border-gray-700 shadow-lg rounded-lg overflow-auto"
                style={{
                    scrollbarWidth: 'none',        
                    msOverflowStyle: 'none'        
                }}>
                    <h2 className="text-l font-bold text-green-400">Intro to Machine Learning - July 29, 2025</h2>
                    <a href="https://www.kaggle.com/learn/certification/geekyprathamraj/intro-to-machine-learning"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline hover:text-blue-300">Certificate</a>
                    <p>Gained practical experience in building and evaluating machine learning models using Python, including regression, random forest, and model validation techniques.</p>
                </div>
                <div className="p-2 max-h-[200px] bg-gray-900/80 border border-gray-700 shadow-lg rounded-lg overflow-auto"
                style={{
                    scrollbarWidth: 'none',      
                    msOverflowStyle: 'none'       
                }}>
                    <h2 className="text-l font-bold text-green-400">DSA - Nov 10, 2023</h2>
                    <a href="https://pwskills.com/learn/certificate/fbde1078-6480-4292-a79a-7b1990268704/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline hover:text-blue-300">Certificate</a>
                    <p>Enhanced problem-solving skills and optimized coding efficiency through in-depth training in Data Structures & Algorithms from PW Skills.</p>
                </div>
                <div className="p-2 max-h-[200px] bg-gray-900/80 border border-gray-700 shadow-lg rounded-lg overflow-auto"
                style={{
                    scrollbarWidth: 'none',        
                    msOverflowStyle: 'none'      
                }}>
                    <h2 className="text-l font-bold text-green-400">Postman API Fundamentals Student Expert - 9 Feb 2025</h2>
                    <a href="https://badgr.com/public/assertions/kL9wr30qQKG24QhZHsQUgA?identity__email=kprathamraj2021@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline hover:text-blue-300">Certificate</a>
                    <p>Certified Postman Student Expert with proficiency in API testing, scripting, and automation using Postman.</p>
                </div>
                <div className="p-2 max-h-[200px] bg-gray-900/80 border border-gray-700 shadow-lg rounded-lg overflow-auto"
                style={{
                    scrollbarWidth: 'none',        
                    msOverflowStyle: 'none'        
                }}>
                    <h2 className="text-l font-bold text-green-400">Python Matplotlib - September 2024</h2>
                    <a href="https://drive.google.com/file/d/1ftVvEw_-8FzyslEB5H3TG6SrFn8B9Qr0/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline hover:text-blue-300">Certificate</a>
                    <p>Successfully completed the fundamentals of data visualization using the Matplotlib library. Learned how to create various types of plots including line charts, bar graphs, scatter plots, and subplots etc. </p>
                </div>
                <div className="p-2 max-h-[200px] bg-gray-900/80 border border-gray-700 shadow-lg rounded-lg overflow-auto"
                style={{
                    scrollbarWidth: 'none',       
                    msOverflowStyle: 'none'       
                }}>
                    <h2 className="text-l font-bold text-green-400">Python Coder - June 2025</h2>
                    <a href="https://www.kaggle.com/certification/badges/geekyprathamraj/30"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline hover:text-blue-300">Certificate</a>
                    <p>Earned the Python Coder Badge from Kaggle for demonstrating proficiency in Python programming.</p>
                </div>
            </div>
        </div>
    );
}
