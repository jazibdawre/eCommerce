export const ProductSchema = `
    type Product {
        _id: ID!
        name: String!,
        price: Float!,
        user: User!,
        image: String!,
        brand: String!,
        category: ID!,
        countInStock: Int!,
        numReviews: Int,
        description: String!
    }

    type ProductResponse {
        _id: ID!
        name: String!,
        price: Float!,
        user: User!,
        image: String!,
        brand: ID!,
        category: ID!,
        countInStock: Int!,
        numReviews: Int,
        description: String!
    }

    input ProductInput {
        name: String!,
        price: Float!,
        user: ID!,
        image: String!,
        brand: String!,
        category: String!,
        countInStock: Int!,
        numReviews: Int,
        description: String!
    }

    input updateProduct {
        name: String,
        price: Float,
        image: String,
        brand: String,
        category: String,
        countInStock: Int,
        description: String,
    }
`;
