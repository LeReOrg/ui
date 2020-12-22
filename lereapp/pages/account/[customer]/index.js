import React, { useEffect } from "react";
import CustomerPage from "../../../components/Client/Customer/Customer";

const CustomerProfile = () => {
  useEffect(() => {
    let background = document.getElementById("container-fluid");
    if (background) {
      background.classList.add("customerPage");
    }
  }, []);
  return (
    <>
      <CustomerPage />
    </>
  );
};

export default CustomerProfile;
