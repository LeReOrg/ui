import React, { useState } from "react";
import { makeStyles, Box, Typography, Grid } from "@material-ui/core";
import CardProduct from "../../../utils/CardProduct";
import styles from "./InterestedItemStyled";
import { useMoreProduct } from "../../../hooks/useTopProduct";
import useIntersectionObserver from "../../../hooks/useIntersextionObserver";

const useStyles = makeStyles(styles);

const InterestedItem = (props) => {
  const [maxPage, setMaxPage] = useState(2);
  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useMoreProduct();
  const loadMoreButtonRef = React.useRef();
  useIntersectionObserver({
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });
  const renderTopItems = data?.pages.map((page, index) => (
    <React.Fragment key={index}>
      {page.products?.map((productItem) => (
        <Grid key={productItem.id} item lg={3} md={4} xs={6}>
          <CardProduct item={productItem} />
        </Grid>
      ))}
    </React.Fragment>
  ));
  const classes = useStyles();
  return (
    <div className={classes.interested_main}>
      <Typography component="div">
        <Box className={classes.interested_title}>Có thể bạn quan tâm</Box>
        <Grid container spacing={3}>
          {renderTopItems}
        </Grid>
        <div>
          <button
            // ref={loadMoreButtonRef}
            onClick={() => fetchNextPage(maxPage)}
            // disabled={!hasNextPage || isFetchingNextPage}
          >
            loadmore Item
          </button>
        </div>
      </Typography>
    </div>
  );
};

export default InterestedItem;
