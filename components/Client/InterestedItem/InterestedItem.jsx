import React, { useState, useEffect } from "react";
import { makeStyles, Box, Typography, Grid } from "@material-ui/core";
import CardProduct from "../../../utils/CardProduct";
import styles from "./InterestedItemStyled";
import { useMoreProduct } from "../../../hooks/useTopProduct";
import useIntersectionObserver from "../../../hooks/useIntersextionObserver";
import { queryClient } from "../../../pages/_app";
import LoadMoreItem from "./LoadMoreItem";
const useStyles = makeStyles(styles);

const InterestedItem = (props) => {
  const [page, setPage] = React.useState(0);
  const [productItem, setProductItem] = React.useState([]);
  const { status, data, error, isFetching, isPreviousData } = useMoreProduct(
    page
  );
  if (productItem?.length == 0 && data) {
    setProductItem(data.products);
  }
  React.useEffect(async () => {
    if (page != 0) {
      await queryClient.prefetchQuery(["topProduct", page], () =>
        useMoreProduct(page)
      );
    }
  }, [page]);
  useEffect(() => {
    if (data && page != 0) {
      let { products } = data;
      setProductItem((oldArray) => [...oldArray, ...products]);
    }
  }, [data]);
  // const loadMoreButtonRef = React.useRef();
  // useIntersectionObserver({
  //   target: loadMoreButtonRef,
  //   onIntersect: useMoreProduct(page + 1),
  //    enabled: hasNextPage,
  // });
  const renderTopItems = productItem?.map((productItem) => (
    <Grid key={productItem.id} item lg={3} md={4} xs={6}>
      <CardProduct item={productItem} />
    </Grid>
  ));

  const classes = useStyles();
  const loadMore = () => {
    setPage((old) => old + 1);
  };
  return (
    <div className={classes.interested_main}>
      <Typography component="div">
        <Box className={classes.interested_title}>Có thể bạn quan tâm</Box>
        <Grid container spacing={3}>
          {renderTopItems}
        </Grid>
        {
          data?.numPage - 1 > page ?<LoadMoreItem loadMore={() => loadMore()} /> : null
        }
      </Typography>
    </div>
  );
};

export default InterestedItem;
