import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Inputbox from "../components/Inputbox";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../config";

export const Verify = () => {
    
    const [email, setEmail] = useState("");
    const [enteredOtp, setEnteredOtp] = useState("");
    const navigate = useNavigate();

    const generateOTP = async () => {

        try {
            const response = await fetch(`${BACKEND_URL}/sendOTP`, {
            
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: email})
            });
            console.log(response)
            const data = await response.json();
            console.log(data);
            if (data.success) {
                alert("OTP sent successfully");
            } else {
                alert("unvalid user");
            }
        } catch (e) {
            console.error("Error sending OTP:", e);
        }
    };

    const verifyOTP = async () => {
        
        try{
            const res = await axios.post(`${BACKEND_URL}/userVerify`,{
                email,
                enteredOtp   
            })
            console.log(res.data.msg)
            console.log(res.data.token);
            localStorage.setItem("token",  res.data.token)
            alert("OTP Verified");
            navigate('/Addproject');

        }
        catch(err){
            console.log(err);
            alert("wrong otp")
        }
       
        
       
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-black text-green-400 p-6">
            <div className="bg-gray-900 p-6 rounded-lg shadow-xl w-full max-w-md border border-green-500">
                <h2 className="text-2xl font-bold text-center mb-4 text-green-400">Verify OTP</h2>
                <Inputbox onChange={(e) => setEmail(e.target.value)} placeholder="Email" name="Email" className="mb-4 text-black" />
                <br />
                <Button buttonName="Send OTP" onClick={generateOTP} className="w-full bg-green-700 hover:bg-green-600 transition-all text-white" />
                <Inputbox onChange={(e) => setEnteredOtp(e.target.value)} placeholder="Enter OTP" name="OTP" className="mt-4 mb-4 text-black" />
                <br />
                <Button buttonName="Verify OTP" onClick={verifyOTP} className="w-full bg-green-700 hover:bg-green-600 transition-all text-white" />
            </div>
        </div>
    );
};
