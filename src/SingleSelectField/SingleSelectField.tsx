import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select, { SelectProps } from "@material-ui/core/Select";
import makeStyles from "@material-ui/styles/makeStyles";
import classNames from "classnames";
import React from "react";

const useStyles = makeStyles({
  formControl: {
    width: "100%"
  }
});

export interface SingleSelectChoiceType {
  value: string;
  label: React.ReactNode;
}

export interface SingleSelectFieldProps {
  choices: SingleSelectChoiceType[];
  className?: string;
  disabled?: boolean;
  error?: boolean;
  hint?: string;
  label?: string;
  name?: string;
  noResultsText: string;
  selectProps?: SelectProps;
  placeholder?: string;
  value?: string;
  onChange(event: any);
}

export const SingleSelectField: React.FC<SingleSelectFieldProps> = props => {
  const {
    className,
    disabled,
    error,
    label,
    choices,
    value,
    onChange,
    name,
    noResultsText,
    hint,
    selectProps,
    placeholder
  } = props;
  const classes = useStyles(props);
  const choicesByKey: Record<string, string> =
    choices === undefined
      ? {}
      : choices.reduce((prev, curr) => {
          prev[curr.value] = curr.label;
          return prev;
        }, {});

  return (
    <FormControl
      className={classNames(classes.formControl, className)}
      error={error}
      disabled={disabled}
    >
      <InputLabel shrink={!!value}>{label}</InputLabel>
      <Select
        variant="filled"
        fullWidth
        renderValue={choiceValue =>
          choiceValue ? choicesByKey[choiceValue.toString()] : placeholder
        }
        value={value || ""}
        onChange={onChange}
        input={<FilledInput name={name} />}
        {...selectProps}
      >
        {choices.length > 0 ? (
          choices.map(choice => (
            <MenuItem value={choice.value} key={choice.value}>
              {choice.label}
            </MenuItem>
          ))
        ) : (
          <MenuItem disabled={true}>{noResultsText}</MenuItem>
        )}
      </Select>
      {hint && <FormHelperText>{hint}</FormHelperText>}
    </FormControl>
  );
};
SingleSelectField.displayName = "SingleSelectField";
export default SingleSelectField;
