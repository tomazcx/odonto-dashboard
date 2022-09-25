import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app'
import { AsideProvider } from '../services/asideContext';
import { ApolloProvider } from '@apollo/client'
import { client } from '../lib/apollo';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
        <AsideProvider>
          <Component {...pageProps} />
        </AsideProvider>
    </ApolloProvider>
  )
}


export default MyApp
