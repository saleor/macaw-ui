export const getListDisplayMode = ({
  isOpen,
  hasItemsToSelect,
  loading,
}: {
  isOpen: boolean;
  hasItemsToSelect: boolean;
  loading?: boolean;
}) => {
  if (isOpen && hasItemsToSelect) {
    return "block";
  }

  if (isOpen && loading) {
    return "block";
  }

  return "none";
};
