import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app'
import { AsideProvider } from '../services/asideContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AsideProvider>
      <Component {...pageProps} />
    </AsideProvider> 
  )
}


export default MyApp
