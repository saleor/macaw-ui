import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import { Theme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import DeleteIcon from "@material-ui/icons/Delete";
import makeStyles from "@material-ui/styles/makeStyles";
import classNames from "classnames";
import React from "react";

import CardTitle from "../CardTitle";
import Skeleton from "../Skeleton";
import { maybe, renderCollection } from "../utils";

export interface Country {
  country: string;
  code: string;
}

export type CountryListLabels = Record<
  "assignButton" | "emptyList" | "title",
  React.ReactNode
> & {
  noOfCountries: (countries: string) => React.ReactNode;
};

export interface CountryListProps {
  countries: Country[];
  disabled: boolean;
  labels: CountryListLabels;
  onCountryAssign: () => void;
  onCountryUnassign: (country: string) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  iconCell: {
    "&:last-child": {
      paddingRight: 0
    },
    width: 48 + theme.spacing.unit / 2
  },
  indicator: {
    color: theme.palette.text.disabled,
    display: "inline-block",
    left: 0,
    marginRight: theme.spacing.unit * 2,
    position: "absolute"
  },
  offsetCell: {
    "&:first-child": {
      paddingLeft: theme.spacing.unit * 3
    },
    position: "relative"
  },
  pointer: {
    cursor: "pointer"
  },
  root: {
    "&:last-child": {
      paddingBottom: 0
    },
    paddingTop: 0
  },
  rotate: {
    transform: "rotate(180deg)"
  },
  textRight: {
    textAlign: "right"
  },
  toLeft: {
    "&:first-child": {
      paddingLeft: 0
    }
  },
  wideColumn: {
    width: "100%"
  }
}));

const CountryList: React.FC<CountryListProps> = props => {
  const {
    countries,
    disabled,
    labels,
    onCountryAssign,
    onCountryUnassign
  } = props;
  const classes = useStyles(props);
  const [isCollapsed, setCollapseStatus] = React.useState(true);
  const toggleCollapse = () => setCollapseStatus(!isCollapsed);

  return (
    <Card>
      <CardTitle
        title={labels.title}
        toolbar={
          <Button color="primary" onClick={onCountryAssign}>
            {labels.assignButton}
          </Button>
        }
      />
      <CardContent className={classes.root}>
        <Table>
          <TableBody>
            <TableRow className={classes.pointer} onClick={toggleCollapse}>
              <TableCell
                className={classNames(classes.wideColumn, classes.toLeft)}
              >
                {labels.noOfCountries(
                  maybe(() => countries.length.toString(), "...")
                )}
              </TableCell>
              <TableCell
                className={classNames(classes.textRight, classes.iconCell)}
              >
                <IconButton>
                  <ArrowDropDownIcon
                    className={classNames({
                      [classes.rotate]: !isCollapsed
                    })}
                  />
                </IconButton>
              </TableCell>
            </TableRow>
            {!isCollapsed &&
              renderCollection(
                countries,
                (country, countryIndex) => (
                  <TableRow key={country ? country.code : "skeleton"}>
                    <TableCell className={classes.offsetCell}>
                      {maybe<React.ReactNode>(
                        () => (
                          <>
                            {(countryIndex === 0 ||
                              countries[countryIndex].country[0] !==
                                countries[countryIndex - 1].country[0]) && (
                              <span className={classes.indicator}>
                                {country.country[0]}
                              </span>
                            )}
                            {country.country}
                          </>
                        ),
                        <Skeleton />
                      )}
                    </TableCell>
                    <TableCell
                      className={classNames(
                        classes.textRight,
                        classes.iconCell
                      )}
                    >
                      <IconButton
                        color="primary"
                        disabled={!country || disabled}
                        onClick={() => onCountryUnassign(country.code)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ),
                () => (
                  <TableRow>
                    <TableCell className={classes.toLeft} colSpan={2}>
                      {labels.emptyList}
                    </TableCell>
                  </TableRow>
                )
              )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
export default CountryList;
