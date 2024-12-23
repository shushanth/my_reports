"use client";
import classnames from "classnames";
import styles from "./Heading.module.scss";

type HeadingLevel = "page" | "content";
type HeadingVariant = "h1";
export type HeadingProps = {
  title: string;
  level: HeadingLevel;
  variant: HeadingVariant;
};

export default function Heading({
  title,
  level = "page",
  variant = "h1",
}: HeadingProps) {
  return (
    <div className={styles.heading}>
      {level === "page" && (
        <h1 className={`${styles.heading}-level-${level}--${variant}`}>
          {title}
        </h1>
      )}

      {level === "content" && (
        <h1 className={classnames({ "variant-h1": true })}>{title}</h1>
      )}
    </div>
  );
}
