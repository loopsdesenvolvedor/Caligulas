"use client";

export const theme = {
  colors: {
    red: "#A90015",
    yellow: "#ffc107",
    blue: "#4C7EDB",
    background: "#12191F",
    backgroundHover: "#212121",
    text: "#fff",
    textLightWhite: "rgba(255,255,255,.8)",
    textLightBlack: "rgba(51,51,51,.8)",
    border: "rgba(255,255,255,.06)",
  },
  fonts: {
    body: "'Poppins', sans-serif",
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "32px",
  },
};

export type Theme = typeof theme;
