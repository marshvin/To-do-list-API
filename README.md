# To-Do List REST API

A simple REST API for managing a to-do list using Node.js, Express, and MongoDB.

## Features

- Create, read, update, and delete to-do items
- MongoDB database integration
- Express.js backend
- RESTful API endpoints
- Environment variable configuration

## Prerequisites

- Node.js installed on your machine
- MongoDB database (local or Atlas)
- Basic understanding of REST APIs

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/marshvin/To-do-list-API.git
   cd todo-list-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a .env file in the root directory:
   ```bash
   MONGO_URI=your-mongodb-uri
   PORT=3000
   ```

4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

Base URL: `/api/todos`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /        | Get all to-dos |
| POST   | /        | Create a new to-do |
| GET    | /:id     | Get a specific to-do |
| PUT    | /:id     | Update a to-do |
| DELETE | /:id     | Delete a to-do |

## API Usage Examples

### Get All To-Dos
```bash
GET /api/todos
```

Response:
```json
[
  {
    "_id": "60f1a2b3c4d5e6f7g8h9i0j1",
    "title": "Complete project",
    "description": "Finish the REST API project",
    "completed": false,
    "createdAt": "2023-07-15T10:00:00.000Z",
    "updatedAt": "2023-07-15T10:00:00.000Z"
  }
]
```

### Create a To-Do
```bash
POST /api/todos
Content-Type: application/json

{
  "title": "New task",
  "description": "Description of the task",
  "completed": false
}
```

Response:
```json
{
  "_id": "60f1a2b3c4d5e6f7g8h9i0j2",
  "title": "New task",
  "description": "Description of the task",
  "completed": false,
  "createdAt": "2023-07-15T11:00:00.000Z",
  "updatedAt": "2023-07-15T11:00:00.000Z"
}
```

## Error Handling

The API returns appropriate HTTP status codes:

- 200: Success
- 201: Created
- 400: Bad Request
- 404: Not Found
- 500: Internal Server Error

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Marvin - [@marshvin](https://github.com/marshvin)

Project Link: [https://github.com/marshvin/To-do-list-API](https://github.com/marshvin/To-do-list-API)