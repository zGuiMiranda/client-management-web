import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        height: "100vh",
        "#root": {
          height: "100%",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
        },
      },
    },
  },
  breakpoints: {
    xxs: "16em",
    xs: "20em",
    sm: "30em",
    md: "48em",
    lmd: "58em",
    lg: "62em",
    lgg: "68em",
    xl: "80em",
  },
});

export default customTheme;
