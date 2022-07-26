import { useEffect } from "react";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { watchlistActions } from "../../store/watchlist/watchlist-slice";
import { PropsChildren } from "../../types/types";

export const RootActions = ({ children }: PropsChildren) => {
  const dispatch = useDispatch<AppDispatch>();

  const data = useSelector((state: RootState) => state.watchlist.watchIds);

  useEffect(() => {
    const local = localStorage.getItem("watchlist");
    if (local !== null) {
      dispatch(watchlistActions.setIds(JSON.parse(local)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(data));
  }, [data]);
  return <>{children}</>;
};
