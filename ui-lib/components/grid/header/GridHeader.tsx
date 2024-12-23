import styles from "./GridHeader.module.scss";

export type GridHeader = {
  data: string[];
};

export default function GridHeader({ data }: GridHeader) {
  return (
    <div className={`${styles.grid_header}`}>
      {data.length
        ? data.map((rData, index) => {
            return (
              <div key={index} className={`${styles.grid_header}_item`}>
                {rData}
              </div>
            );
          })
        : null}
    </div>
  );
}
