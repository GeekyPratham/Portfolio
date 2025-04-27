const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');
const Project = require('./db');
const multer = require("multer");

// i am allowing one deployed domain to access my backend and one for local host

const allowedOrigins = [
    "https://portfolio-frontend-81jv.onrender.com",
    // "https://portfolio-pratham-rajs-projects-15fe237a.vercel.app",
    "https://portfolio-79cxfvvre-pratham-rajs-projects-15fe237a.vercel.app",
    "http://localhost:5173"
];
app.use(cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true
  }));
app.use(express.json());
// console.log(process.env.GMAIL_PASS);

// Configure email transporter (using Gmail for free)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_PASS, // App-specific password
    },
});
app.post("/sendOTP",async(req,res)=>{
    console.log("object");
    const {email,otp} = req.body;
    // console.log(email);
    // console.log(otp);
    console.log(req.body.email);
    const m = `${process.env.GMAIL_USER}`;
    console.log(m);
    if(email!== `${process.env.GMAIL_USER}`){
        return res.status(411).json({
            msg:"this is not the valid email"
        })
    }

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

// Multer setup for file uploads
// const upload = multer({ dest: "sendEmail/" }); // Files will go to /uploads folder


const upload = multer({ storage: multer.memoryStorage() });


// const fs = require("fs");
// const path = require("path");

app.post("/sendEmail", upload.array("Files"), async (req, res) => {
    // destructuring all the data(body) comes from frontend
    const {
        Purpose,
        Email,
        Github,
        Linkedin,
        Contact,
        Role,
        Description
    } = req.body;

    console.log("Form Data:");
    console.log("Purpose:", Purpose);
    console.log("Email:", Email);
    console.log("Github:", Github);
    console.log("Linkedin:", Linkedin);
    console.log("Contact:", Contact);
    console.log("Role:", Role);
    console.log("Description:", Description);

    console.log("Files:", req.files);

    // Prepare file attachments for the email
    // const attachments = req.files.map(file => ({
    //     filename: file.originalname,
    //     path: path.join(__dirname, file.path)
    // }));

    const attachments = req.files.map(file => ({
        filename: file.originalname,
        content: file.buffer
      }));

    // Create mail content
    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER, // Send to yourself
        subject: `New Submission: ${Purpose}`,
        text: `
        New Submission Received:
        Purpose: ${Purpose}
        Email: ${Email}
        Contact: ${Contact}
        Role: ${Role}
        Description: ${Description}
        Github: ${Github}
        Linkedin: ${Linkedin}
        `,
        attachments
    };

    try {
         transporter.sendMail(mailOptions);

        console.log(" Email sent successfully!");

        // Delete the uploaded files after email is sent (optional)
        // req.files.forEach(file => {
        //     fs.unlink(file.path, err => {
        //         if (err) console.error("Failed to delete file:", err);
        //     });
        // });

        return res.json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error(" Error sending email:", error);
        return res.status(500).json({ success: false, message: "Failed to send email." });
    }
});


app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})