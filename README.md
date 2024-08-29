
# Job Application Portal

This project is a simple web application built using the MERN stack (MongoDB, Express, React with Vite, and Node.js). The application allows job seekers to sign up by filling out their personal information and uploading their resume. The application securely stores user information and resumes in a MongoDB database.








## Table of Contents



- Architecture
- Features
- Installation
- Usage
- Project Structure
- API Endpoints
- Technologies Used
- Screenshots
- Contributing
- License
## Architecture

The application is built using the following architecture:

- Frontend: Developed using React with Vite, providing a fast and responsive user interface. It consists of a home page and a signup form for job seekers.
- Backend: Implemented using Express and Node.js, managing the server-side logic, handling API requests, and processing file uploads (resumes).
- Database: MongoDB is used for storing user information securely, including their personal details and the path to their uploaded resume.



## High-Level Flow
- User Interaction:

    - Users visit the homepage and navigate to the signup form.
Users fill out the form with their name, email, phone number, and upload their resume.
- Form Submission:

    - The form data, including the resume file, is sent to the backend via a POST request.
- Backend Processing:

    - The backend stores the user information in the MongoDB database.
The resume file is uploaded to the server and saved in the uploads directory.
- Confirmation:

    - Upon successful registration, the user receives a confirmation message.
## Installation


Backend Setup
- Clone the repository:
```bash
 git clone https://github.com/your-username/job-application-portal.git
cd job-application-portal/job-app-backend
```
- Install dependencies:
```bash
npm install
```

- Set up environment variables:

    - Create a .env file in the job-app-backend directory.
    - Add your MongoDB connection string and server port
```bash
MONGO_URI=your_mongodb_connection_string
PORT=5000
```
- Start the backend server:
```bash
node server.js
```

Frontend Setup
- Navigate to the frontend directory::
```bash
cd ../job-app-frontend

```
- Install dependencies:
```bash
npm install
```

- Start the development server:
```bash
npm run dev
```
- Open your browser and go to http://localhost:5173/

## Usage

- Visit the homepage and click on "Sign Up" to go to the signup form.
- Fill in your personal details and upload your resume.
- Click "Submit" to register your information.
## Installation


Backend Setup
- Clone the repository:
```bash
 git clone https://github.com/your-username/job-application-portal.git
cd job-application-portal/job-app-backend
```
- Install dependencies:
```bash
npm install
```

- Set up environment variables:

    - Create a .env file in the job-app-backend directory.
    - Add your MongoDB connection string and server port
```bash
MONGO_URI=your_mongodb_connection_string
PORT=5000
```
- Start the backend server:
```bash
node server.js
```

Frontend Setup
- Navigate to the frontend directory::
```bash
cd ../job-app-frontend

```
- Install dependencies:
```bash
npm install
```

- Start the development server:
```bash
npm run dev
```
- Open your browser and go to http://localhost:5173/

## Usage

- Visit the homepage and click on "Sign Up" to go to the signup form.
- Fill in your personal details and upload your resume.
- Click "Submit" to register your information.

## Project Structure

```bash
job-application-portal/
│
├── job-app-backend/
│   ├── .env
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── uploads/
│   ├── app.js
│   └── server.js
│
└── job-app-frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   └── SignupForm.jsx
    │   ├── pages/
    │   │   ├── HomePage.jsx
    │   │   └── SignupPage.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    └── vite.config.js
```
## API Reference

```http
POST /api/users/signup
```
- Description: Registers a new user with their  personal information and resume.
    - Request Body:
        - name: User's full name (string).
        - email: User's email address (string).
        - phone: User's phone number (string).
        - resume: Uploaded resume file (file).
    - Response:
        - 201 Created: User registered successfully.
        - 500 Internal Server Error: Error occurred during registration.




## Tech Stack

- **Frontend**: React, Vite, Axios, React Router DOM
- **Backend**: Node.js, Express, Multer, Mongoose
- **Database**: MongoDB
- **Styling**: Basic CSS with a focus on responsiveness


## Screenshots

![App Screenshot](
# Job Application Portal

This project is a simple web application built using the MERN stack (MongoDB, Express, React with Vite, and Node.js). The application allows job seekers to sign up by filling out their personal information and uploading their resume. The application securely stores user information and resumes in a MongoDB database.








## Table of Contents



- Architecture
- Features
- Installation
- Usage
- Project Structure
- API Endpoints
- Technologies Used
- Screenshots
- Contributing
- License
## Architecture

The application is built using the following architecture:

- Frontend: Developed using React with Vite, providing a fast and responsive user interface. It consists of a home page and a signup form for job seekers.
- Backend: Implemented using Express and Node.js, managing the server-side logic, handling API requests, and processing file uploads (resumes).
- Database: MongoDB is used for storing user information securely, including their personal details and the path to their uploaded resume.



## High-Level Flow
- User Interaction:

    - Users visit the homepage and navigate to the signup form.
Users fill out the form with their name, email, phone number, and upload their resume.
- Form Submission:

    - The form data, including the resume file, is sent to the backend via a POST request.
- Backend Processing:

    - The backend stores the user information in the MongoDB database.
The resume file is uploaded to the server and saved in the uploads directory.
- Confirmation:

    - Upon successful registration, the user receives a confirmation message.
## Installation


Backend Setup
- Clone the repository:
```bash
 git clone https://github.com/your-username/job-application-portal.git
cd job-application-portal/job-app-backend
```
- Install dependencies:
```bash
npm install
```

- Set up environment variables:

    - Create a .env file in the job-app-backend directory.
    - Add your MongoDB connection string and server port
```bash
MONGO_URI=your_mongodb_connection_string
PORT=5000
```
- Start the backend server:
```bash
node server.js
```

Frontend Setup
- Navigate to the frontend directory::
```bash
cd ../job-app-frontend

```
- Install dependencies:
```bash
npm install
```

- Start the development server:
```bash
npm run dev
```
- Open your browser and go to http://localhost:5173/

## Usage

- Visit the homepage and click on "Sign Up" to go to the signup form.
- Fill in your personal details and upload your resume.
- Click "Submit" to register your information.
## Installation


Backend Setup
- Clone the repository:
```bash
 git clone https://github.com/your-username/job-application-portal.git
cd job-application-portal/job-app-backend
```
- Install dependencies:
```bash
npm install
```

- Set up environment variables:

    - Create a .env file in the job-app-backend directory.
    - Add your MongoDB connection string and server port
```bash
MONGO_URI=your_mongodb_connection_string
PORT=5000
```
- Start the backend server:
```bash
node server.js
```

Frontend Setup
- Navigate to the frontend directory::
```bash
cd ../job-app-frontend

```
- Install dependencies:
```bash
npm install
```

- Start the development server:
```bash
npm run dev
```
- Open your browser and go to http://localhost:5173/

## Usage

- Visit the homepage and click on "Sign Up" to go to the signup form.
- Fill in your personal details and upload your resume.
- Click "Submit" to register your information.

## Project Structure

```bash
job-application-portal/
│
├── job-app-backend/
│   ├── .env
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── uploads/
│   ├── app.js
│   └── server.js
│
└── job-app-frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   └── SignupForm.jsx
    │   ├── pages/
    │   │   ├── HomePage.jsx
    │   │   └── SignupPage.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    └── vite.config.js
```
## API Reference

```http
POST /api/users/signup
```
- Description: Registers a new user with their  personal information and resume.
    - Request Body:
        - name: User's full name (string).
        - email: User's email address (string).
        - phone: User's phone number (string).
        - resume: Uploaded resume file (file).
    - Response:
        - 201 Created: User registered successfully.
        - 500 Internal Server Error: Error occurred during registration.




## Tech Stack

- **Frontend**: React, Vite, Axios, React Router DOM
- **Backend**: Node.js, Express, Multer, Mongoose
- **Database**: MongoDB
- **Styling**: Basic CSS with a focus on responsiveness


## Screenshots

![App Screenshot]()
file:///C:/Users/DELL/OneDrive/Pictures/Screenshots/Screenshot%202024-08-29%20234143.png)

![App Screenshot]()
(file:///C:/Users/DELL/OneDrive/Pictures/Screenshots/Screenshot%202024-08-29%20235041.png)


