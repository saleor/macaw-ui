import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { Theme } from "@material-ui/core/styles";
import makeStyles from "@material-ui/styles/makeStyles";
import classNames from "classnames";
import * as React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  formControl: {
    padding: `0 ${theme.spacing.unit * 2}px`,
    width: "100%"
  },
  formLabel: {
    marginLeft: -theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit
  },
  radioLabel: {
    "& > span": {
      padding: theme.spacing.unit
    }
  }
}));

export interface RadioGroupChoiceType {
  value: string;
  label: React.ReactNode;
}

export interface RadioGroupFieldProps {
  choices: RadioGroupChoiceType[];
  className?: string;
  disabled?: boolean;
  error?: boolean;
  hint?: string;
  label?: string;
  name?: string;
  noResultsText: string;
  value: string;
  onChange: (event: React.ChangeEvent<any>) => void;
}

const RadioGroupField: React.FC<RadioGroupFieldProps> = props => {
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
    hint
  } = props;
  const classes = useStyles(props);

  return (
    <FormControl
      className={classNames(classes.formControl, className)}
      error={error}
      disabled={disabled}
    >
      {label ? (
        <FormLabel className={classes.formLabel}>{label}</FormLabel>
      ) : null}
      <RadioGroup
        aria-label={name}
        name={name}
        value={value}
        onChange={onChange}
      >
        {choices.length > 0 ? (
          choices.map(choice => (
            <FormControlLabel
              value={choice.value}
              className={classes.radioLabel}
              control={<Radio color="primary" />}
              label={choice.label}
              key={choice.value}
            />
          ))
        ) : (
          <MenuItem disabled={true}>{noResultsText}</MenuItem>
        )}
      </RadioGroup>
      {hint && <FormHelperText>{hint}</FormHelperText>}
    </FormControl>
  );
};

RadioGroupField.displayName = "RadioGroupField";
export default RadioGroupField;
