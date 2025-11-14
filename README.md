# QuickResolve

A full-stack web application for efficient complaint management and resolution. Users can register, login, submit complaints, and track their status. Administrators can manage and resolve complaints through a dedicated dashboard.

## Features

- User registration and authentication
- Complaint submission and tracking
- Admin panel for complaint management
- Responsive React frontend
- Secure backend with JWT authentication
- MongoDB database for data storage

## Tech Stack

### Frontend
- React 19
- React Router DOM
- Axios for API calls
- CSS for styling

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- CORS for cross-origin requests

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/GhulamMustafaNohrio/QuickResolve-PITP-II-final-projet-.git
   cd QuickResolve-PITP-II-final-projet-
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd ../frontend
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the `backend` directory
   - Add the following variables:
     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     PORT=5000
     ```

## Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```
   The backend will run on http://localhost:5000

2. Start the frontend:
   ```
   cd frontend
   npm start
   ```
   The frontend will run on http://localhost:3000

## Usage

- Register a new account or login with existing credentials
- Submit complaints through the complaint form
- View complaint status in the dashboard
- Administrators can access the admin panel to manage complaints

## Project Structure

```
QuickResolve/
├── backend/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── README.md
├── .gitignore
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit your changes
5. Push to the branch
6. Open a Pull Request

## License

This project is licensed under the ISC License.