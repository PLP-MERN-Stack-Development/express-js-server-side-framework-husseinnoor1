API


A sample RESTful API built with Express.js for managing products. This project demonstrates CRUD operations, middleware, validation, authentication using an API key, and error handling.


## Requirements
- Node.js v18+
- npm


## Setup
1. Clone the repository
2. Run `npm install`
3. Create a `.env` file based on `.env.example` and set `API_KEY` and optionally `PORT`.
4. Start the server: `npm start` (or `npm run dev` with nodemon)


The server listens on port `3000` by default.


## Authentication
All `/api` routes require an API key header `x-api-key` (or `?api_key=` query param). Set the key in `.env` as `API_KEY`.


## Endpoints


### Hello
`GET /` — returns `{ message: 'Hello World' }`


### Products
- `GET /api/products` — List products. Supports `category`, `page`, `limit` query params for filtering and pagination.
- `GET /api/products/:id` — Get a product by ID.
- `POST /api/products` — Create a product. Body must include `name`, `description`, `price`, `category`, `inStock`.
- `PUT /api/products/:id` — Update a product (same fields as POST).
- `DELETE /api/products/:id` — Delete a product.
- `GET /api/products/search?name=...` — Search products by name (case-insensitive).
- `GET /api/products/stats` — Get product counts grouped by category.


## Examples (curl)


Create product:


```bash
curl -X POST http://localhost:3000/api/products \
-H "Content-Type: application/json" \
-H "x-api-key: test-api-key" \
-d '{ "name":"New Item", "description":"desc", "price":10, "category":"Misc", "inStock":true }'
