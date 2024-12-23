import * as Ui from "../../../../ui-lib/components";
import styles from "./media.module.scss";

type ContentProps = {
  mediaContent: number;
  type?: "dollar";
};

export default function MediaContent({ mediaContent, type }: ContentProps) {
  return (
    <div className={`${styles.media_content}`}>
      <div className={`${styles.media_content}content`}>
        <Ui.Figures value={mediaContent} prefix={type} />
      </div>
      <div className={`${styles.media_content}_action`}>
        <Ui.Button shape="rounded" size="small" level="secondary">
          View Links
        </Ui.Button>
      </div>
    </div>
  );
}
