# Bookstore Express API

[![Node.js](https://img.shields.io/badge/Node.js-API-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-REST%20API-black)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-brightgreen)](https://mongoosejs.com/)
[![Swagger](https://img.shields.io/badge/Swagger-API%20Docs-85EA2D)](https://swagger.io/)

RESTful Bookstore API built with Express.js, MongoDB, and Mongoose, featuring complete CRUD operations and validation.

This project provides a clean backend structure for managing books, including API routes, controllers, middleware, MongoDB connection configuration, Swagger documentation, and automated endpoint tests.

## Repository

GitHub repository:

```text
https://github.com/krif014/Bookstore-express-api
```

## Features

- Create a new book
- Get all books
- Get a single book by id
- Update a book by id
- Delete a book by id
- Validate required book fields
- Return `404` when a book is not found
- MongoDB connection with Mongoose
- Swagger UI API documentation
- Automated endpoint tests
- Development server with Nodemon

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Swagger UI Express
- Nodemon
- Supertest
- Node test runner

## Project Structure

```text
src/
  app.js
  server.js
  config/
    db.js
    swagger.js
  controllers/
    bookController.js
  middleware/
    errorMiddleware.js
    validateObjectId.js
  models/
    bookModel.js
  routes/
    bookRoutes.js
tests/
  bookRoutes.test.js
images/
  .gitkeep
```

## Getting Started

### 1. Clone The Repository

```bash
git clone https://github.com/krif014/Bookstore-express-api.git
cd Bookstore-express-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root if you want to use a custom MongoDB connection string:

```env
MONGO_URI=mongodb://127.0.0.1:27017/bookstore
```

If no `MONGO_URI` is provided, the app uses:

```text
mongodb://127.0.0.1:27017/bookstore
```

### 4. Run MongoDB

Make sure MongoDB is running locally, or use a cloud MongoDB connection string in `.env`.

### 5. Start The Server

Production-style start:

```bash
npm start
```

Development start with Nodemon:

```bash
npm run dev
```

The API runs on:

```text
http://localhost:3000
```

## Swagger Documentation

Open Swagger UI in your browser:

```text
http://localhost:3000/api-docs/
```

Raw OpenAPI JSON:

```text
http://localhost:3000/api-docs.json
```

## Swagger UI Preview

Add your Swagger UI screenshot inside the `images` folder using this file name:

```text
images/swagger-ui-preview.png
```

Then the preview will appear here:

![Swagger UI Preview](./images/swagger-ui-preview.png)

## API Endpoints

Base URL:

```text
http://localhost:3000
```

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/api/books` | Create a new book |
| `GET` | `/api/books` | Get all books |
| `GET` | `/api/books/:id` | Get one book by id |
| `PUT` | `/api/books/:id` | Update a book by id |
| `DELETE` | `/api/books/:id` | Delete a book by id |

## Request Samples

### Create A Book

```http
POST /api/books
Content-Type: application/json
```

```json
{
  "title": "Things Fall Apart",
  "author": "Chinua Achebe",
  "price": 12.5
}
```

### Update A Book

```http
PUT /api/books/:id
Content-Type: application/json
```

```json
{
  "title": "Things Fall Apart",
  "author": "Chinua Achebe",
  "price": 20
}
```

## Book Model

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | `String` | Yes | Book title |
| `author` | `String` | Yes | Book author |
| `price` | `Number` | Yes | Book price |

## Testing

Run all tests:

```bash
npm test
```

The test suite checks:

- Book creation
- Fetching all books
- Fetching one book by id
- Updating a book
- Deleting a book
- Required field validation
- `404` responses for invalid or missing ids
- Swagger documentation endpoint

## How To Fork And Contribute

1. Fork the repository on GitHub.
2. Clone your fork:

```bash
git clone https://github.com/YOUR_USERNAME/Bookstore-express-api.git
```

3. Create a new branch:

```bash
git checkout -b feature/your-feature-name
```

4. Make your changes and run tests:

```bash
npm test
```

5. Commit your changes:

```bash
git commit -m "Add your feature"
```

6. Push your branch:

```bash
git push origin feature/your-feature-name
```

7. Open a pull request to the main repository.

## Author

Built with love by **UWIMANA Krif**.

GitHub: [krif014](https://github.com/krif014)

## License

Add a license file to define how others can use, modify, and distribute this project.
