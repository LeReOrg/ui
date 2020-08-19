import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import "../styles/globals.css";
import { makeStyles } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import Header from "../components/Client/Header/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/swiper.scss";
import withRedux from "next-redux-wrapper";
import { wrapper } from "../store/store";
// import store from "../store/store";
import Footer from "../components/Client/Footer/Footer";
const MyApp = (props) => {
  const { Component, pageProps } = props;
  const useStyles = makeStyles((theme) => ({
    page_container: {
       paddingBottom : 80,
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        paddingBottom : 130
      },
    },
  }));
   const classes = useStyles();
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Le&Re Org</title>s
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        
          <div className="container-fluid">
            <Header />
            <div className={classes.page_container}>
              <Component {...pageProps} />
            </div>
            <Footer />
          </div>
        
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
// export default withRedux(makeStore)(MyApp);
export default wrapper.withRedux(MyApp);
