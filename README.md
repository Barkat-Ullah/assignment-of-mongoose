
# 📚 Book & Order Management Project

A simple project for managing books and orders, built with TypeScript, Node.js, Express, and Mongoose. It includes features to create, update, delete, and fetch books, as well as place orders and calculate total revenue.

---

## 🚀 Features

### 📖 Book Management:
- Create a book.
- Retrieve all books or a single book by ID.
- Update a book.
- Delete a book.

### 🛒 Order Management:
- Place an order for a book.
- View total revenue from orders.

### 📊 Revenue Calculation:
- Automatically calculate total revenue based on orders.

---

## 🎯 Technologies Used

- **TypeScript**: Strongly typed JavaScript.
- **Node.js**: Server runtime environment.
- **Express.js**: Web framework for building APIs.
- **Mongoose**: MongoDB object modeling for Node.js.
- **MongoDB**: NoSQL database for data storage.

---

## 📂 API Endpoints

### Book Routes

| Method | Endpoint                 | Description              |
|--------|--------------------------|--------------------|
| POST   | /api/products            | Create a new book.       |
| GET    | /api/products            | Get all books.           |
| GET    | /api/products/:productId | Get a single book by ID. |
| PUT    | /api/products/:productId | Update a book by ID.     |
| DELETE | /api/products/:productId | Delete a book by ID.     |

### Order Routes

| Method | Endpoint              | Description                      |
|--------|------------------------|----------------------------------|
| POST   | /api/orders         | Place an order for a book.       |
| GET    | /api/orders/revenue | Calculate and view total revenue.|

---



## ⚙️ Installation and Setup

Clone the project

```bash
  git clone : https://github.com/Barkat-Ullah/assignment-of-mongoose.git
```

Go to the project directory

```bash
  cd assignment-of-mongoose
```

Install dependencies

```bash
  npm install
```
###### 🌍 Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

- `DATABASE_URL: "Enter your database URL" `
- `PORT : 5000`

Start the server

```bash
  npm run start:dev
```



## 📚 Book Order Management

A Node.js application for managing book orders, built using TypeScript, Express, and MongoDB.

---

## 🛠️ Project Structure

```plaintext
Assignment-of-mongoose/
├── src/
│   ├── routes/                  # Route definitions
│   │   ├── book.routes.ts
│   │   ├── order.routes.ts
│   ├── controllers/             # Request handlers
│   │   ├── book.controller.ts
│   │   ├── order.controller.ts
│   ├── models/                  # Mongoose schemas and models
│   │   ├── book.model.ts
│   │   ├── order.model.ts
│   ├── interfaces/              # TypeScript interfaces
│   │   ├── book.interface.ts
│   │   ├── order.interface.ts             
│   ├── app.ts                   # Express app setup
│   └── server.ts                # Server entry point
├── .env.example                 # Example environment variables
├── package.json                 # Project metadata and dependencies
├── README.md                    # Project documentation
└── tsconfig.json                # TypeScript configuration
```

## 📋Sample API Request and Response
 Create a Book

Body :
```http
POST /api/products/create-product
Content-Type: application/json
```
```json
{
  "title": "Whispers of the Soul",
  "author": "Emily Carter",
  "price": 20,
  "category": "Science",
  "description": "A collection of heartfelt poems.",
  "quantity": 10
}
```
Response : 
```
{
  "success": true,
  "message": Book is created successfully
  "data": {
    "_id": "12345abcd",
    "title": "Whispers of the Soul",
    "author": "Emily Carter",
    "price": 20,
    "category": "Science",
    "description": "A collection of heartfelt poems.",
    "quantity": 10,
    "inStock": true,
    "createdAt": "2024-11-19T12:00:00.000Z",
     "updatedAt": "2024-11-19T12:00:00.000Z"
  }
}

```
## 📊 Example: Total Revenue
Request :
```
GET /api/orders/revenue
```
Response : 
```
{
  "success": true,
  "data": {
    "_id": null
    "totalRevenue": 150
  }
}
```
## video overview


 visit the demo for better experience this project "Book & Order Manageent 🎥: [Demo](https://drive.google.com/file/d/1H_Kg_2aB4zRINE5ATfdEAP_nBx8kqWGL/view?usp=sharing)





## 🌟 Contact  

**Author**: Barkat Ullah Rakib  
- **GitHub**: [@Barkat-ullah](https://github.com/Barkat-Ullah)  
- **Email**: [barkatullah585464@gmail.com](barkatullah585464@gmail.com)  






