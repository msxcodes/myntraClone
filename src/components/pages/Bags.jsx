import React from "react";
import BagSummery from "../widgets/BagSummery";
import BagItem from "../widgets/BagItem";
import { useSelector } from "react-redux";
import useFilter from "../hooks/useFliter";

function Bags() {
  const items = useSelector((state) => state.items);
  const bagItems = useSelector((state) => state.bag);

  const finalItems = useFilter(items, bagItems);

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item) => (
            <BagItem item={item} key={item.id} />
          ))}
        </div>
        <div className="bag-summary">
          <BagSummery />
        </div>
      </div>
    </main>
  );
}

export default Bags;
