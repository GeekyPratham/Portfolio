#  My Portfolio Website

This is a full-stack, responsive portfolio website built to showcase my skills, experiences, and projects. It serves as my online resume and contact platform.

##  Live Demo

https://portfolio-frontend-81jv.onrender.com

##  Tech Stack

**Frontend**: React  
**Backend**: Node.js, Express.js  
**Database**: MongoDB  
**Image Hosting**: Cloudinary  
**Email Services**: Nodemailer  
**Other Libraries**: Mongoose, dotenv, etc.

##  Features

###  Home Page
- A global header with navigation: Home, Work, Resume, Hire Me.
- Profile image and personal description.
- Statistic boxes showing:
  - Total Projects Completed
  - Clients Served
  - Years of Experience
  - Known Tech Stacks

###  Resume Page
Tabbed navigation includes:
- **Experience**: Displays group projects and collaboration experiences.
- **Education**: Academic background and qualifications.
- **Courses**: Courses and certifications completed.
- **Skills**: Technical skills and tech stacks.
- **About Me**: A detailed self-introduction.

###  Work / Projects Page
- Each project is displayed with:
  - Description on the left
  - Prototype image on the right
- Navigation buttons to view previous and next projects
- **Admin Upload Feature**:
  - Email + OTP verification (restricted to admin email)
  - Upload form includes: Project name, description, GitHub link, live link, image, tech stack
  - Uploaded data is saved to MongoDB and instantly rendered on the site

###  Hire Me Page
- Contact form for visitors
- On submission, sends an email directly to my predefined address

###  Responsiveness
- Fully responsive design for mobile, tablet, and desktop

##   Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/GeekyPratham/Portfolio.git
   cd your-portfolio

2. Install dependencies:
   npm install
   cd frontend && npm install

3. Set up environment variables in .env files for:
    MongoDB URI
    Admin email and password

4. Start the backend and frontend:
    node index.js