import styles from "./Text.module.scss";

interface IProps {
  children?: JSX.Element | string;
  color?: "dark" | "light" | "accent";
  fontSize?: "small" | "medium" | "large" | "huge";
  fontWeight?: "light" | "regular" | "bold";
  uppercase?: boolean;
  textAlign?: "left" | "center" | "right";
  verticalSpacing?: "small" | "large";
}

export const Text: React.FC<IProps> = ({
  children,
  color = "light",
  fontSize = "medium",
  fontWeight = "regular",
  uppercase = false,
  textAlign,
  verticalSpacing,
}) => {
  return (
    <p
      className={styles.text}
      style={{
        fontSize:
          fontSize === "small"
            ? "1rem"
            : fontSize === "medium"
            ? "1.75rem"
            : fontSize === "large"
            ? "1.5rem"
            : fontSize === "huge"
            ? "2.5rem"
            : "unset",
        fontWeight:
          fontWeight === "light"
            ? "200"
            : fontWeight === "regular"
            ? "400"
            : fontWeight === "bold"
            ? "900"
            : "400",

        textTransform: uppercase ? "uppercase" : "unset",
        color:
          color === "light"
            ? "var(--light)"
            : color === "accent"
            ? "var(--accent)"
            : "var(--dark)",
      }}
    >
      {children}
    </p>
  );
};
