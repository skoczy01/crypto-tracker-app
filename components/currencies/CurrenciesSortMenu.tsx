import { currenciesActions } from "../../store/currencies-slice";
import { watchlistActions } from "../../store/watchlist-slice";
import { useDispatch, useSelector } from "react-redux";
import classes from "./CurrenciesSortMenu.module.scss";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { RootState } from "../../store/store";

export const CurrenciesSortMenu = ({ page }: { page: string }) => {
  const [sortActiveIcon, setSortActiveIcon] = useState({
    sortBy: "market_cap_rank",
    sortTypeIcon: <FaAngleDown />,
  });
  const dispatch = useDispatch();

  const sortType = useSelector((state: RootState) =>
    page === "home"
      ? state.currencies.sortActive.sortType
      : state.watchlist.sortActive.sortType
  );
  const actions = page === "home" ? currenciesActions : watchlistActions;

  const sortByRankHandler = (name: string) => {
    return () => {
      setSortActiveIcon({
        sortBy: name,
        sortTypeIcon:
          sortType === "ascending" ? <FaAngleUp /> : <FaAngleDown />,
      });
      dispatch(
        actions.updateSort({
          sortType: sortType === "ascending" ? "descending" : "ascending",
          sortBy: name,
        })
      );
    };
  };

  return (
    <div className={classes.options}>
      <div></div>
      <div className={classes.rank}>
        <button
          className={classes["option-btn"]}
          onClick={sortByRankHandler("market_cap_rank")}
        >
          #
        </button>
        {sortActiveIcon.sortBy === "market_cap_rank" &&
          sortActiveIcon.sortTypeIcon}
      </div>
      <div className={classes.name}>
        <button
          className={classes["option-btn"]}
          onClick={sortByRankHandler("name")}
        >
          Name
        </button>
        {sortActiveIcon.sortBy === "name" && sortActiveIcon.sortTypeIcon}
      </div>
      <div></div>
      <div className={classes.price}>
        <button
          className={classes["option-btn"]}
          onClick={sortByRankHandler("current_price")}
        >
          Price{" "}
        </button>
        {sortActiveIcon.sortBy === "current_price" &&
          sortActiveIcon.sortTypeIcon}
      </div>
      <div className={classes.time}>
        <button
          className={classes["option-btn"]}
          onClick={sortByRankHandler("price_change_1h")}
        >
          1h %{" "}
        </button>
        {sortActiveIcon.sortBy === "price_change_1h" &&
          sortActiveIcon.sortTypeIcon}
      </div>
      <div className={classes.time}>
        <button
          className={classes["option-btn"]}
          onClick={sortByRankHandler("price_change_24h")}
        >
          24h %{" "}
        </button>
        {sortActiveIcon.sortBy === "price_change_24h" &&
          sortActiveIcon.sortTypeIcon}
      </div>
      <div className={classes.time}>
        <button
          className={classes["option-btn"]}
          onClick={sortByRankHandler("price_change_7d")}
        >
          7d %{" "}
        </button>
        {sortActiveIcon.sortBy === "price_change_7d" &&
          sortActiveIcon.sortTypeIcon}
      </div>
      <div className={classes["market-cap"]}>
        <button
          className={classes["option-btn"]}
          onClick={sortByRankHandler("market_cap")}
        >
          Market Cap{" "}
        </button>
        {sortActiveIcon.sortBy === "market_cap" && sortActiveIcon.sortTypeIcon}
      </div>
      <div className={classes.volume}>
        <button
          className={classes["option-btn"]}
          onClick={sortByRankHandler("total_volume")}
        >
          Total Volume
        </button>
        {sortActiveIcon.sortBy === "total_volume" &&
          sortActiveIcon.sortTypeIcon}
      </div>
    </div>
  );
};
