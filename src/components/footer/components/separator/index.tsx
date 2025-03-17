"use client";

import { breakAt } from "@/styles/BreakpointsSizes";
import styled from "styled-components";

const Separator = styled.span`
  margin: 1.5rem 0;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.border};

  ${breakAt("sm")} {
    display: none;
  }
`;

export default Separator;
