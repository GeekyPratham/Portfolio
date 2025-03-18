import Button from "../components/Button"
import Inputbox from "../components/Inputbox"
import {  useNavigate } from 'react-router-dom';
import { useState,useRef } from "react";
import axios, { all } from "axios";
import Container from "../components/container";
import CrossButton from "../components/CrossButton";

export const Addproject = () => {
    
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    const [techUsed,setTechUsed] = useState([]);
    const [techUsedValue,setTechUsedValue] = useState("");

    const [githubLink,setGithubLink] = useState("");
    const [demonstrationLink,setDemonstrationLink] = useState("");
    
    const [image,setImage] = useState("");
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

                {/* techUsed  */}
                <div className="flex flex-row w-full gap-2">
                    
                    <div className="flex flex-col w-4/5">
                    {/* input area */}
                    <Inputbox value={techUsedValue} type="text" placeholder="Tech Used" name="Tech Used " onChange={(e)=>{
                        setTechUsedValue(e.target.value);
                    }} />

                    </div>
                    {/* button */}
                    <div className="flex flex-col w-1/2 mt-9 ">
                    <Button buttonName="Add" onClick={()=>{
                        if(techUsedValue===""){
                            return;
                        }
                        setTechUsed([...techUsed,techUsedValue]);
                        // fill the techUsed array with the value of techUsedValue and then set the techUsedValue to empty string.
                        setTechUsedValue('');
                       
                    }}/>
                    </div>
                </div>
                <div 
                    name="techStackBox" 
                    className="flex flex-wrap w-full gap-2 bg-green-500  mt-2 mb-2 px-2 py-1 border rounded border-slate-200 overflow-y-auto"
                    >
                    {techUsed && techUsed.map(function(tech, index) {
                        console.log(tech);
                        return (
                            <div key={index} className="bg-yellow-200 p-1 rounded-lg border border-black">
                            <Tech index={index} content={tech} techUsed={techUsed} setTechUsed={setTechUsed}></Tech>
                            </div>
                        );
                    })}
                </div>
                

                <Inputbox type="text" placeholder="Github Link" name=" Github Link" onChange={(e)=>{
                    setGithubLink(e.target.value);
                }}/>
                <Inputbox type="text" placeholder="Demonstration Link" name="Demonstration Link"  onChange={(e)=>{
                    setDemonstrationLink(e.target.value);
                }}/>

                {/* image section */}
                
                {/* <div name="photo" id="photo" className="w-full overflow-y-auto max-h-40 mt-2 mb-2 px-2 py-1 border rounded border-slate-200 " >
                    {allImage.map(function(img, index) {
                        return <Container key={index} text={img}></Container>;
                    })}

                </div> */}

                <div>
                    <div className="flex flex-row gap-2">
                        <div>
                            <Inputbox ref={fileInputRef} type="file"  placeholder="Images" name=" Upload"  onChange={ async (e)=>{
                                if (!e.target.files[0]) return;
                                console.log(e.target.files[0]);

                                // Prepare form data

                                const formData = new FormData();
                                formData.append("file", e.target.files[0]);
                                formData.append("upload_preset", "projectAddOnPortfolio"); // Replace with your actual preset
                                formData.append("cloud_name", "db0hcdu39");

                                // Send POST request to Cloudinary
                                const res = await axios.post(
                                "https://api.cloudinary.com/v1_1/db0hcdu39/image/upload",
                                formData
                                );
                                
                                console.log("Cloudinary Response:", res.data.url);
                                //  alert("Image uploaded successfully!");

                                
                                setImage(res.data.url);


                            }} />

                        </div>
                        <div className="flex flex-col w-1/2 mt-9 ">
                            <Button buttonName="Upload" onClick={async()=>{
                                if(image===""){
                                    // alert("give some time to upload the image");
                                    return;
                                }
                                // console.log(allImage);
                                setAllImage([...allImage,image]);
                                setImage("");
                                fileInputRef.current.value = ''; // Reset the file input field
                                
                            
                            }}/>
                        </div>

                        
                  
                    </div>
                    <div 
                    name="allImageBox" 
                    className="flex flex-wrap w-full gap-2 bg-green-500  mt-2 mb-2 px-2 py-1 border rounded border-slate-200 overflow-y-auto"
                    >
                    {allImage && allImage.map(function(img, index) {
                        console.log(img);
                        return (
                            <div key={index} className="bg-yellow-200 p-1 rounded-lg border border-black">
                            <Image index={index} content={img} allImage={allImage} setAllImage={setAllImage}></Image>
                            </div>
                        );
                    })}
                </div>
                </div>


                
                
                <Button buttonName="Submit"  onClick={async()=>{
                    // onClick the submit button sending data to the backend

                    console.log(title,description   ,techUsed,githubLink,demonstrationLink);
                    console.log(allImage);
                    
                    const response = await axios.post("http://localhost:5000/addproject",{
                        title,
                        description,
                        techUsed,
                        githubLink,
                        demonstrationLink,
                        allImage
                    })
                    if(response.data === "Data received"){
                        alert("Data received")
                    }
                    
                    navigate("/Work");
                }}/>

            </div>
        </div>
    )
}

function Tech({index,content,techUsed,setTechUsed}){
    return <div className="text-m font-medium text-left flex flex-row items-center gap-2 ">

        <div>
            {content}
        </div>
        <CrossButton onClick={()=>{

            const updateTechUsed=[];
            for(let i=0;i<techUsed.length;i++){
                if(i!=index){
                    updateTechUsed.push(techUsed[i]);
                }
            }
            setTechUsed(updateTechUsed);
            // alert("Delete");
        }}  size="10"/>
    </div>
}

function Image({index,content,allImage,setAllImage}){
    return <div className="text-m w-full font-medium text-left flex flex-row items-center gap-2 ">

        <div>
        <a href={content} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          {content}
        </a>
        </div>
        <CrossButton onClick={()=>{

            const updateAllImage=[];
            for(let i=0;i<allImage.length;i++){
                if(i!==index){
                    updateAllImage.push(allImage[i]);
                }
            }
            setAllImage(updateAllImage);
            // alert("Delete");
        }}  size="10"/>
    </div>
}