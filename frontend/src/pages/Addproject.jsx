import Button from "../components/Button";
import Inputbox from "../components/Inputbox";
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from "react";
import axios from "axios";
import CrossButton from "../components/CrossButton";
import { BACKEND_URL } from "../../config";

export const Addproject = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [techUsed, setTechUsed] = useState([]);
    const [techUsedValue, setTechUsedValue] = useState("");
    const [githubLink, setGithubLink] = useState("");
    const [demonstrationLink, setDemonstrationLink] = useState("");
    const [image, setImage] = useState("");
    const [allImage, setAllImage] = useState([]);
    
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    
    const [loading, setLoading] = useState(false); //  New state for loader
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-r from-black via-gray-900 to-gray-800 px-4">
            <div className="w-full max-w-2xl bg-gray-900 text-gray-300 rounded-lg p-6 border-2 border-gray-700 shadow-lg mt-4 mb-4">
                <h2 className="text-2xl font-bold text-green-400 mb-4 text-center">Add Your Project</h2>

                <Inputbox type="text" placeholder="Title" name="Title" className="bg-gray-800 text-white" onChange={(e) => setTitle(e.target.value)} />

                <textarea
                    placeholder="Description"
                    name="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="bg-gray-800 text-white w-full min-h-[100px] resize-none p-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 mb-4 mt-4"
                />

                {/* Tech Used Input */}
                <div className="flex flex-col md:flex-row w-full gap-2">
                    <div className="flex flex-col w-full md:w-4/5">
                        <Inputbox value={techUsedValue} type="text" placeholder="Tech Used" name="Tech Used" className="bg-gray-800 text-white" onChange={(e) => setTechUsedValue(e.target.value)} />
                    </div>
                    <div className="flex flex-col w-full md:w-1/5 md:mt-8">
                        <Button buttonName="Add" onClick={() => {
                            if (techUsedValue === "") return;
                            setTechUsed([...techUsed, techUsedValue]);
                            setTechUsedValue('');
                        }} />
                    </div>
                </div>

                {/* Tech Stack Display */}
                <div className="flex flex-wrap w-full gap-2 bg-gray-800 mt-2 mb-2 px-2 py-1 border border-gray-700 rounded overflow-y-auto">
                    {techUsed.map((tech, index) => (
                        <div key={index} className="bg-blue-700 p-1 rounded-lg border border-gray-600 text-white">
                            <Tech index={index} content={tech} techUsed={techUsed} setTechUsed={setTechUsed} />
                        </div>
                    ))}
                </div>

                <Inputbox type="text" placeholder="Github Link" name="Github Link" className="bg-gray-800 text-white" onChange={(e) => setGithubLink(e.target.value)} />
                <Inputbox type="text" placeholder="Demonstration Link" name="Demonstration Link" className="bg-gray-800 text-white" onChange={(e) => setDemonstrationLink(e.target.value)} />

                {/* Image Upload Section */}
                <div>
                    <div className="flex flex-col md:flex-row gap-2">
                        <Inputbox
                            ref={fileInputRef}
                            type="file"
                            name="Upload"
                            className="bg-gray-800 text-white"
                            onChange={async (e) => {
                                if (!e.target.files[0]) return;

                                setLoading(true); //  Show loader

                                try {
                                    const formData = new FormData();
                                    formData.append("file", e.target.files[0]);
                                    formData.append("upload_preset", "projectAddOnPortfolio");
                                    formData.append("cloud_name", "db0hcdu39");

                                    const res = await axios.post(
                                        "https://api.cloudinary.com/v1_1/db0hcdu39/image/upload",
                                        formData
                                    );

                                    setImage(res.data.url);
                                } catch (error) {
                                    alert("Image upload failed");
                                    console.error(error);
                                }

                                setLoading(false); //  Hide loader
                            }}
                        />

                        <div className="flex flex-col w-full md:w-1/5 mt-4 md:mt-8">
                            <Button
                                buttonName="Upload"
                                onClick={() => {
                                    if (image === "") return;
                                    setAllImage([...allImage, image]);
                                    setImage("");
                                    fileInputRef.current.value = '';
                                }}
                                disabled={loading}
                            />
                        </div>
                    </div>

                    {/* Loader */}
                    {loading && (
                        <div className="flex justify-center items-center mt-4 mb-2">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-400"></div>
                            <span className="ml-2 text-green-400">Uploading...</span>
                        </div>
                    )}

                    {/* Uploaded Images */}
                    {!loading && allImage.length > 0 && (
                        <div className="flex flex-wrap w-full gap-2 bg-gray-800 mt-2 mb-2 px-2 py-1 border border-gray-700 rounded overflow-y-auto">
                            {allImage.map((img, index) => (
                                <div key={index} className="bg-blue-700 p-1 rounded-lg border border-gray-600 text-white">
                                    <Image index={index} content={img} allImage={allImage} setAllImage={setAllImage} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Submit Button */}
                <Button buttonName="Submit" onClick={async () => {
                    try {
                        console.log("Token being sent:", "Bearer " + localStorage.getItem("token"));

                        const response = await axios.post(`${BACKEND_URL}/addproject`, {
                            title,
                            description,
                            techUsed,
                            githubLink,
                            demonstrationLink,
                            allImage
                        }, {
                            headers: {
                                Authorization: "Bearer " + localStorage.getItem("token")
                            }
                        });

                        if (response.status === 200) {
                            alert("Data received and added to resume page");
                            localStorage.removeItem("token");
                            navigate("/Work");
                        }
                    } catch {
                        alert("Invalid user");
                        navigate('/');
                    }
                }} />
            </div>
        </div>
    );
};

function Tech({ index, content, techUsed, setTechUsed }) {
    return (
        <div className="text-m font-medium text-left flex flex-row items-center gap-2">
            <div>{content}</div>
            <CrossButton onClick={() => {
                setTechUsed(techUsed.filter((_, i) => i !== index));
            }} size="10" />
        </div>
    );
}

function Image({ index, content, allImage, setAllImage }) {
    return (
        <div className="text-m w-full font-medium text-left flex flex-row items-center gap-2">
            <a href={content} target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">
                {content}
            </a>
            <CrossButton onClick={() => {
                setAllImage(allImage.filter((_, i) => i !== index));
            }} size="10" />
        </div>
    );
}
