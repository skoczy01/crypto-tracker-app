import classes from "./TrendingCoinCard.module.scss";
import Link from "next/link";
import { getWordCount } from "../../../helpers/wordCount";
import { memo } from "react";

interface Props {
  id: string;
  percentage: number;
  number: number;
  name: string;
  alias: string;
  image: string;
}

const TrendingCoinCard = (props: Props) => {
  const valueStyle =
    props.percentage <= 0
      ? `${classes.percentage} ${classes.decr}`
      : `${classes.percentage} ${classes.incr}`;
  const breakWordClass =
    getWordCount(props.name) >= 2
      ? `${classes.name} ${classes["word-wrap"]}`
      : `${classes.name} ${classes["word-break"]}`;
  return (
    <div className={classes["curr-box"]}>
      <div className={classes["curr-list"]}>
        <span className={classes.rank}>{props.number}</span>
        <Link href={`/currency/${props.id}`}>
          <a>
            <div className={classes["coin-wrapper"]}>
              <img src={props.image} />
              <p className={breakWordClass}>
                {props.name}{" "}
                <span className={classes.alias}>
                  - {props.alias.toUpperCase()}
                </span>
              </p>{" "}
            </div>
          </a>
        </Link>
      </div>
      <div className={valueStyle}>
        <p>{props.percentage ? props.percentage.toFixed(2) : "No data"}%</p>
      </div>
    </div>
  );
};
export default memo(TrendingCoinCard);
