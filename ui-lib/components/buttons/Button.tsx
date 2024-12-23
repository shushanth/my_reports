import classNames from "classnames";
import styles from "./Button.module.scss";

type ButtonProps = {
  shape?: "rounded" | "straight";
  level: "primary" | "secondary";
  size: "small" | "medium" | "large";
  children: Readonly<React.ReactNode>;
  disabled?: boolean;
  variant?: "light" | "bold";
  onSubmit?: (args: any) => void;
};
export default function Button({
  shape = "straight",
  level,
  size,
  disabled = false,
  variant,
  children,
  onSubmit,
}: ButtonProps) {
  return (
    <div
      className={classNames({
        [`${styles.button}`]: true,
        [`${styles.button}_primary`]: level === "primary",
        [`${styles.button}_secondary`]: level === "secondary",
        [`${styles.button}_small`]: size === "small",
        [`${styles.button}_medium`]: size === "medium",
        [`${styles.button}_large`]: size === "large",
        [`${styles.button}--rounded`]: shape === "rounded",
        [`${styles.button}--straight`]: shape === "straight",
        [`${styles.button}--light`]: variant === "light",
        [`${styles.button}--bold`]: variant === "bold",
      })}
      onClick={onSubmit}
    >
      <button
        className={classNames({
          [`${styles.disabled}`]: disabled,
        })}
      >
        {children}
      </button>
    </div>
  );
}
