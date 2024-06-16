import { type ReactNode, type FC } from "react";

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};
type WarningBoxProps = {
  mode: "warning";
  severity: "high" | "medium" | "low";
  children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

// type InfoBoxProps = {
//   mode: "hint" | "warning";
//   severity?: "high" | "medium" | "low"; // severity?: "high" | "medium" | "low" | undefined   => make a prop optional.
//   children: ReactNode;
// };

const InfoBox: FC<InfoBoxProps> = ({ children, severity, mode }) => {
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
