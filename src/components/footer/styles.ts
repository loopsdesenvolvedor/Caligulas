"use client";

import { breakAt } from "@/styles/BreakpointsSizes";
import styled from "styled-components";

export const Footer = styled.footer`
  margin-top: 2.4rem;
  padding-top: 2.4rem;
  width: 100%;
  height: auto;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;

  ul {
    width: 100%;
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: flex-end;

    .discord-social {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    .x-social {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    li {
      a {
        width: 5.1rem;
        height: 3.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid ${({ theme }) => theme.colors.border};
      }
    }
  }
`;

export const ContentLinks = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    h3 {
      font-size: 1.8rem;
      font-weight: 600;
      text-transform: uppercase;
      position: relative;
      padding-left: 0.6rem;

      &::before {
        content: "";
        width: 0.2rem;
        height: 1.4rem;
        background-color: ${({ theme }) => theme.colors.yellow};
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        margin: auto 0;
      }
    }
    ul {
      padding: 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      margin: 0;

      & a {
        color: ${({ theme }) => theme.colors.text};
        font-size: 1.6rem;
        text-decoration: none;
        opacity: 0.4;
      }
    }
  }

  ${breakAt("sm")} {
    flex-direction: row;
    div {
      ul {
        gap: 1.4rem;

        & a {
          font-size: 1.4rem;
        }
      }
    }
  }
`;

export const ContentCopyright = styled.div`
  width: 100%;
  height: 5.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  span {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    opacity: 0.6;

    a {
      font-size: inherit;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.blue};
      text-decoration: none;
    }
  }

  ${breakAt("sm")} {
    margin-top: 2.4rem;
  }
`;
