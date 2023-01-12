import { SCVWrapperVaraints } from "./SVGWrapper/SVGWrapper.css";
import * as icons from "./index";

const macawIcons = Object.values(icons);

export default {
  title: "components/Icons",
};

export const Default = () =>
  ["Small", "Medium", "Large"].map((size) => (
    <>
      <h3>{size}</h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {macawIcons.map((Icon, idx) => (
          <div
            style={{
              margin: "10px",
            }}
            key={idx}
          >
            <Icon size={size.toLowerCase() as keyof SCVWrapperVaraints} />
          </div>
        ))}
      </div>
    </>
  ));
