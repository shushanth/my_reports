import * as Ui from "../../../../ui-lib/components";
import styles from "./links.module.scss";

type LinksHeaderProps = {
  title: string;
};

export default function LinksHeader({ title }: LinksHeaderProps) {
  return (
    <div className={`${styles.media_header}`}>
      <div className={`${styles.media_header}header`}>
        <Ui.Label level="secondary" size="xL">
          {title}
        </Ui.Label>
      </div>
    </div>
  );
}
