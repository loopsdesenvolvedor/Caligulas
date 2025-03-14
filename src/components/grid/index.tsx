"use client";

import styled from "styled-components";
import { GridType } from "@/@types/Grid";
import { breakAt } from "@/styles/BreakpointsSizes";

const Grid = styled.div<GridType>`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.2rem;

  ${breakAt("sm")} {
    grid-template-columns: repeat(${(props) => props.$sm}, 1fr);
  }
`;

export default Grid;
