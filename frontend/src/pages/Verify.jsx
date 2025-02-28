import { useNavigate } from "react-router-dom";
import Button from "../components/Button"
import Inputbox from "../components/Inputbox"
import { useState } from "react";

export const Verify = ()=>{
    const [generatedOtp,setGeneratedOtp] = useState(null);
    const [email,setEmail] = useState(null);
    const [enteredOtp,setEnteredOtp] = useState(null);
    const navigate = useNavigate();

    const generateOTP = async()=>{
        const num = Math.floor(100000 + Math.random() * 900000);
        
        console.log(num);
        setGeneratedOtp(num);
        // code to send otp to phone number

        try{
            const response = await fetch("http://localhost:5000/sendOTP",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email:email,
                    otp:num,
                })
            });
            const data = await response.json();
            console.log(data)
            console.log(data.success)
            if(data.success==true){
                console.log("OTP send successfully")
                alert("OTP send successfully")
            }
            else{
                console.log("failed to send OTP");
                alert("failed to send OTP");
            }
        }catch(e){
            console.log("error " , e);
        }

        console.log("OTP Generated")
    }
    const verifyOTP = ()=>{
        // Check if an OTP has been generated first
        if (generatedOtp === null) {
            console.log("Please generate an OTP first");
            return;
        }
        
        // Compare the generated OTP with the OTP entered by the user
        if (parseInt(enteredOtp) === generatedOtp) {
            console.log("OTP Verified");
            navigate('/Addproject');
        } else {
            console.log("OTP Mismatch");
        }
    }
    return (
        <div>
            <Inputbox onChange={(e)=>{
                setEmail(e.target.value);
            }} placeholder="Email" name="email" />

            <Button buttonName="Send" onClick={generateOTP}/>

            <Inputbox onChange={(e)=>{
                setEnteredOtp(e.target.value);
            }} placeholder="Enter OTP" name="OTP" />

            <Button buttonName="Verify" onClick={verifyOTP}/>
        </div>
    )
}