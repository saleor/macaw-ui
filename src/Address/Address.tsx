import Typography from "@material-ui/core/Typography";
import React from "react";

import Skeleton from "../Skeleton";

export interface AddressType {
  id: string;
  city: string;
  cityArea?: string;
  companyName?: string;
  country: {
    code: string;
    country: string;
  };
  countryArea?: string;
  firstName: string;
  lastName: string;
  phone: string;
  postalCode: string;
  streetAddress1: string;
  streetAddress2?: string;
}

export interface AddressProps {
  address: AddressType;
}

const Address: React.FC<AddressProps> = ({ address }) => {
  if (!address) {
    return <Skeleton />;
  }
  return (
    <address
      style={{
        fontStyle: "inherit"
      }}
    >
      <Typography component="span">
        {address.firstName} {address.lastName}
      </Typography>
      {address.companyName && (
        <Typography component="span">{address.companyName}</Typography>
      )}
      <Typography component="span">
        {address.streetAddress1}
        <br />
        {address.streetAddress2}
      </Typography>
      <Typography component="span">
        {" "}
        {address.postalCode} {address.city}
        {address.cityArea ? ", " + address.cityArea : ""}
      </Typography>
      <Typography component="span">
        {address.countryArea
          ? address.countryArea + ", " + address.country.country
          : address.country.country}
      </Typography>
    </address>
  );
};
Address.displayName = "Address";
export default Address;
