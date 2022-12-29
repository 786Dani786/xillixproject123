import { CSSProperties, PropsWithChildren } from "react";
import { Overlay } from "./overlay";

interface SideBarProps {
  open: boolean;
  onClose: () => void;
  contentPosition: "right" | "left";
  width?: number;
}

export const SideBar: React.FC<PropsWithChildren<SideBarProps>> = ({
  open,
  onClose,
  contentPosition,
  width,
  children,
}) => {
  let className = `flex flex-row items-stretch`;
  if (contentPosition === "right") className = `${className} justify-end`;
  else className = `${className} justify-start`;

  const styleOverride: CSSProperties = {};
  if (width) {
    styleOverride.width = width;
  }

  return (
    <Overlay open={open} onClose={onClose} className={className}>
      <div
        className="w-100 bg-white relative flex flex-col px-5 pt-4 items-stretch"
        style={styleOverride}
      >
        {children}
      </div>
    </Overlay>
  );
};
