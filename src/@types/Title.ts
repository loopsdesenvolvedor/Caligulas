import { ReactNode } from "react";

export type TitleType = {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
};
