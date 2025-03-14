"use client";

import styled from "styled-components";

export const Root = styled.div`
  margin: 2.4rem 0;

  h1 {
    font-size: 1.8rem;
    font-weight: 400;

    span {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;
