import React from "react";
import "../styles/globals.css";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import Footer from "../components/Client/Footer/Footer";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import "../styles/globals.css";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper.scss";
import Header from "../components/Client/Header/Header";
import theme from "../styles/theme";
import "react-image-gallery/styles/css/image-gallery.css";
import styles from "../styles/AppStyled"; // styles of component
import Router from "next/router";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }) => {
  const useStyles = makeStyles(styles);
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
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/rsuite@3.2.9/dist/styles/rsuite.min.css"
          rel="stylesheet"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <RecoilRoot>
              <div className="container-fluid" id="container-fluid">
                <Header />
                <div id="main-container" className={classes.page_container}>
                  <Component {...pageProps} />
                </div>
                <Footer />
              </div>
            </RecoilRoot>
          </ThemeProvider>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.Fragment>
  );
};
export { queryClient };
export default MyApp;
