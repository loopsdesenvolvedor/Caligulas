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

    .form-desktop {
      display: none;
    }

    ${breakAt("sm")} {
      height: 8rem;
      .form-mobile {
        display: none;
      }
      .form-desktop {
        display: flex;
      }
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  position: relative;
  input {
    display: flex;
    height: 3.8rem;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding-left: 1rem;
    outline: none;
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.text};
  }

  button {
    width: 12rem;
    height: 3.8rem;
    border-radius: 4px;
    cursor: pointer;
  }

  & [type="submit"] {
    background-color: transparent;
    border: none;
    width: 1.6rem;
    height: 1.6rem;
    position: absolute;
    right: 12rem;

    ${breakAt("sm")} {
      right: 1.8rem;
    }
  }
  & [type="button"] {
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.backgroundBlack80};
    border: 1px solid ${({ theme }) => theme.colors.backgroundBlack80};
    font-size: 1.4rem;
  }

  ${breakAt("sm")} {
    max-width: 34.8rem;
    height: 3.2rem;

    input {
      border-radius: 30px;
      padding-left: 1.8rem;
    }
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
    background-color: ${({ theme }) => theme.colors.backgroundBlack80};
    border: 1px solid ${({ theme }) => theme.colors.backgroundBlack80};

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
