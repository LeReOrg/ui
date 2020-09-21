import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const Line = () => {
    const useStyles = makeStyles((theme) => ({
        main: {
            // height: "1%",
            // backgroundColor: "#F3F4F3",
            border: "10px solid #F3F4F3",
        },
    }));

  const classes = useStyles();

  return (
    <hr className={classes.main} />
  );
};

export default Line;
