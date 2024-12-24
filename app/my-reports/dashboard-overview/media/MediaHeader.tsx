import * as Ui from "@/ui-lib/components";
import styles from "./media.module.scss";
type HeaderProps = {
  title: string;
};

export default function MediaHeader({ title }: HeaderProps) {
  return (
    <div className={`${styles.media_header}`}>
      <div className={`${styles.media_header}header`}>
        <Ui.Label level="secondary" size="xL">
          {title}
        </Ui.Label>
      </div>
      <div className={`${styles.media_header}action`}></div>
    </div>
  );
}
