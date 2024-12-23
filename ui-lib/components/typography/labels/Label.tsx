"use client";
import classNames from "classnames";
import styles from "./label.module.scss";
export type LabelProps = {
  children: Readonly<React.ReactNode>;
  level: "primary" | "secondary" | "";
  size: "small" | "xL" | "smallx";
};

export default function Label({ children, level, size }: LabelProps) {
  return (
    <div className={`${styles.label}`}>
      <p
        className={classNames({
          [`${styles.label}_level--primary`]: level === "primary",
          [`${styles.label}_level--secondary`]: level === "secondary",
          [`${styles.label}_size--small`]: size === "small",
          [`${styles.label}_size--smallx`]: size === "smallx",
          [`${styles.label}_size--xL`]: size === "xL",
        })}
      >
        {children}
      </p>
    </div>
  );
}
