import startServer from "./server.js";
import typeDefs from "./graphql/typeDefs"
import resolvers from "./graphql/resolvers"

startServer({typeDefs, resolvers});

