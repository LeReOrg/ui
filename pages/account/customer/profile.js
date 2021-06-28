import React from "react";
import CustomerInfo from "../../../components/Client/Customer/CustomerInfo";
import { getLayout } from "../../../container/ProfileContainer";

const Profile = () => {
  return <CustomerInfo />;
};
Profile.getLayout = getLayout;

export default Profile;
