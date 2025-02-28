const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');

app.use(cors());
app.use(express.json());
// console.log(process.env.GMAIL_PASS);

// Configure email transporter (using Gmail for free)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_PASS, // App-specific password (see step 2)
    },
});
app.post("/sendOTP",(req,res)=>{
    const {email,otp} = req.body;
    // console.log(email);
    // console.log(otp);

    const mailOption = {
        from: process.env.GMAIL_USER,
        to: email,
        subject: "OTP for verification",
        text: `your OTP is ${otp}`,
    }
    transporter.sendMail(mailOption, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ success: false, error });
        } else {
            console.log('Email sent:', info.response);
            res.status(200).json({ success: true });
        }
    });

})

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})