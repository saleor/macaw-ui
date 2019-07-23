import TextField from "@material-ui/core/TextField";
import React from "react";

import Grid from "../Grid";
import SingleAutocompleteSelectField, {
  SingleAutocompleteChoiceType,
  SingleAutocompleteSelectFieldLabels
} from "../SingleAutocompleteSelectField";
import { ChangeEvent, FormErrors } from "../types/utils";
import FormSpacer from "../utils/FormSpacer";

export interface AddressInput {
  city: string;
  cityArea?: string;
  companyName?: string;
  country: string;
  countryArea?: string;
  firstName: string;
  lastName: string;
  phone: string;
  postalCode: string;
  streetAddress1: string;
  streetAddress2?: string;
}

export type EditAddressLabelKeys =
  | "firstName"
  | "lastName"
  | "companyName"
  | "phoneNumber"
  | "streetAddress1"
  | "streetAddress2"
  | "city"
  | "postalCode"
  | "country"
  | "countryArea";
export type EditAddressLabels = Record<EditAddressLabelKeys, string>;

export interface EditAddressProps {
  countries: SingleAutocompleteChoiceType[];
  countryPickerDisplayValue: string;
  countryPickerLabels: Pick<
    SingleAutocompleteSelectFieldLabels,
    "addCustomValueText" | "noResultsLabel"
  >;
  data: AddressInput;
  disabled?: boolean;
  errors: FormErrors<keyof AddressInput>;
  labels: EditAddressLabels;
  onChange: (event: ChangeEvent) => void;
  onCountryChange: (event: ChangeEvent) => void;
}

const EditAddress: React.FC<EditAddressProps> = ({
  countries,
  countryPickerLabels,
  countryPickerDisplayValue,
  data,
  disabled,
  errors,
  labels,
  onChange,
  onCountryChange
}) => (
  <>
    <Grid variant="uniform">
      <div>
        <TextField
          disabled={disabled}
          error={!!errors.firstName}
          helperText={errors.firstName}
          label={labels.firstName}
          name="firstName"
          onChange={onChange}
          value={data.firstName}
          fullWidth
        />
      </div>
      <div>
        <TextField
          disabled={disabled}
          error={!!errors.lastName}
          helperText={errors.lastName}
          label={labels.lastName}
          name="lastName"
          onChange={onChange}
          value={data.lastName}
          fullWidth
        />
      </div>
    </Grid>
    <FormSpacer />
    <Grid variant="uniform">
      <div>
        <TextField
          disabled={disabled}
          error={!!errors.companyName}
          helperText={errors.companyName}
          label={labels.companyName}
          name="companyName"
          onChange={onChange}
          value={data.companyName}
          fullWidth
        />
      </div>
      <div>
        <TextField
          disabled={disabled}
          error={!!errors.phone}
          fullWidth
          helperText={errors.phone}
          label={labels.phoneNumber}
          name="phone"
          value={data.phone}
          onChange={onChange}
        />
      </div>
    </Grid>
    <FormSpacer />
    <TextField
      disabled={disabled}
      error={!!errors.streetAddress1}
      helperText={errors.streetAddress1}
      label={labels.streetAddress1}
      name="streetAddress1"
      onChange={onChange}
      value={data.streetAddress1}
      fullWidth
    />
    <FormSpacer />
    <TextField
      disabled={disabled}
      error={!!errors.streetAddress2}
      helperText={errors.streetAddress2}
      label={labels.streetAddress2}
      name="streetAddress2"
      onChange={onChange}
      value={data.streetAddress2}
      fullWidth
    />
    <FormSpacer />
    <Grid variant="uniform">
      <div>
        <TextField
          disabled={disabled}
          error={!!errors.city}
          helperText={errors.city}
          label={labels.city}
          name="city"
          onChange={onChange}
          value={data.city}
          fullWidth
        />
      </div>
      <div>
        <TextField
          disabled={disabled}
          error={!!errors.postalCode}
          helperText={errors.postalCode}
          label={labels.postalCode}
          name="postalCode"
          onChange={onChange}
          value={data.postalCode}
          fullWidth
        />
      </div>
    </Grid>
    <FormSpacer />
    <Grid variant="uniform">
      <div>
        <SingleAutocompleteSelectField
          disabled={disabled}
          displayLabel={countryPickerDisplayValue}
          error={!!errors.country}
          helperText={errors.country}
          label={labels.country}
          name="country"
          onChange={onCountryChange}
          value={data.country}
          choices={countries}
          InputProps={{
            autoComplete: "off"
          }}
          {...countryPickerLabels}
        />
      </div>
      <div>
        <TextField
          disabled={disabled}
          error={!!errors.countryArea}
          helperText={errors.countryArea}
          label={labels.countryArea}
          name="countryArea"
          onChange={onChange}
          value={data.countryArea}
          fullWidth
        />
      </div>
    </Grid>
  </>
);
EditAddress.displayName = "EditAddress";
export default EditAddress;
