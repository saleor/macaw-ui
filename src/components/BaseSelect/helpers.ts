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

  if (loading) {
    return "block";
  }

  return "none";
};
