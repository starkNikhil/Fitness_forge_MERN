# Fitness Forge Backend Documentation

## Overview
This is the backend API for the Fitness Forge MERN application, built with Node.js, Express, and MongoDB. It handles user authentication (registration, login, logout) and other fitness-related operations.

---

## Authentication System

### 1. User Registration

#### Endpoint
```
POST /api/auth/register
```

#### File Location
- **Controller**: `controllers/authController.js`
- **Route**: `routes/authRoutes.js`
- **Model**: `models/User.js`

#### Request Body
```json
{
  "name": "string",
  "email": "string",
  "password": "string",
  "confirmPassword": "string"
}
```

#### Response
```json
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "_id": "string",
    "name": "string",
    "email": "string"
  }
}
```

#### Working
1. User submits registration form with name, email, password, and confirm password
2. Backend validates input fields
3. Checks if user already exists with the email
4. Hashes password using bcrypt
5. Creates new user document in MongoDB
6. Returns success message with user data

#### Key Features
- Password hashing for security
- Email validation
- Duplicate email prevention
- Input sanitization

---

### 2. User Login

#### Endpoint
```
POST /api/auth/login
```

#### File Location
- **Controller**: `controllers/authController.js`
- **Route**: `routes/authRoutes.js`
- **Model**: `models/User.js`

#### Request Body
```json
{
  "email": "string",
  "password": "string"
}
```

#### Response
```json
{
  "success": true,
  "message": "Login successful",
  "token": "JWT_TOKEN",
  "user": {
    "_id": "string",
    "name": "string",
    "email": "string"
  }
}
```

#### Working
1. User submits email and password
2. Backend finds user by email in database
3. Compares password with stored hashed password using bcrypt
4. If credentials match, generates JWT token
5. Returns token and user information
6. Token is stored in frontend (localStorage/sessionStorage/cookies)

#### Key Features
- JWT token generation for session management
- Password verification with bcrypt
- Token expiration settings
- Error handling for invalid credentials

---

### 3. User Logout

#### Endpoint
```
POST /api/auth/logout
```

#### File Location
- **Controller**: `controllers/authController.js`
- **Route**: `routes/authRoutes.js`

#### Request Headers
```
Authorization: Bearer JWT_TOKEN
```

#### Response
```json
{
  "success": true,
  "message": "Logout successful"
}
```

#### Working
1. User sends logout request with JWT token
2. Backend validates the token
3. Clears the session/token from backend (optional, depends on implementation)
4. Frontend removes token from storage
5. User is redirected to login page

#### Key Features
- Token validation
- Session termination
- Redirect to authentication page

---

## File Structure

```
backend/
├── controllers/
│   └── authController.js          (Authentication logic)
├── routes/
│   └── authRoutes.js              (Route definitions)
├── models/
│   └── User.js                    (User schema and model)
├── middleware/
│   └── authMiddleware.js          (JWT verification)
├── config/
│   └── database.js                (MongoDB connection)
├── .env                           (Environment variables)
├── server.js                      (Main server file)
└── package.json                   (Dependencies)
```

---

## Environment Variables (.env)

```
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/fitness-forge
JWT_SECRET=your_secret_key_here
JWT_EXPIRE=7d
NODE_ENV=development
```

---

## Dependencies

```json
{
  "express": "Web framework",
  "mongoose": "MongoDB ODM",
  "bcryptjs": "Password hashing",
  "jsonwebtoken": "JWT authentication",
  "dotenv": "Environment variables",
  "cors": "Cross-origin requests",
  "validator": "Input validation"
}
```

---

## Error Handling

Common error responses:

- **400 Bad Request**: Invalid input or missing fields
- **401 Unauthorized**: Invalid credentials or token
- **403 Forbidden**: Access denied
- **409 Conflict**: User already exists
- **500 Internal Server Error**: Server-side issues

---

## Security Features

1. **Password Hashing**: bcryptjs with salt rounds
2. **JWT Tokens**: Secure token-based authentication
3. **CORS**: Restricted cross-origin access
4. **Environment Variables**: Sensitive data protection
5. **Input Validation**: Sanitization of user inputs
6. **Error Messages**: Generic responses to prevent user enumeration

---

## Testing Endpoints

### Register User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "confirmPassword": "password123"
  }'
```

### Login User
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Logout User
```bash
curl -X POST http://localhost:5000/api/auth/logout \
  -H "Authorization: Bearer JWT_TOKEN"
```

---

## Getting Started

1. Install dependencies: `npm install`
2. Configure `.env` file
3. Connect to MongoDB
4. Run server: `npm start`
5. Test authentication endpoints
