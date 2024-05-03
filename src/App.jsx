import { Outlet } from "react-router-dom";
import Footer from "./components/widgets/Footer";
import Header from "./components/widgets/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { itemsAction } from "./components/store/itemsSlice";

function App() {
  const fetchStatus = useSelector((store) => store.fetching);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchingDone === true) return;

    let fetchingData = async () => {
      const response = await fetch(
        "https://myntrabackend-iq2f.onrender.com/items"
      );
      const { items } = await response.json();
      dispatch(itemsAction.initialItems(items[0]));
    };

    fetchingData();
  }, [fetchStatus]);

  return (
    <>
      <Header />
      {/* <Loader /> */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
