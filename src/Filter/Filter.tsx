import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import Delete from "@material-ui/icons/Delete";
import React from "react";

import FilterMenu, { FilterMenuLabels } from "./FilterMenu";
import useStyles from "./styles";
import { getAvailableFilters } from "./utils";

export enum FilterType {
  Text,
  Choice,
}

export interface FilterContextType {
  filters: Record<string, FilterData>;
  register: (name: string, label: string) => void;
  toggle: (name: string) => void;
  onChange: (name: string, value: string) => void;
}

const FilterContext = React.createContext<FilterContextType | null>(null);
export const useFilters = (): FilterContextType => {
  const ctx = React.useContext(FilterContext);
  if (ctx === undefined) {
    throw new Error("useFilters must be used within a FilterContext");
  }

  return ctx!;
};

export interface FilterData {
  active: boolean;
  label: string;
  value: string | null;
}

export interface FilterBarProps {
  labels: Record<"header" | "addButton", string> &
    FilterMenuLabels &
    FilterLabels;
}
export const FilterBar: React.FC<FilterBarProps> = ({ children, labels }) => {
  const classes = useStyles();
  const [filterData, setFilterData] = React.useState<
    Record<string, FilterData>
  >({});
  const [menuOpen, setMenuOpen] = React.useState(false);
  const button = React.useRef(null);

  const register = (name: string, label: string) =>
    setFilterData((fd) => ({
      ...fd,
      [name]: {
        active: false,
        label,
        value: null,
      },
    }));
  const onChange = (name: string, value: string) =>
    setFilterData((fd) => ({
      ...fd,
      [name]: {
        ...fd[name],
        value,
      },
    }));
  const toggle = (name: string) =>
    setFilterData((fd) => ({
      ...fd,
      [name]: {
        ...fd[name],
        active: !fd[name].active,
      },
    }));

  const availableFilters = getAvailableFilters(filterData);

  return (
    <FilterContext.Provider
      value={{ filters: filterData, register, toggle, onChange }}
    >
      <Card className={classes.bar}>
        <CardHeader title={labels.header} />
        <CardContent>
          <div>{children}</div>
          {!!availableFilters.length && (
            <>
              <Button ref={button} onClick={() => setMenuOpen(true)}>
                {labels.addButton}
              </Button>
            </>
          )}
          <FilterMenu
            anchorEl={button.current}
            labels={labels}
            open={menuOpen}
            onClose={() => setMenuOpen(false)}
          />
        </CardContent>
      </Card>
    </FilterContext.Provider>
  );
};

type FilterLabels = Record<"where", string>;
export interface FilterProps {
  name: string;
  label: string;
  labels: FilterLabels;
  type: FilterType;
  choices?: Array<Record<"label" | "value", string>>;
}
export interface FilterContentProps extends FilterProps {
  filter: FilterData;
}

const FilterContent: React.FC<FilterContentProps> = ({
  name,
  label,
  type,
  choices,
  filter,
}) => {
  const classes = useStyles();

  if (type === FilterType.Choice) {
    return (
      <>
        {choices!.map((choice) => (
          <div>
            <label htmlFor={name}>{choice.label}</label>
            <input name={name} value={choice.value} type="radio" />
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input value={filter.value || ""} name={name} />
    </>
  );
};

export const Filter: React.FC<FilterProps> = ({
  children,
  name,
  label,
  labels,
  ...props
}) => {
  const classes = useStyles();
  const { filters, toggle, register } = useFilters();
  React.useEffect(() => {
    register(name, label);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const availableFilters = getAvailableFilters(filters);

  const filter = filters[name];

  if (!filter?.active) {
    return null;
  }

  const options = availableFilters;

  return (
    <div className={classes.filter}>
      <Typography>{labels.where}</Typography>
      <Select onChange={(event) => console.log(event)}>
        {options.map(([name, filter]) => (
          <MenuItem value={name}>{filter.label}</MenuItem>
        ))}
      </Select>
      <FilterContent
        {...props}
        name={name}
        label={label}
        filter={filter}
        labels={labels}
      />
      <IconButton className={classes.filterDelete} onClick={() => toggle(name)}>
        <Delete />
      </IconButton>
    </div>
  );
};
