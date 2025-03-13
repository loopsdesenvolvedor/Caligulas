"use client";

import { breakAt } from "@/styles/BreakpointsSizes";
import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  div {
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ContentLeft = styled.div`
  max-width: 15.6rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.3s ease;
    padding: 0;
    cursor: pointer;
  }
`;

export const ContentRight = styled.div`
  max-width: 13.3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.border};
    cursor: pointer;
  }

  & button:first-child {
    width: 3.6rem;
    height: 3.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  & button:last-child {
    width: 8rem;
    height: 3.6rem;
    gap: 0.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};
    border-radius: 3rem;
    background-color: #212121;
    border: ${({ theme }) => theme.colors.backgroundHover};

    &:hover {
      background-color: ${({ theme }) => theme.colors.red};
      color: #fff;
    }
  }

  ${breakAt("sm")} {
    & button:first-child {
      display: none;
    }
  }
`;
