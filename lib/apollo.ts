import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: process.env.API_URI_QUERY,
    headers: {
        'Authorization' : `Bearer ${process.env.API_TOKEN}`
   },
    cache: new InMemoryCache()
})