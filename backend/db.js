//  we make schema for out database

const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect(`${process.env.MONGO_URI}`)    

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

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;