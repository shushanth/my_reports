import styles from "./gridFooter.module.scss";

type GridFooterProps = {
  children: Readonly<React.ReactNode>;
};

export default function GridFooter({ children }: GridFooterProps) {
  return <div className={styles.grid_footer}>{children}</div>;
}
