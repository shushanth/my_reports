import classNames from "classnames";
import styles from "./ButtonGroup.module.scss";

export type ButtonGroupProps = {
  overrideClass?: "override" | "";
  children: Readonly<React.ReactNode>;
};

export default function ({ children, overrideClass = "" }: ButtonGroupProps) {
  return (
    <div
      className={classNames({
        [`${styles.button_group}`]: true,
        [`${styles.button_group}_${overrideClass}`]: true,
      })}
    >
      {children}
    </div>
  );
}
