import React from "react";

import AppLayoutContext, {
  IAppLayoutContext
} from "../AppLayout/AppLayoutContext";

function useAppLayout(): IAppLayoutContext {
  return React.useContext(AppLayoutContext);
}

export default useAppLayout;
