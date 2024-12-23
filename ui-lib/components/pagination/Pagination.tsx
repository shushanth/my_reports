"use client";
import styles from "./pagination.module.scss";
import Button from "../buttons/Button";
import classNames from "classnames";

export type PaginationProps = {
  count: number;
  currentPage: number;
  showPrevNExtBtn?: boolean;
  onPrevClick?: () => void;
  onNextClick?: () => void;
  onCountClick: (count: number) => void;
};

export default function Pagination({
  count,
  currentPage,
  showPrevNExtBtn = true,
  onPrevClick,
  onNextClick,
  onCountClick,
}: PaginationProps) {
  const countPageBtns = (): React.ReactNode => {
    return Array.from({ length: count }, (_, index) => {
      const pageCount = index + 1;
      const isActive = pageCount === currentPage;
      return (
        <div
          key={index}
          onClick={() => onCountClick(pageCount)}
          className={classNames({
            [`${styles.pagination}_page_btn_count`]: true,
            [`${styles.pagination}_page_btn_count--active`]: isActive,
          })}
        >
          {pageCount}
        </div>
      );
    });
  };
  return (
    <div className={`${styles.pagination}`}>
      {showPrevNExtBtn ? (
        <div
          className={classNames({
            [`${styles.pagination}_prev`]: true,
            [`${styles.pagination}_prev_disabled`]: currentPage === 1,
          })}
        >
          <Button
            level="primary"
            size="small"
            variant="bold"
            onSubmit={onPrevClick}
          >
            Previous
          </Button>
        </div>
      ) : null}
      <div className={`${styles.pagination}_page_btn`}>{countPageBtns()}</div>
      {showPrevNExtBtn ? (
        <div
          className={classNames({
            [`${styles.pagination}_next`]: true,
            [`${styles.pagination}_next_disabled`]: currentPage === count,
          })}
        >
          <Button
            level="primary"
            size="small"
            variant="bold"
            onSubmit={onNextClick}
          >
            Next
          </Button>
        </div>
      ) : null}
    </div>
  );
}
