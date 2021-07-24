import React from "react";
import { getLayout } from "../../../container/ProfileContainer";
import dynamic from 'next/dynamic'

const CustomerInfoNoSSR = dynamic(
  () => import('../../../components/Client/Customer/CustomerInfo'),
  { ssr: false }
)
const Profile = () => {
  return <CustomerInfoNoSSR />;
};
Profile.getLayout = getLayout;

export default Profile;
