import classes from "./CurrencyStats.module.scss";
import { PriceTimeChange } from "../../cards/coinCard/PriceTimeChange";
//types
import { CurrencyItem } from "../../../types/types";

export const CurrencyStats = (props: { item: CurrencyItem }) => {
  const {
    image,
    name,
    symbol,
    current_price,
    market_cap_rank,
    price_change_24h,
    market_cap,
    ath,
    ath_change_percentage,
    last_updated,
    price_change_1h,
    price_change_7d,
    total_volume,
  } = props.item;

  const interNumberFormat = new Intl.NumberFormat("en-US");

  return (
    <div className={classes["box-container"]}>
      <div className={classes.header}>
        <div className={classes["main-title"]}>
          <img src={image} />
          <p>{name}</p>
          <p>{symbol.toUpperCase()}</p>
        </div>

        <p className={classes.rank}>Rank #{market_cap_rank}</p>

        <div className={classes["price-data"]}>
          <p className={classes.head}>
            {name} Price ({symbol.toUpperCase()})
          </p>
          <div className={classes["values-box"]}>
            <p className={classes.price}>
              {interNumberFormat.format(current_price) === "0"
                ? current_price.toFixed(7)
                : interNumberFormat.format(current_price)}
              $
            </p>
            <PriceTimeChange time={price_change_24h} classes={classes} />
          </div>
        </div>
      </div>

      <div className={classes.detials}>
        <div className={classes["first-box"]}>
          <div>
            <p> Market Cap:</p>{" "}
            <span>${interNumberFormat.format(market_cap)}</span>
          </div>
          <div>
            <p>All Time High:</p>
            <span>
              $
              {interNumberFormat.format(ath) === "0"
                ? ath.toFixed(7)
                : interNumberFormat.format(ath)}
            </span>
          </div>
          <div>
            <p>Price change from ATH:</p>
            <PriceTimeChange time={ath_change_percentage} classes={classes} />
          </div>
          <div className={classes["date-box"]}>
            <p>Last update date (UTC):</p>
            <span className={classes.date}>
              {last_updated.replace(
                /(\d{4})-(\d{2})-(\d{2})T(.{8}).*/,
                "$2.$3.$1, $4"
              )}
            </span>
          </div>
        </div>
        <div className={classes["second-box"]}>
          <div>
            Price change 1h:
            <PriceTimeChange time={price_change_1h} classes={classes} />
          </div>
          <div>
            Price change 24h:
            <PriceTimeChange time={price_change_24h} classes={classes} />
          </div>
          <div>
            Price change 7d:
            <PriceTimeChange time={price_change_7d} classes={classes} />
          </div>
          <div>
            Total volume:
            <span>{interNumberFormat.format(total_volume)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};