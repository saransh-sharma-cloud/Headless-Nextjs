import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const wpEndpoint = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;


const client = new ApolloClient({
  link: new HttpLink({ uri: wpEndpoint }),
  cache: new InMemoryCache(),
});

export default client;

