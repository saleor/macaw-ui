export const getListDisplayMode = ({
  isOpen,
  hasItemsToSelect,
}: {
  isOpen: boolean;
  hasItemsToSelect: boolean;
}) => {
  if (isOpen && hasItemsToSelect) {
    return "block";
  }

  return "none";
};
