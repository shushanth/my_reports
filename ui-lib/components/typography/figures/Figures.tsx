import styles from "./figures.module.scss";

enum FormatEnumCount {
  billion = 8,
  million = 6,
  kilo = 5,
}
enum CountsEnumDividers {
  billion = 10000000,
  million = 10000000,
  kilo = 10000,
}

enum EntityEnum {
  dollar = "$",
  million = "M",
  billion = "B",
  kilo = "k",
}

type FigurePrefix = "dollar";

export type FigureProps = {
  value: number;
  formatter?: boolean;
  prefix?: FigurePrefix;
};

export default function ({ value, formatter = true, prefix }: FigureProps) {
  const figureRoundVal = (): string => {
    if (!formatter) {
      return `${value.toLocaleString()}`;
    }
    const mediaCount = `${value}`.length;
    const getRounderValue = () => {
      const config = {
        [`${mediaCount > FormatEnumCount.billion}`]: () =>
          `${parseFloat(`${value / CountsEnumDividers.billion}`).toFixed(2)}${
            EntityEnum.million
          }`,
        [`${
          mediaCount > FormatEnumCount.million &&
          mediaCount <= FormatEnumCount.billion
        }`]: () =>
          `${parseFloat(`${value / CountsEnumDividers.million}`).toFixed(2)}${
            EntityEnum.million
          }`,
      };
      return (
        config["true"]?.() ||
        `${parseFloat(`${value / CountsEnumDividers.kilo}`).toFixed(2)}${
          EntityEnum.kilo
        }`
      );
    };

    return prefix
      ? `${EntityEnum[prefix]}${getRounderValue()}`
      : `${getRounderValue()}`;
  };

  return (
    <div className={`${styles.figures}`}>
      <p className={`${styles.figures}_value`}>{figureRoundVal()}</p>
    </div>
  );
}
