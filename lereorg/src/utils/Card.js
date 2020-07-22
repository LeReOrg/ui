import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import imageTest from "../assets/img/background/testdanhmuc.png";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  content: {
    paddingTop: 16,
    fontSize: 24,
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
      paddingTop: 4,
    },
  },
}));

const MediaCard = () => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            className={classes.media}
            image={imageTest}
            title="Contemplative Reptile"
          />
        </CardActionArea>
      </Card>

      <Typography
        className={classes.content}
        align="center"
        variant="subtitle1"
      >
        Giay dep
      </Typography>
    </>
  );
};
export default MediaCard;
