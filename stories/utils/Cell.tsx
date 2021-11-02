import useGuideStyles from "../guideStyles";

export const Cell: React.FC = ({ children }) => {
  const classes = useGuideStyles();

  return <div className={classes.cell}>{children}</div>;
};
