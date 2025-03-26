const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');
const Project = require('./db');


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

app.post("/addproject",async(req,res)=>{
    // console.log(req.body);

    const body = req.body;
    const title = await Project.findOne({
        title : body.title
    })
    // if this title already exist in database
    console.log(title);
    if(title){
        console.log("this title already exist");
        return res.status(411).json({
            msg:"this title already exist"
        })
    }

    // if project not exist then create 

    console.log("creating new project");

    const dbNewProject = await Project.create({
        title: body.title,
        description: body.description,
        techStack: body.techUsed,
        githubLink: body.githubLink,
        demoLink: body.demonstrationLink,
        image: body.allImage
    })
     // Save to database
    await dbNewProject.save();
    console.log("New project created:", dbNewProject);
 

    return res.status(200).json({
        msg:"Data received"
    })
})

// sending all the list of project to frontend;
app.get("/getProject",async (req,res)=>{
    const projects = await Project.find();
    console.log("sending project to frontend");
    console.log(projects);
    console.log("sending project to frontend");
    res.json({
        project: projects.map(proj=>({
            title: proj.title,
            description: proj.description,
            techStack: proj.techStack,
            githubLink: proj.githubLink,
            demoLink: proj.demoLink,
            image: proj.image
        }))
    })
})


app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})