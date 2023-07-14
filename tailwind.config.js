/** @type {import('tailwindcss').Config} */

const generateColorClass = (variable) => {
  return ({ opacityValue }) =>
    opacityValue ? `rgba(var(--${variable}), ${opacityValue})` : `rgb(var(--${variable}))`;
};

const textColor = {
  default: generateColorClass("text-default"),
  info: generateColorClass("text-info"),
  comment: generateColorClass("text-comment"),
};

const backgroundColor = {
  primary: generateColorClass("bg-primary"),
  secondary: generateColorClass("bg-secondary"),
  tertiary: generateColorClass("bg-tertiary"),
};

const colors = {
  pink: generateColorClass("color-pink"),
  purple: generateColorClass("color-purple"),
  orange: generateColorClass("color-orange"),
  error: generateColorClass("color-error"),
  success: generateColorClass("color-success"),
};

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      textColor,
      backgroundColor,
      colors,
      // colors: {
      //   // prominent design elements: headers
      //   primary: "#ff79c6",
      //   // secondary buttons, highlights, or accents
      //   secondary: "#bd93f9",
      //   // icons, badges, or interactive elements
      //   accent: "#FFB86C",
      //   // background or base color
      //   neutral: "#282a36",
      //   selection: "#44475a",
      //   // comment: "#6272A4",
      //   default: "#383a59",
      //   // text or subtle dividers
      //   base: "#F8F8F2",
      //   info: "#8be9fd",
      //   success: "#50FA7B",
      //   warning: "#F1FA8C",
      //   error: "#ff5555",
      //   "light-primary": "#6fe897",
      //   "light-secondary": "#cf6cd8",
      //   "light-accent": "#8a9ad8",
      //   "light-neutral": "#f7f7f8",
      //   "light-default": "#c1c1c8",
      //   "light-base": "#25192e",
      //   "light-info": "#7487d2",
      //   "light-success": "#15562d",
      //   "light-warning": "#ea991f",
      //   "light-error": "#ef6c70",
      // },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
