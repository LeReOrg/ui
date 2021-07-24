import React from "react";
import { Typography, Box, Grid } from "@material-ui/core";
import Link from "next/link";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../styles/CardProductStyled";
import { prefetchProductByDetails } from "../hooks/useProduct";

const ProductLessor = ({ item }) => {
  const useStyled = makeStyles(styles);

  const classes = useStyled({
    available: item.quantity > 0 ? true : false,
  });
  return (
    <div className={classes.productLessorContainer}>
      <Grid container>
        <Grid className={classes.productLessorLink} item lg={3} md={3}>
          <Link as={`/${item._id}`} href="/[product]">
            <a
              className={classes.productLessorLink}
              onMouseEnter={() => {
                prefetchProductByDetails(item._id);
              }}
            >
              <Image
                src={item?.images[0]?.url}
                title={item?.name}
                width={88}
                height={88}
              />
              <Typography className={classes.contentLessorItemName}>
                {item?.name}
              </Typography>
            </a>
          </Link>
        </Grid>
        <Grid item lg={3} md={3}>
          <Typography className={classes.price_item_lessor}>
            {item?.price.toLocaleString("en-US")}đ/ngày
          </Typography>
        </Grid>
        <Grid item lg={2} md={2}>
          <Typography className={classes.contentLessorItemCheck}></Typography>
        </Grid>
        <Grid item lg={2} md={2}>
          <Typography className={classes.contentLessorItem}>Xem</Typography>
        </Grid>
        <Grid item lg={2} md={2}>
          <Box className={classes.contentLessorItem}>
            <Box>Chỉnh sửa</Box>
            <Box>Xóa</Box>
          </Box>
        </Grid>
      </Grid>
      <hr className={classes.contentLessorItemHr} />
    </div>
  );
};
export default ProductLessor;
