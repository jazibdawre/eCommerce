import { buildSchema } from 'graphql';

export default buildSchema(`

    type User {
        _id: ID!
        name: String!
        phoneNo: Int!
        email: String!
        password: String!
        isAdmin: Boolean!
        token: String
    }

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
    
    type OrderItems {
        name: String!
        qty: Float!
        image: String!
        price: Float!
        product: Product!
    }

    type ShippingAddress {
        address: String!
        city: String!
        postalCode: String!
        country: String!
    }

    type PaymentResult {
        id: String!
        status: String!
        update_time: String!
        email_address: String!
    }

    type Order {
        _id:             ID!
        user:            User!
        orderItems:      [OrderItems!]!
        shippingAddress: ShippingAddress!
        paymentMethod:   String!
        paymentResult:   PaymentResult
        taxPrice:        Float!
        shippingPrice:   Float!
        totalPrice:      Float!
        isPaid:          Boolean!
        paidAt:          String
        isDelivered:     Boolean!
        deliveredAt:     String
    }
    
    type Question {
        _id: ID
        msg: String
        info: String
        level: String
        index: String
    }

    type Category {
        _id: ID!
        name: String!
    }
    
    type Response {
        msg: String!
    }

    input UserInput {
        name: String!
        phoneNo: Int!
        email: String!
        password: String!
        isAdmin: Boolean
    }

    input UpdateUserInput {
        name: String
        phoneNo: Int!
        email: String
        password: String
        isAdmin: Boolean
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
            
    input OrderItemsInput {
        name: String!
        qty: Float!
        image: String!
        price: Float!
        product: ID!
    }

    input ShippingAddressInput {
        address: String!
        city: String!
        postalCode: String!
        country: String!
    }

    input PaymentResultInput {
        id: String!
        status: String!
        update_time: String!
        email_address: String!
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
    
    input OrderInput {
        orderItems:      [OrderItemsInput!]!
        shippingAddress: ShippingAddressInput!
        paymentMethod:   String!
        paymentResult:   PaymentResultInput
        taxPrice:        Float!
        shippingPrice:   Float!
        totalPrice:      Float!
        isPaid:          Boolean!
        paidAt:          String
        isDelivered:     Boolean!
        deliveredAt:     String
    }

    input QuestionInput {
        msg: String
        info: String
        level: String
        index: String
    }

    type rootQuery {
        orders: [Order!]!
        myorders: [Order!]!
        orderById(orderId: ID!): Order!
        questions: [Question]
        question(level: String!, index: String!): Question
        categories: [Category]
        authUser(email: String!, password: String!): User!
        getUserProfile: User!
        getUsers: [User!]!
        getUserById(userId: ID!): User!
        getProduct(name: String!): [Product!]!
        getProductById(id: ID!): [Product!]!
        deleteProduct(id: ID!): Product!
        searchProduct(searchTerm: String!): [Product!]!
    }

    type rootMutation {
        createOrder(orderInput: OrderInput): Order!
        updateOrderToPaid(orderId: ID!, paymentResult: PaymentResultInput!): Order!
        updateOrderToDelivered(orderId: ID!): Order!
        editQuestions(details: [QuestionInput]!): Response!
        createCategory(name: String!): Response!
        updateCategory(name: String!, newName: String!): Response!
        deleteCategory(name: String!): Response!
        registerUser(userInput: UserInput!): User!
        updateUserProfile(userInput: UpdateUserInput!): User!
        updateUser(userId: ID!, userInput: UpdateUserInput!): User!
        deleteUser(userId: ID!): Response!
        createProduct(productInput: ProductInput):  ProductResponse!
        updateProduct(productId: ID!, updateProduct: updateProduct): ProductResponse!
    }

    schema {
        query: rootQuery
        mutation: rootMutation
    }
`);
