import "@/styles/globals.css";
import { initializeApp, getApp, getApps } from "firebase/app";

import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";

function App({ Component, pageProps }: AppProps) {
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
  };

  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  return (
    <>
      <Navbar {...pageProps} />
      <Component {...pageProps} />
    </>
  );
}
export default App;
