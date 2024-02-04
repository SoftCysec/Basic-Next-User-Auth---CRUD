// pages/_app.js
import { SessionProvider } from "next-auth/react";
import '../styles/globals.css'; // Make sure the path matches your global styles file

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
