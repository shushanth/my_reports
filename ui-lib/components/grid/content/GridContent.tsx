import classNames from "classnames";
import styles from "./gridContent.module.scss";
import React from "react";

export type ContentData = {
  [key: string]: unknown;
};
export type GridContentProps = {
  type?: "primary" | "default";
  data: ContentData[];
};

export const GridContent = ({
  type = "default",
  data = [],
}: GridContentProps) => {
  const rowData = data.map((rData) => Object.values(rData));
  return (
    <div
      className={classNames({
        [`${styles.grid_content}`]: true,
        [`${styles.grid_content}_default--layout`]: type === "default",
      })}
    >
      {rowData.length
        ? rowData.map((rData, index) => {
            return (
              <div
                key={index}
                className={classNames({
                  [`${styles.grid_content}_row`]: true,
                  [`${styles.grid_content}_row_primary`]: type === "primary",
                  [`${styles.grid_content}_row_default`]: type === "default",
                })}
              >
                {rData.map((item: any, rIndex) => {
                  return (
                    <div
                      key={rIndex}
                      className={`${styles.grid_content}_row_${type}_item`}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            );
          })
        : null}
    </div>
  );
};
