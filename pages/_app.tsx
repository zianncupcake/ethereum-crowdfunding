import "@/styles/globals.css";
import type { AppProps } from "next/app";

import {NavBar, Footer} from "../Components"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <NavBar/>
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}
