import light from "./light";

const dark: typeof light = {
  ...light,
  colors: {
    ...light.colors,

    grandient: "linear-gradient(#485BFF, #835AFD)",
    grandient2: "linear-gradient(45deg, #FBFF48, #A2FF59)",
    black: "#737380",
    background: "#2F323A",
    backgroundAlter: "#131416",
    headerLine: "#29292E",
    backgrounDrawer: "rgba(30, 29, 43, 0.95)",
  },
};

export default dark;
