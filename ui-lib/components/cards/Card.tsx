import React from "react";
import "./card.scss";

type CardType = "default" | "primary";

type CardProps = {
  type?: CardType;
  headerContent?: Readonly<React.ReactNode>;
  bodyContent?: Readonly<React.ReactNode>;
  children?: Readonly<React.ReactNode>;
};

export default function Card({
  type = "default",
  headerContent = null,
  bodyContent = null,
  children = null,
}: CardProps) {
  return (
    <div className={`card card_${type}`}>
      {bodyContent && <div className="card_header">{headerContent}</div>}
      {headerContent && <div className="card_content">{bodyContent}</div>}
      {children && children}
    </div>
  );
}
