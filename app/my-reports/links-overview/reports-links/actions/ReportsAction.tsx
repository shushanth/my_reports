import * as Ui from "../../../../../ui-lib/components";
import styles from "./reportsAction.module.scss";

export default function ReportsAction() {
  return (
    <div className={styles.report_action}>
      <div className={`${styles.report_action}_filters`}>
        <Ui.ButtonGroup overrideClass="override">
          <Ui.Button
            variant="light"
            shape="straight"
            size="medium"
            level="primary"
          >
            Filters
          </Ui.Button>
          <Ui.Button
            variant="light"
            shape="straight"
            size="medium"
            level="primary"
          >
            Platform
          </Ui.Button>
          <Ui.Button
            variant="light"
            shape="straight"
            size="medium"
            level="primary"
          >
            Applied
          </Ui.Button>
          <Ui.Button
            variant="light"
            shape="straight"
            size="medium"
            level="primary"
          >
            Month
          </Ui.Button>
        </Ui.ButtonGroup>
      </div>

      <div className={`${styles.report_action}_action`}>
        <Ui.Button
          variant="light"
          shape="rounded"
          size="medium"
          level="primary"
        >
          Report a Website
        </Ui.Button>
        <Ui.Button
          variant="light"
          shape="rounded"
          size="medium"
          level="primary"
        >
          Download All
        </Ui.Button>
      </div>
    </div>
  );
}
