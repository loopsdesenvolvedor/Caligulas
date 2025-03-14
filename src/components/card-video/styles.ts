"use client";

import { breakAt } from "@/styles/BreakpointsSizes";
import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: 30.1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  img {
    width: 100%;
    object-fit: cover;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }
  div {
    margin: 0;
    h2 {
      margin: 1.2rem 0 0 0;
      padding: 0;
      a {
        font-size: 1.4rem;
        font-weight: 400;
        color: inherit;
        text-decoration: none;
      }
    }
  }

  ${breakAt("sm")} {
    max-width: 38.8rem;
  }
`;

export const CardInfo = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.8;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.6rem;
  }

  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1.4rem;
    font-size: 1.2rem;

    span {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 0.6rem;
      opacity: 0.8;
    }
  }
`;
