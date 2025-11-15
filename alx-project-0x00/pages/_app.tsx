import type { AppProps } from 'next/app';
import '../app-disabled/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

