import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    uri: process.env.NEXT_PUBLIC_API_URI_QUERY,
    headers: {
        'Authorization' : `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
   },
    cache: new InMemoryCache()
})