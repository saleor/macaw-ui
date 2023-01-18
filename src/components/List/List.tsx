import { Box } from "../Box";

type ListProps = {
  children: React.ReactNode;
  as?: "ul" | "ol";
  className?: string;
};

export const List = ({ children, as = "ul", className }: ListProps) => {
  return (
    <Box as={as} className={className}>
      {children}
    </Box>
  );
};
