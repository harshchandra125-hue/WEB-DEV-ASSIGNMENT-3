# Assignment 3: Inventory and Data Management System

## Aim
To build a RESTful backend using Node.js, Express.js and MongoDB (Mongoose) that manages a product catalogue: CRUD operations, stock adjustment, filtering, sorting, pagination and inventory reports using aggregation.

## Tools Used
Node.js, Express.js, MongoDB, Mongoose, dotenv, Postman (for testing)

## Steps to Run
1. `npm install`
2. Start MongoDB and set `PORT` and `MONGO_URI` in `.env`
3. `node server.js`
4. Test the APIs in Postman/Thunderclient at `http://localhost:5000/api/products`

---

## Output

### 1. Get All Products

![Get All Products](screenshots/1.png)

### 2. Create Product

![Create Product](screenshots/2.png)

### 3. Update Product

![Update Product](screenshots/3.png)

### 4. Delete Product

![Delete Product](screenshots/4.png)

### 5. Low-Stock Alert Report

![Low Stock Report](screenshots/5.png)

### 6. Category-wise Inventory Summary

![Category Summary](screenshots/6.png)

### 7. Stock Adjustment (Restock / Sale)

![Stock Adjustment](screenshots/7.png)

---

## Features Implemented
- Mongoose schema with field-level validation (required, unique, enum, min, default)
- Complete CRUD for products
- Filtering (`category`, `search`, `minPrice`, `maxPrice`), sorting (`sort=-price`) and pagination (`page`, `limit`)
- Safe stock increment and decrement using `$inc`
- Aggregation reports: low-stock and category summary
- Centralized error handling: validation error (400), invalid id (400), duplicate SKU (409), not found (404)
- Environment variables managed with dotenv

## Conclusion
The Inventory Management API was built and tested successfully. All endpoints work as expected, with proper validation, error handling and aggregation reports.
