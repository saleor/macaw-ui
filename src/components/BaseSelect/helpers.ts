export const getListDisplayMode = ({
  isOpen,
  hasItemsToSelect,
  showEmptyState,
  loading,
}: {
  isOpen: boolean;
  hasItemsToSelect: boolean;
  showEmptyState: boolean;
  loading?: boolean;
}) => {
  if (isOpen && hasItemsToSelect) {
    return "block";
  }

  if (isOpen && showEmptyState) {
    return "block";
  }

  if (isOpen && loading) {
    return "block";
  }

  return "none";
};

export const getListTextSize = (
  size: "small" | "medium" | "large" | undefined
) => {
  // https://github.com/saleor/macaw-ui/issues/554
  switch (size) {
    case "small":
    case "medium":
      return "medium";
    case "large":
      return "large";
  }
};
