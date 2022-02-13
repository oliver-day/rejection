import React from "react";
import { withRedux } from "../store/store";
import withFeatures from "../src/HOCs/withFeatures";
// import { compose } from "../src/utils/utils";

import '../styles/globals.css'
import { compose } from "redux";

const features = [];

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default compose(
  withRedux,
  withFeatures({ features })
)(MyApp);
