import * as Ui from "@/ui-lib/components";
import styles from "./removedContent.module.scss";

export type RemovedContentProps = {
  removed: number;
  submitted: number;
};

export default function RemovedContent({
  removed,
  submitted,
}: RemovedContentProps) {
  const getChartData = () => {
    return [
      {
        entity: "Links Found and Removed",
        value: removed,
      },
      {
        entity: "Your Submitted Links",
        value: submitted,
      },
    ];
  };
  return (
    <div className={`${styles.removed_content}`}>
      <div className={`${styles.removed_content}_info`}>
        <Ui.Figures value={removed} formatter={false} />
        <div className={`${styles.removed_content}_info--details`}>
          <Ui.Label size="smallx" level="primary">
            <span
              className={`${styles.removed_content}_info--details_dot-primary`}
            ></span>
            Links Found and Removed
          </Ui.Label>
          <Ui.Label size="smallx" level="primary">
            <span
              className={`${styles.removed_content}_info--details_dot-secondary`}
            ></span>
            Your Submitted Links
          </Ui.Label>
        </div>
      </div>
      <div className={`${styles.removed_content}_graph`}>
        <Ui.DonutChart data={getChartData()} />
      </div>
    </div>
  );
}
