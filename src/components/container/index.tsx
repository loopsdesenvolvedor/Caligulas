"use client";

import { breakAt } from "@/styles/BreakpointsSizes";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 0 2rem;

  ${breakAt("sm")} {
    max-width: 788px;
    padding: 0 1rem;
  }
`;

export default Container;
