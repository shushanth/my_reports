import styles from "./headersDateInfo.module.scss";
import * as Ui from "../../../ui-lib/components";

export default function HeaderDateInfo() {
  return (
    <div className={`${styles.headers_date}`}>
      <div className={`${styles.headers_date}_headers`}>
        <Ui.Heading title="My Reports" level="page" variant="h1" />
        <Ui.Label level="primary" size="small">
          A detailed report of content removal activities, including
          infringements, media removals, and insights into impacted value and
          top offenders.
        </Ui.Label>
      </div>
      <div className={`${styles.headers_date}_date`}>October 2024</div>
    </div>
  );
}
