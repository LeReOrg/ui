import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";

import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: 40,
      float: "right",
      marginRight: 35,
    },
  },
}));
export default function PaginationRounded(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination
        onChange={(e, page) => props.onChangePage(e, page)}
        count={props.numPage}
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
}
