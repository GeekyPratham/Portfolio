import Button from "../components/Button"
import Inputbox from "../components/Inputbox"
import { useNavigate } from 'react-router-dom';

export const Addproject = () => {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [techUsed,setTechUsed] = useState([]);
    const [githubLink,setGithubLink] = useState("");
    const [demonstrationLink,setDemonstrationLink] = useState("");
    const [images,setImages] = useState([]);
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center bg-color-green-500 h-screen w-screen"> 
            <div className="text-2xl flex-col  font-bold bg-color-yellow-500  w-1/2 rounded-lg p-4 border-4 border-black">

                <Inputbox placeholder=" Title" name="Title" onChange={(e)=>{
                    setTitle(e.target.value);
                }}/>
                <Inputbox placeholder=" Description" name="Description" onChange={(e)=>{
                    setDescription(e.target.value);
                }} />
                <Inputbox placeholder="Tech Used" name="Tech Used " onChange={(e)=>{
                    setTechUsed(e.target.value);
                }}/>
                <Inputbox placeholder="Github Link" name=" Github Link" onChange={(e)=>{
                    setGithubLink(e.target.value);
                }}/>
                <Inputbox placeholder="Demonstration Link" name="Demonstration Link" onChange={(e)=>{
                    setDemonstrationLink(e.target.value);
                }}/>
                <Inputbox placeholder="Images" name="Images Upload" onChange={(e)=>{
                    setImages(e.target.value);
                }}/>    
                <Button buttonName="Submit"  onClick={()=>{

                    // data send to backend and then it rendr in work section and after submit it will navigate to work route or section

                    
                    navigate('/Work');
                }}/>

            </div>
        </div>
    )
}