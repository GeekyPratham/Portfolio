import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Inputbox from "../components/Inputbox";
import { useState } from "react";

export const Verify = () => {
    const [generatedOtp, setGeneratedOtp] = useState(null);
    const [email, setEmail] = useState("");
    const [enteredOtp, setEnteredOtp] = useState("");
    const navigate = useNavigate();

    const generateOTP = async () => {
        const num = Math.floor(100000 + Math.random() * 900000);
        setGeneratedOtp(num);

        try {
            const response = await fetch("http://localhost:5000/sendOTP", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: email, otp: num })
            });
            const data = await response.json();
            if (data.success) {
                alert("OTP sent successfully");
            } else {
                alert("Failed to send OTP");
            }
        } catch (e) {
            console.error("Error sending OTP:", e);
        }
    };

    const verifyOTP = () => {
        if (!generatedOtp) {
            alert("Please generate an OTP first");
            return;
        }
        if (parseInt(enteredOtp) === generatedOtp) {
            alert("OTP Verified");
            navigate('/Addproject');
        } else {
            alert("OTP Mismatch");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-black text-green-400 p-6">
            <div className="bg-gray-900 p-6 rounded-lg shadow-xl w-full max-w-md border border-green-500">
                <h2 className="text-2xl font-bold text-center mb-4 text-green-400">Verify OTP</h2>
                <Inputbox onChange={(e) => setEmail(e.target.value)} placeholder="Email" name="Email" className="mb-4 text-black" />
                <Button buttonName="Send OTP" onClick={generateOTP} className="w-full bg-green-700 hover:bg-green-600 transition-all text-white" />
                <Inputbox onChange={(e) => setEnteredOtp(e.target.value)} placeholder="Enter OTP" name="OTP" className="mt-4 mb-4 text-black" />
                <Button buttonName="Verify OTP" onClick={verifyOTP} className="w-full bg-green-700 hover:bg-green-600 transition-all text-white" />
            </div>
        </div>
    );
};
