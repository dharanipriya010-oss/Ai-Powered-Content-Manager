 🤖 AI Powered Content Manager (AI CMS)

An AI Powered Content Manager built using React.js that allows users to create, manage, search, edit, delete, and export AI-generated content.

 🚀 Features

 👤 User Features

- 🏠 Attractive Home Page
- 🔐 Login Page
- 📝 Register Page
- ✍️ Create New Posts
- 🤖 AI Content Generation
- 📊 Dashboard Analytics
- 🔍 Search Posts
- ✏️ Edit Posts
- 🗑️ Delete Posts
- 📄 Export Posts to PDF
- 🌙 Dark Mode
- 📱 Responsive Design

 🛠️ Technologies Used

 Frontend

- React.js
- React Router DOM
- JavaScript
- CSS3

 Libraries

- @google/generative-ai
- jspdf

Storage

- Browser Local Storage

⚙️ Installation

Clone Repository

git clone <repository-url>

 Open Project

    cd AI-CMS

Install Dependencies

  npm install

  Install Required Packages:
 
  npm install react-router-dom

  npm install @google/generative-ai

npm install jspdf


 ▶️ Run Project

   npm run dev

Open:

  http://localhost:5173

 🤖 AI Integration

1. Create Gemini API Key

2. Add API Key inside:

src/services/aiService.js

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("YOUR_API_KEY");

📄 PDF Export

Dashboard supports exporting all posts as a PDF report.

Generated file:

AI-CMS-Report.pdf

 🌙 Dark Mode

Users can switch between:

- Light Mode
- Dark Mode

 📸 Screens

- Home Page
- Login
- Register
- Create Post
- Dashboard
- PDF Export

 👨‍💻 Author

 DHARANI PRIYA 
 AI Powered Content Manager Project
 Built using React.js
