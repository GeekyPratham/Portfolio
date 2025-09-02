import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Inputbox from "../components/Inputbox";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { Header } from "../header/Header";

export const Verify = () => {
    
    const [email, setEmail] = useState("");
    const [enteredOtp, setEnteredOtp] = useState("");
    const navigate = useNavigate();

    const [loading,setLoading] = useState(false);
    const [verifyLoading,setverifyLoading] = useState(false);

    const generateOTP = async () => {
        setLoading(true);
        try {
            if(!email){
                alert("Please enter your email");
                setLoading(false)
                return;
            }
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
                alert("Please fill the correct email!");
            }
        } catch (e) {
            console.error("Error sending OTP:", e);
        }
        setLoading(false)
    };

    const verifyOTP = async () => {
        setverifyLoading(true)
        try{
            if(!email || !enteredOtp){
                alert("Please enter all the fields");
                setverifyLoading(false)
                return;
            }
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
       
        
        setverifyLoading(false)
    };

    return (
        

        <div className="w-screen min-h-screen overflow-y-auto bg-gradient-to-b from-black via-gray-900 to-gray-800 px-1 md:px-6 py-4 md:py-6 text-white 
        flex flex-col ">
              {/* Header - Full Width */}
            <header className="mb-8">
                <Header />
            </header>
            
            <div className="bg-gray-900 p-6 rounded-lg shadow-xl w-full max-w-md border border-green-500">
                    <h2 className="text-2xl font-bold text-center mb-4 text-green-400">Verify OTP</h2>
                    <Inputbox onChange={(e) => setEmail(e.target.value)} placeholder="Email" name="Email" className="mb-4 text-black" />
                    <br />
                    <Button 
                    disable={loading}
                    buttonName={loading?"sending OTP ..": "Send OTP"} onClick={generateOTP} className="w-full bg-green-700 hover:bg-green-600 transition-all text-white" />

                    <Inputbox onChange={(e) => setEnteredOtp(e.target.value)} placeholder="Enter OTP" name="OTP" className="mt-4 mb-4 text-black" />
                    <br />
                    <Button 
                    disable={verifyLoading}
                    buttonName={verifyLoading?"verifying OTP":"verify OTP"} onClick={verifyOTP} className="w-full bg-green-700 hover:bg-green-600 transition-all text-white" />
            </div>
         

        </div>
    );
};
