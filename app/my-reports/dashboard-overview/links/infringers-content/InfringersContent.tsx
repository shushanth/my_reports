import * as Ui from "@/ui-lib/components";
import styles from "./infringersContent.module.scss";

type InfringersData = {
  domain: string;
  count: number;
};

type InfringersContentProps = {
  data: InfringersData[];
};

export default function InfringersContent({ data }: InfringersContentProps) {
  return (
    <div className={`${styles.infringers_content}`}>
      <Ui.GridContent type="primary" data={data} />
    </div>
  );
}
