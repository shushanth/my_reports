"use client";
import { redirect } from "next/navigation";
import * as Ui from "../ui-lib/components";

export default function () {
  const toReports = () => redirect("my-reports");
  return (
    <div>
      Home
      <Ui.Button
        level="primary"
        size="medium"
        shape="straight"
        onSubmit={toReports}
      >
        My Reports
      </Ui.Button>
    </div>
  );
}
