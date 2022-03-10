export const defaultSearchStyles = () => ({
  main: {
    display: "flex",
  },

  title: {
    marginRight: "35%",
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "1.2",
    textTransform: "uppercase",
    color: "var(--accent-background-color)",
  },

  container: {
    position: "relative",
    width: "499px",
    "&:hover svg": {
      fill: "var(--accent-color)",
      transition: "fill 0.3s ease",
    },
  },

  search: {
    width: "100%",
    height: "32px",
    padding: "6px 40px 6px 12px",
    border: "none",
    outline: "none",
    color: "var(--secondary-text-color)",
    backgroundColor: "var(--secondary-background-color)",

    "&:focus + span > svg": {
      fill: "var(--accent-color)",
      transition: "fill 0.3s ease",
    },

    "&, &::placeholder": {
      fontFamily: "Rubik",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "1.4",
    },

    "&:focus::-webkit-input-placeholder": {
      opacity: "0",
      transition: "opacity 0.3s ease",
    },
  },

  searchIcon: {
    position: "absolute",
    top: "8px",
    left: "471px",
  },
});
