import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";

import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
      float: "right",
    },
  },
 
}));    
export default function PaginationRounded() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination  count={10} variant="outlined" shape="rounded" />
    </div>
  );
}
