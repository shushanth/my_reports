"use client";
import classNames from "classnames";
import styles from "./label.module.scss";
export interface LabelProps {
  children: Readonly<React.ReactNode>;
  level: "primary" | "secondary";
  size: "small" | "medium" | "large" | "xL" | "xxL" | "xxxL";
}

export default function ({ children, level, size }: LabelProps) {
  return (
    <div className={`${styles.label}`}>
      <p
        className={classNames({
          [`${styles.label}_level--primary`]: level === "primary",
          [`${styles.label}_level--secondary`]: level === "secondary",
          [`${styles.label}_size--small`]: size === "small",
          [`${styles.label}_size--medium`]: size === "medium",
          [`${styles.label}_size--large`]: size === "large",
          [`${styles.label}_size--xL`]: size === "xL",
          [`${styles.label}_size--xxxL`]: size === "xxxL",
        })}
      >
        {children}
      </p>
    </div>
  );
}
