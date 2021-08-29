import "../styles/globals.css";
import '../styles/ProgressBar.css';

import { AppProps } from "next/app";
import { WebSocketProvider } from "../modules/ws/WebSocketProvider";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  <WebSocketProvider>
    <Component {...pageProps} />
  </WebSocketProvider>
  )
}
