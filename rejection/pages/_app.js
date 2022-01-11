import React from "react";
import { withRedux } from "../store/store";

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withRedux(MyApp);
