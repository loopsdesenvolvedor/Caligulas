import { StaticImageData } from "next/image";

export type CardVideoType = {
  title: string;
  image: string | StaticImageData;
  views?: string;
  rating?: string;
  author: string;
};
