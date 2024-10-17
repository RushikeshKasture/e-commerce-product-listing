const { ApolloServer, gql } = require("apollo-server");
const { products } = require("./data");

const typeDefs = gql`
  type Dimensions {
    width: Float!
    height: Float!
    depth: Float!
  }

  type Review {
    rating: Float!
    comment: String!
    date: String!
    reviewerName: String!
    reviewerEmail: String!
  }

  type Meta {
    createdAt: String!
    updatedAt: String!
    barcode: String!
    qrCode: String!
  }

  type Product {
    id: ID!
    title: String!
    description: String!
    category: String!
    price: Float!
    discountPercentage: Float!
    rating: Float!
    stock: Int!
    brand: String!
    sku: String!
    weight: Int!
    dimensions: Dimensions!
    warrantyInformation: String!
    shippingInformation: String!
    availabilityStatus: String!
    reviews: [Review!]!
    returnPolicy: String!
    minimumOrderQuantity: Int!
    meta: Meta!
    images: [String!]!
    thumbnail: String!
    tags: [String!]!
  }

  type Query {
    products: [Product!]!
    product(id: ID!): Product
  }
`;

const resolvers = {
  Query: {
    products: () => products,
    product: (_, { id }) => {
      const product = products.find((p) => p.id === parseInt(id));
      if (!product) throw new Error("Product not found");
      return {
        ...product,
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server listening at ${url}`);
});
