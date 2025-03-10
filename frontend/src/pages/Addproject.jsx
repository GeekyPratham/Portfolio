import Button from "../components/Button"
import Inputbox from "../components/Inputbox"
import {  useNavigate } from 'react-router-dom';
import { useState,useRef } from "react";
import axios from "axios";
import Container from "../components/container";

export const Addproject = () => {
    
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [techUsed,setTechUsed] = useState([]);
    const [githubLink,setGithubLink] = useState("");
    const [demonstrationLink,setDemonstrationLink] = useState("");
    
    const [allImage,setAllImage] = useState([]);
    const navigate = useNavigate();
    

     // Create a reference for file input
    const fileInputRef = useRef(null);
 

    return (
        <div className="flex flex-col items-center justify-center bg-color-green-500 h-screen w-screen"> 
            <div className="text-l flex-col  font-bold bg-color-yellow-500  w-1/2 rounded-lg p-4 border-4 border-black">

                <Inputbox type="text" placeholder=" Title" name="Title" onChange={(e)=>{
                    setTitle(e.target.value);
                }}/>
               
                <Inputbox type="text" placeholder=" Description" name="Description" onChange={(e)=>{
                    setDescription(e.target.value);
                }} />
                <Inputbox type="text" placeholder="Tech Used" name="Tech Used " onChange={(e)=>{
                    setTechUsed(e.target.value);
                }}/>
                <Inputbox type="text" placeholder="Github Link" name=" Github Link" onChange={(e)=>{
                    setGithubLink(e.target.value);
                }}/>
                <Inputbox type="text" placeholder="Demonstration Link" name="Demonstration Link"  onChange={(e)=>{
                    setDemonstrationLink(e.target.value);
                }}/>
                
                <div name="photo" id="photo" className="w-full overflow-y-auto max-h-40 mt-2 mb-2 px-2 py-1 border rounded border-slate-200 " >
                    {allImage.map(function(img, index) {
                        return <Container key={index} text={img}></Container>;
                    })}

                </div>
                <Inputbox type="file" placeholder="Images" name=" Upload"  ref={fileInputRef} onChange={ async (e)=>{
                        if (!e.target.files[0]) return;  // Prevent errors if no file is selected
                        console.log(e.target.files[0])
                             
                         // Prepare FormData
                         const formData = new FormData();
                         formData.append("file", e.target.files[0]);
                         formData.append("upload_preset", "projectAddOnPortfolio"); // Replace with your actual preset
                         formData.append("cloud_name", "db0hcdu39");
                         console.log("hello")
                         
                         // Send POST request to Cloudinary
                         const res = await axios.post(
                         "https://api.cloudinary.com/v1_1/db0hcdu39/image/upload",
                         formData
                         );
                         
                         console.log("Cloudinary Response:", res.data.url);
                        //  alert("Image uploaded successfully!");
                         var imgLink = res.data.url;
                         // addImage(imgLink)
                         setAllImage([...allImage,[ // this function helps to new task in the arraya of allImages through whcih it get render.
                              imgLink
                          ]])
                        // setAllImage((prev) => [...prev, imgLink]);

                         console.log(imgLink);

                         // Reset file input field
                        if (fileInputRef.current) {
                            fileInputRef.current.value = ""; // Clear selected file
                        }
                        e.target.type = "text"; 
                        e.target.type = "file"; 

                    }} />
                <br/>   


                
                
                <Button buttonName="Submit"  onClick={()=>{
                    navigate("/Work");
                }}/>

            </div>
        </div>
    )
}