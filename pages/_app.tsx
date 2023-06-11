import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <title>Alejandro Font</title>
      <Navbar />
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
