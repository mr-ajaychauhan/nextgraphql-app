import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://demo.vendure.io/shop-api',
  cache: new InMemoryCache()
})
