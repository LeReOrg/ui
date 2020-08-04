import React from "react";
import { useRouter } from "next/router";
import BreadCrumb from "../../components/Client/BreadCrumb/BreadCrumb";
import { Grid } from "@material-ui/core";

const ListProductByType = (props) => {
  const router = useRouter();
   
  return (
    <>
      <BreadCrumb
        activeBread={
          router.query.type_product !== "undefined"
            ? router.query.type_product
            : null
        }
      />
      <div style={{ width: "92%", margin: "40px auto" }}>
        <Grid container>
          <Grid item lg={3} md={3}>Left</Grid>
          <Grid item lg={9} md={9}>Right</Grid>
        </Grid>
      </div>
    </>
  );
  
};
export default ListProductByType;
