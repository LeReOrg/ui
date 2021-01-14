import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import styles from "./ProductDetailsStyled";
const ProductDetailsContent = ({ ...props }) => {
  const useStyled = makeStyles(styles);
  const classes = useStyled();
  const [stateCollapse, setStateCollapse] = useState(false);
  const [collapseContent, setCollapseContent] = useState(
    props.content._content
  );

  const renderReadMore = () => {
    if (props.content._content.length > 700) {
      const showFullContent = (status) => {
        setStateCollapse(!stateCollapse);
        status === "open"
          ? setCollapseContent(props.content._content)
          : setCollapseContent(collapseContent.slice(0, 700));
      };
      return (
        <>
          {!stateCollapse ? (
            <Typography
              className={classes.read_more}
              align="left"
              onClick={() => showFullContent("open")}
            >
              Xem thêm
            </Typography>
          ) : (
            <Typography
              className={classes.read_more}
              align="left"
              onClick={() => showFullContent("close")}
            >
              Thu gọn
            </Typography>
          )}
        </>
      );
    }
  };
  useEffect(() => {
    let length = collapseContent.length;
    if (length > 700) {
      let moreContent = collapseContent.slice(0, 700);
      setCollapseContent(moreContent);
    }
  }, []);
  return (
    <div className={classes.main_list}>
      <Grid container>
        <Grid item lg={6} md={6} xs={12}>
          <Typography className={classes.title} align="left">
            Chi tiết sản phẩm
          </Typography>
          <Typography className={classes.content} align="left">
            {collapseContent}
          </Typography>
          {renderReadMore()}
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetailsContent;
