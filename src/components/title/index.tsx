import * as S from "./styles";

import { TitleType } from "@/@types/Title";
import { JSX } from "react";

const Title = ({ tag, children }: TitleType) => {
  const Heading = tag as keyof JSX.IntrinsicElements;
  return (
    <S.Root>
      <Heading>{children}</Heading>
    </S.Root>
  );
};

export default Title;
