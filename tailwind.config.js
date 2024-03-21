import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php", "./storage/framework/views/*.php", "./resources/views/**/*.blade.php", "./resources/js/**/*.jsx"],

  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#f1fde8",
          "100": "#dffacd",
          "200": "#c2f5a1",
          "300": "#9aeb6b",
          "400": "#78de40",
          "500": "#56c31f",
          "600": "#409c14",
          "700": "#327714",
          "800": "#2c5e16",
          "900": "#275017",
          "950": "#102c07",
          "1000": "#030b00",
        },
        secondary: {
          "50": "#f5f8f8",
          "100": "#dcebe7",
          "200": "#b9d6ce",
          "300": "#8fb9b1",
          "400": "#679a90",
          "500": "#4d7f76",
          "600": "#3c655f",
          "700": "#33524e",
          "800": "#2c4341",
          "900": "#283937",
          "950": "#13201f",
        },
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        impact: ["Impact", ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [forms],
};
