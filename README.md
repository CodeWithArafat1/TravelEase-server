<h1 align="center">TravelEase – Backend API</h1>

<p align="center">
  This is the server-side API for the TravelEase application. It is built with Node.js, Express.js, and MongoDB. It provides a RESTful API to handle all business logic, data storage, and authentication-related tasks for the client-side application.
</p>

<p align="center">
  <strong>📡 Live API Base URL: https://assignment-10-server-travelease.vercel.app/api/vehicles</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
  <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel">
</p>

---

### 🚀 Core Features

* **RESTful API:** Provides clean and predictable API endpoints for all application resources.
* **Vehicle Management (CRUD):** Handles creating, reading, updating, and deleting vehicle listings.
* **Booking Management:** Allows users to create bookings and view their personal booking history. Includes logic for deleting/canceling bookings.
* **Wishlist Management:** Allows users to add, view, and remove vehicles from their personal wishlist.
* **Data Aggregation:** Provides specialized endpoints, such as `/api/latestVehicles`, to serve sorted and limited data to the client.

---

### 🛠️ Technology Stack

* **Node.js:** Server-side runtime environment.
* **Express.js:** Web framework for building the API routes.
* **MongoDB:** NoSQL database used for storing all application data (vehicles, users, bookings).
* **mongodb (Node.js Driver):** For connecting to and interacting with the MongoDB Atlas database.
* **CORS:** Middleware to enable Cross-Origin Resource Sharing for the client application.
* **Dotenv:** For managing environment variables (database credentials, port).

---

### Endpoints

Here are the main API routes established in this server:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/` | Test route to check if the server is running. |
| `POST` | `/api/vehicles` | Adds a new vehicle to the database. |
| `GET` | `/api/vehicles` | Retrieves all vehicles. |
| `GET` | `/api/vehicles/:id` | Retrieves a single vehicle by its ID. |
| `PATCH` | `/api/vehicles/:id` | Updates an existing vehicle's details. |
| `DELETE` | `/api/vehicles/:id` | Deletes a vehicle by its ID. |
| `GET` | `/api/latestVehicles` | Retrieves the 6 most recently added vehicles. |
| `GET` | `/api/myVehicles` | Retrieves all vehicles added by a specific user (requires email query). |
| `POST` | `/api/myBooking` | Creates a new booking for a user. |
| `GET` | `/api/myBooking` | Retrieves all bookings for a specific user (requires email query). |
| `DELETE` | `/api/myBooking/:id` | Deletes/cancels a booking by its ID. |
| `POST` | `/api/myWishlist` | Adds a vehicle to a user's wishlist. |
| `GET` | `/api/myWishlist` | Retrieves the full wishlist for a specific user (requires email query). |
| `DELETE` | `/api/myWishlist/:id` | Removes an item from the wishlist by its ID. |
| `GET` | `/api/checkBooking` | Checks if a user has already booked a specific vehicle. |
| `GET` | `/api/checkWishlist` | Checks if a user has already wishlisted a specific vehicle. |

---

### 🚀 How to Run Locally

```bash
# Clone the repository
git clone git@github.com:CodeWithArafat1/TravelEase-server.git

# Navigate into the directory
cd travelease-server

# Install npm packages
npm install

# Create a .env file and add your MongoDB URI and Port
# (These variables are based on your server/index.js file)
USER_NAME=your_mongodb_user
USER_PASSWORD=your_mongodb_password
PORT=3000

# Start the server
npm start