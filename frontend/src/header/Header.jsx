import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import CrossButton from "../components/CrossButton";


export const Header = () => {
    const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between px-8 py-4 shadow-md">
      <div>
        <h1 className="text-2xl font-bold text-white">Pratham Raj</h1>
      </div>
      <div className="flex space-x-4">
        <Button buttonName={"Home"} onClick={()=>{
            navigate('/')
        }}/>
        <Button buttonName={"Resume"} onClick={()=>{
            navigate('/resume')
        }}/> 
        <Button buttonName={"Work"} onClick={()=>{
            navigate('/work')
        }}/>
        <Button buttonName={"Experience"} onClick={()=>{
            navigate('/Experience')
        }}/>
        <Button buttonName={"HireMe"} onClick={()=>{
            navigate('/HireMe')
        }}/>
        
      </div>
    </div>
  );
};
