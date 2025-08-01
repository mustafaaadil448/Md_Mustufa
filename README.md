# Role_Based_Web_Application

A MERN stack web application with role-based authentication and authorization.

## Features

- User registration and login
- Role-based access (admin, student)
- Admin can manage users (create, delete, list)
- Users can change their password
- JWT authentication

## API Endpoints

All endpoints are prefixed with `/api/v1/user`.

### Public Endpoints

#### POST `/register`
Register a new user (student role by default).

**Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "Password@123"
}
```

#### POST `/login`
Login as a user.

**Body:**
```json
{
  "email": "john@example.com",
  "password": "Password@123",
  "role": "student"
}
```

#### POST `/logout`
Logout the current user.

---

### Protected Endpoints (require JWT token)

#### POST `/change-password`
Change the password for the logged-in user.

**Headers:**  
`Authorization: Bearer <token>`

**Body:**
```json
{
  "oldPassword": "OldPassword@123",
  "newPassword": "NewPassword@123"
}
```

---

### Admin Endpoints (require admin role)

#### GET `/`
Get all users (admin only).

**Headers:**  
`Authorization: Bearer <token>`

#### DELETE `/:userId`
Delete a user by ID (admin only).

**Headers:**  
`Authorization: Bearer <token>`

#### POST `/admin/create`
Create a new user as admin.

**Headers:**  
`Authorization: Bearer <token>`

**Body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "Password@123",
  "role": "student"
}
```

---

## Getting Started

1. Clone the repository.
2. Install dependencies in both `frontend` and `server` folders.
3. Set up your `.env` file in the `server` folder with `MONGO_URI` and `JWT_SECRET`.
4. Run the backend:  
   ```sh
   cd server
   npm run dev
   ```
5. Run the frontend:  
   ```sh
   cd frontend
   npm run dev
   ```

---

## License

MIT