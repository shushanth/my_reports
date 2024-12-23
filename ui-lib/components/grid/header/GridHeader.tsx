import styles from "./GridHeader.module.scss";
import Label from "../../typography/labels/Label";

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
                <Label level="secondary" size="smallx">
                  {rData}
                </Label>
              </div>
            );
          })
        : null}
    </div>
  );
}
