import classNames from "classnames";
import styles from "./grid.module.scss";

export type GridProps = {
  children: Readonly<React.ReactNode>;
};

export default function ({ children }: GridProps) {
  return <div className={styles.grid}>{children}</div>;
}
