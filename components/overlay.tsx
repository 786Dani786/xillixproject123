import { MouseEvent, PropsWithChildren, useEffect, useRef } from "react";

interface OverlayProps {
  open: boolean;
  onClose: () => void;
  className?: string;
}
export const Overlay: React.FC<PropsWithChildren<OverlayProps>> = ({
  open,
  onClose,
  children,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    if (ref.current === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  const cls = `fixed top-0 h-screen w-screen z-40 bg-black/50 ${
    className || "flex items-center justify-center"
  }`;

  return (
    <div
      className={`${cls} ${open ? "left-0" : "hidden"}`}
      ref={ref}
      onClick={(e) => onClick(e)}
    >
      {children}
    </div>
  );
};
