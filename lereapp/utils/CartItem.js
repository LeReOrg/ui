import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const CardBlockShop = (props) => {
      const useStyles = makeStyles((theme) => ({

      }))
return(
 <>
   <Link as="/test" href="/[product]">
     <a>
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

       <Typography className={classes.content} align="left">
         {props.test === undefined
           ? "Go Pro 5 con xin 99% ,mới được mua còn bảo hành 3 tháng còn bảo hành abcxyz"
           : "go prosdascixachjdc"}
       </Typography>
       <Typography className={classes.price_item} align="left">
         30,000đ/ngày
       </Typography>
     </a>
   </Link>
 </>
)
};

export default CardBlockShop;
