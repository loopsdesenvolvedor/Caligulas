import { ReactNode } from "react";

export type ButtonType = {
  type: "button" | "submit";
  text?: string;
  icon?: ReactNode;
  onClick?: () => void;
};
