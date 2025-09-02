//  we make schema for out database

const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect(`${process.env.MONGO_URI}`)    
console.log("after connecting the mongodb database")
const projectSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    techStack:{
        type: [String],
        default: []
    },
    githubLink:{
        type: String,
        
    },
    demoLink:{
        type: String,
        
    },
    image:{
        type: [String],
        default: []
    }
})
const emailVerificationSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    otp:{
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 300 // 5 minutes auto delete
    } 

})
const Project = mongoose.model('Project', projectSchema);
const EmailVerification = mongoose.model('EmailVerification',emailVerificationSchema)

module.exports = {
  Project,
  EmailVerification
};
