import styles from "./grid.module.scss";

export type GridProps = {
  children: Readonly<React.ReactNode>;
};

export default function Grid({ children }: GridProps) {
  return <div className={styles.grid}>{children}</div>;
}
