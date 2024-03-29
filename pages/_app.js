import React from "react";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Head from "next/head";
import "swiper/swiper.scss";
import theme from "../styles/theme";
import "react-image-gallery/styles/css/image-gallery.css";
import styles from "../styles/AppStyled"; // styles of component
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";
import ProfileLayout from "../container/ProfileContainer";
import OverPlay from "../utils/OverPlay";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

const cache = createCache({ key: "css" });
cache.compat = true;
const MyApp = ({ Component, pageProps }) => {
  const queryClientRef = React.useRef();
  const getLayout =
    Component.getLayout || ((page) => <ProfileLayout children={page} />);
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <React.Fragment>
      <CacheProvider value={cache}>
        <Head>
          <title>Le&Re Org</title>s
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <link
            href="https://cdn.jsdelivr.net/npm/rsuite@3.2.9/dist/styles/rsuite.min.css"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <QueryClientProvider client={queryClientRef.current}>
          <Hydrate state={pageProps.dehydratedState}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <RecoilRoot>
                <div className="container-fluid" id="container-fluid">
                  <div id="main-container" className={classes.page_container}>
                    <OverPlay />
                    <NextNProgress height={2} color="#2faf62" />
                    {getLayout(<Component {...pageProps} />)}
                  </div>
                </div>
              </RecoilRoot>
            </ThemeProvider>
          </Hydrate>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </CacheProvider>
    </React.Fragment>
  );
};
export default MyApp;
