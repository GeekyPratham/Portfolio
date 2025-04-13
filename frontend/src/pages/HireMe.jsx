import { Header } from "../header/Header";
import Select from "react-select";
import { useRef, useState } from "react";

export const HireMe = () => {
    const selectRef = useRef(null);

    const [purpose, setPurpose] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [github, setGithub] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [contact, setContact] = useState("");
    const [role, setRole] = useState(null);
    const [description, setDescription] = useState("");
    const [files, setFiles] = useState([]);// containing all the files

    const fileInputRef = useRef(null);

    const handleSubmit = async (e) =>{
         // your form handling logic
         e.preventDefault();
         const formData = new FormData();
         formData.append("Purpose", purpose?.value || "");
        formData.append("Name", name);
        formData.append("Email", email);
        formData.append("Github", github);
        formData.append("Linkedin", linkedin);
        formData.append("Contact", contact);
        formData.append("Role", role?.value || "");
        formData.append("Description", description);
       
        // for(let i=0;i<files.length;i++){
        //     formData.append(`File ${i}` ,files[i]);
        // }
        for (let i = 0; i < files.length; i++) {
            formData.append("Files", files[i]); //
        }
        
         
          // 🔍 Log FormData contents
         for (let [key, value] of formData.entries()) {
             console.log(`${key}:`, value);
         }
         try{
             const res = await fetch("http://localhost:5000/sendEmail",{
                 method : "POST",
                 body : formData,
             });
 
             const result = await res.json();
             console.log("Server Response:", result);
             alert("Form submitted successfully!");
         } catch (error) {
             console.error("Error submitting form:", error);
             alert("Submission failed.");
         }
    }
    return (
        <div className="w-screen h-screen overflow-y-auto bg-gradient-to-b from-black via-gray-900 to-gray-800 px-6 py-6 text-white">
            {/* Header */}
            <header className="mb-8">
                <Header />
            </header>
            <div className="w-full flex justify-center mt-10">
                <div className="w-full max-w-6xl bg-gray-900 bg-opacity-80 backdrop-blur-lg p-8 rounded-xl shadow-xl">
                    <h2 className="text-3xl sm:text-4xl font-bold text-green-400 text-center mb-3">Let's Work</h2>
                    <form onSubmit={handleSubmit} className="w-full bg-black/50 backdrop-blur-lg p-5 flex flex-col gap-5 min-h-[60vh]">
                        {/* Fill your details */}
                        <h3 className="text-xl sm:text-2xl font-bold text-green-400">Fill your details</h3>
                        <div className="w-full flex flex-col gap-6 p-6 sm:p-10 bg-gray-800 rounded-xl shadow-lg border border-gray-700 min-h-[80vh]">
                            {/* Purpose */}
                            <div className="w-full flex flex-col sm:flex-row items-center justify-between">
                                <h2 className="text-xl sm:text-2xl font-bold text-green-400">Purpose</h2>
                                <Select
                                    ref={selectRef}
                                    className="w-full sm:w-1/2 mt-2 sm:mt-0 text-black border p-2 rounded"
                                    options={[
                                        { value: "hiring", label: "Hiring" },
                                        { value: "collaboration", label: "Collaboration" },
                                        { value: "task_assignment", label: "Task Assignment" },
                                        { value: "help_consulting", label: "Help & Consulting" }
                                    ]}
                                    onChange={(option) => setPurpose(option)}
                                    value={purpose}
                                />
                            </div>
                            {/* Name */}
                            <div>
                                <h2 className="text-xl font-bold text-green-400">Name</h2>
                                <input
                                    type="text"
                                    className="w-full p-2 mt-2 border rounded bg-gray-700 text-white"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            {/* Email */}
                            <div>
                                <h2 className="text-xl font-bold text-green-400">Email</h2>
                                <input
                                    type="email"
                                    className="w-full p-2 mt-2 border rounded bg-gray-700 text-white"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            {/* GitHub */}
                            <div>
                                <h2 className="text-xl font-bold text-green-400">GitHub</h2>
                                <input
                                    type="text"
                                    className="w-full p-2 mt-2 border rounded bg-gray-700 text-white"
                                    placeholder="Enter your GitHub link"
                                    value={github}
                                    onChange={(e) => setGithub(e.target.value)}
                                />
                            </div>
                            {/* LinkedIn */}
                            <div>
                                <h2 className="text-xl font-bold text-green-400">LinkedIn</h2>
                                <input
                                    type="text"
                                    className="w-full p-2 mt-2 border rounded bg-gray-700 text-white"
                                    placeholder="Enter your LinkedIn"
                                    value={linkedin}
                                    onChange={(e) => setLinkedin(e.target.value)}
                                />
                            </div>
                            {/* Contact Number */}
                            <div>
                                <h2 className="text-xl font-bold text-green-400">Contact No</h2>
                                <input
                                    type="text"
                                    className="w-full p-2 mt-2 border rounded bg-gray-700 text-white"
                                    placeholder="Enter your contact number"
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                />
                            </div>
                            {/* Role */}
                            <div className="w-full flex flex-col sm:flex-row items-center justify-between">
                                <h2 className="text-xl sm:text-2xl font-bold text-green-400">Role</h2>
                                <Select
                                    className="w-full sm:w-1/2 mt-2 sm:mt-0 text-black border p-2 rounded"
                                    options={[
                                        { value: "uiux", label: "UI/UX" },
                                        { value: "backend", label: "Backend" },
                                        { value: "frontend", label: "Frontend" },
                                        { value: "node", label: "Node.js" }
                                    ]}
                                    onChange={(option) => setRole(option)}
                                    value={role}
                                />
                            </div>
                            {/* Description */}
                            <div>
                                <h2 className="text-xl font-bold text-green-400">Description</h2>
                                <textarea
                                    className="w-full p-2 mt-2 border rounded bg-gray-700 text-white"
                                    rows="4"
                                    placeholder="Enter description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                ></textarea>
                            </div>
                            {/* Attach File */}
                            <div>
                                <h2 className="text-xl font-bold text-green-400">Attach File</h2>
                                <div className="w-full bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700 flex flex-col items-center">
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        multiple
                                        className="w-full p-2 mt-2 border rounded bg-gray-700 text-white cursor-pointer file:bg-green-500 file:border-none file:text-white file:px-4 file:py-2 file:rounded-lg hover:file:bg-green-600 transition"
                                        onChange={async(e)=>{
                                            console.log(e.target.files[0]);
                                            setFiles([...files,e.target.files[0]])
                                            fileInputRef.current.value = "";
                                        }}
                                    />
                                    {/* Display uploaded files */}
                                    <div className="mt-4 w-full text-center">
                                        {files.length > 0 && (
                                            <ul className="space-y-2 w-full">
                                                {files.map((file, index) => (
                                                    <li key={index} className="flex justify-between items-center text-sm text-white underline cursor-pointer hover:text-green-400 transition">
                                                        <span onClick={() => window.open(URL.createObjectURL(file), "_blank")}>
                                                            {file.name}
                                                        </span>
                                                        <button 
                                                            className="ml-4 text-red-500 hover:text-red-700 transition" 
                                                            onClick={async() =>{
                                                                let newFile = [];
                                                                for(let i=0;i<files.length;i++){
                                                                    if(i!==index) newFile.push(files[i]);
                                                                }   
                                                                setFiles(newFile); 
                                                            }}
                                                            type="button"
                                                        >
                                                            Delete
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>
                            {/* Submit Button */}
                            <div className="text-center">
                                <button type="submit" className="px-6 py-3 mt-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition duration-300">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
