# e-commerce-product-listing

This project is a basic GraphQL server built using Apollo Server. It provides product-related data through a GraphQL API with predefined mock data. The server includes two main queries: fetching all products and fetching a product by its `id`.

## Table of Contents

- [Project Overview](#project-overview)
- [GraphQL API](#graphql-api)
- [Tech Stack](#tech-stack)
- [Mock Data](#mock-data)
- [How to Run Locally](#how-to-run-locally)

## Project Overview

The project sets up a GraphQL server using Apollo Server with mocked data for a set of products. You can query for a list of products or get detailed information about a specific product by its `id`.

The mocked data is located in a separate file `data.js`. The server is configured to handle GraphQL requests and can be deployed using Vercel.

## GraphQL API

This project exposes the following GraphQL queries:

1. **Get all products**

   ```graphql
   query GetProducts {
     products {
       id
       title
       description
       category
       price
       stock
       brand
       reviews {
         rating
         comment
       }
     }
   }
   ```

2. **Get a product by id**

   ```graphql
   query GetProduct($id: ID!) {
   product(id: $id) {
   id
   title
   description
   price
   stock
   brand
   reviews {
     rating
     comment
   }
   }
   ```

## Tech Stack

- **Backend**: Apollo Server (GraphQL)
- **GraphQL**: Used to define schema and API
- **Mocked Data**: Stored in `data.js` file

### Dependencies

The project uses the following dependencies:

- `apollo-server`: Version `^3.13.0`
- `graphql`: Version `^16.9.0`

Refer to `package.json` for more details on dependencies.

## Mock Data

The data is mocked and defined in a separate file `data.js`. The data includes information about a set of products, including their titles, descriptions, categories, pricing, stock availability, and reviews.

## How to Run Locally

To run this project locally, follow these steps:

### Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) installed on your machine.
- Install all dependencies using `npm`.

### Steps

1.  **Clone the repository:**
    `git clone <your-repo-url>
cd <your-repo-directory>`

2.  **Install dependencies:**
    `npm install`

3.  **Run the GraphQL server:**
    `node index.js`

4.  The server will start, and you will see the following message in the console:
    `Server listening at http://localhost:4000/`
