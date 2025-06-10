This full-stack web application allows users to:
✔ Summarize text using AI (Facebook's BART model)
✔ Upload PowerPoint (PPTX) files and automatically generate concise summaries
✔ View clean, formatted results in a user-friendly interface

Built with Python (Flask) for the backend and HTML/CSS/JavaScript for the frontend, this project leverages Hugging Face's Transformers for AI-powered summarization.

 Key Features
1. Text Summarization
Users can paste any long text into a text box

The AI model generates a short, coherent summary

2. PPT File Processing
Users can upload .pptx files

The app extracts text from slides, tables, and text boxes

Generates a summary of the entire presentation

3. User-Friendly Interface
Clean, responsive design

Real-time status updates (uploading, processing, success/error messages)

Works on both desktop and mobile

4. Backend Features
Flask for handling HTTP requests

python-pptx for extracting text from PowerPoint files

Hugging Face Transformers (BART model) for summarization

Temporary file upload handling with automatic cleanup

Technical Stack
Component	Technology Used
Backend	Python (Flask)
AI Model	Facebook's BART (via Hugging Face Transformers)
PPT Processing	python-pptx library
Frontend	HTML5, CSS3, JavaScript
Styling	Custom CSS (no frameworks)
How It Works
User Uploads a PPT or Pastes Text

If uploading, the file is temporarily stored in ./uploads/

Backend Processes the Input

Extracts text from PPT slides (if applicable)

Feeds the text into the BART summarization model

AI Generates a Summary

The model condenses the content while retaining key points

Result Displayed to User

The summary appears in a clean, readable format

