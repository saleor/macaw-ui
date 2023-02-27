import SvgIcon from "@material-ui/core/SvgIcon";
import * as React from "react";

import { useIconStyles } from "../styles";
import { IconProps } from "../types";
export const GithubIcon = React.forwardRef(
  (props: IconProps, ref: React.Ref<SVGSVGElement>) => {
    const classes = useIconStyles();
    return (
      <SvgIcon
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={25}
        fill="none"
        viewBox="0 0 24 25"
        classes={{
          root: classes.root,
        }}
        {...props}
        ref={ref}
      >
        <path
          stroke="currentColor"
          strokeWidth={1.5}
          d="M14.6 6.064c.315.023.75-.026 1.108-.25 1.297-.816 2.626-1.504 4.047-1.971.06-.02.124-.038.199-.055.099.266.175.492.215.716.026.147.053.292.08.435.16.872.306 1.665.29 2.45-.018.888.271 1.482.695 2.074.78 1.089 1.067 2.357 1.009 3.768-.038.907-.144 1.765-.366 2.57-.25.903-.646 1.74-1.266 2.503-.797.982-1.832 1.62-3.07 2.023-.657.214-1.05.313-1.444.364-.406.053-.839.059-1.597.059h-5c-1.428 0-2.96-.247-4.212-.907-1.52-.801-2.52-2.018-3.046-3.67a10.598 10.598 0 0 1-.49-3.43c.022-1.325.387-2.497 1.178-3.514a2.55 2.55 0 0 0 .416-.73c.102-.294.133-.599.108-.93-.053-.684.053-1.409.181-2.204.074-.454.203-.887.346-1.37l.057-.192c1.531.43 2.92 1.169 4.293 2.057.342.221.777.258 1.09.203a14.222 14.222 0 0 1 1.623-.185c.67-.04 1.348-.036 2.031-.004m1.524.19a9.544 9.544 0 0 1-.776-.099m.776.099-.776-.099m-.748-.091c.213.01.433.042.692.082m-.692-.082.692.082m0 0 .056.01m-.056-.01.056.01"
        />
        <path
          stroke="currentColor"
          strokeWidth={2}
          d="M16 16c0 .357-.11.641-.24.814-.129.173-.231.186-.26.186-.029 0-.131-.013-.26-.186-.13-.173-.24-.457-.24-.814 0-.357.11-.641.24-.814.129-.173.231-.186.26-.186.029 0 .131.013.26.186.13.173.24.457.24.814Zm-7 0c0 .357-.11.641-.24.814-.129.173-.231.186-.26.186-.029 0-.131-.013-.26-.186C8.11 16.641 8 16.357 8 16c0-.357.11-.641.24-.814.129-.173.231-.186.26-.186.029 0 .131.013.26.186.13.173.24.457.24.814Z"
        />
        <path
          stroke="currentColor"
          strokeWidth={1.5}
          d="M6.753 11.314c-.798.05-1.457.38-2.012.85-1.133.962-1.6 2.166-1.562 3.36.032 1.02.43 1.993 1.013 2.78.836 1.128 2.02 1.613 3.171 1.883A20.33 20.33 0 0 0 12 20.75a20 20 0 0 0 4.653-.568c.787-.188 1.671-.47 2.415-1.113.647-.56 1.143-1.108 1.437-1.762.346-.771.363-1.582.216-2.53-.095-.616-.274-1.21-.616-1.73-.347-.53-.836-.944-1.483-1.23-.74-.329-1.565-.467-2.308-.512m-9.56.01a32.676 32.676 0 0 1 2.255-.065m-2.256.064 2.256-.064m0 0a30.224 30.224 0 0 0 .98-.007c.319-.005.65-.008 1.033.003.57.017 1.176.012 1.785.008.4-.004.803-.007 1.198-.004m-4.996 0h4.996m0 0 .161.001m-.16-.001.16.001m2.148.054c-.731-.044-1.44-.049-2.148-.054m2.148.054-2.148-.054"
        />
      </SvgIcon>
    );
  }
);