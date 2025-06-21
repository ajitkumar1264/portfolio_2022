import { useState } from "react";
import annex from "../components/Context";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [darkmode, setdarkmode] = useState(false);

  return (
    <annex.Provider value={{ darkmode, setdarkmode }}>
      <Navbar />
      <Component {...pageProps} />
    </annex.Provider>
  );
}

export default MyApp;
