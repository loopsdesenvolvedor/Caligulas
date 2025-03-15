"use client";

import { breakAt } from "@/styles/BreakpointsSizes";
import styled from "styled-components";

export const Root = styled.section`
  margin: 2.4rem 0;
  width: 100%;
  height: auto;
`;

export const Content = styled.section`
  width: 100%;
  max-width: 38.8rem;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${breakAt("sm")} {
    margin: 0 auto;
  }

  a {
    width: 3.6rem;
    height: 3.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 50%;
  }

  & :first-child,
  :last-child {
    width: auto;
    padding: 0 1.8rem;
    border-radius: 50px;
  }

  .selected {
    background-color: ${({ theme }) => theme.colors.red};
    border: 1px solid ${({ theme }) => theme.colors.red};
  }
`;
