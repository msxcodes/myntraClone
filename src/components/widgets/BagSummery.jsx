import React from "react";
import { useSelector } from "react-redux";
import useFilter from "../hooks/useFliter";

function BagSummery() {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);

  const finalItems = useFilter(items, bagItems);
  let totalPrice = 0;
  let totalDiscount = 0;
  let convinenceFee = 99;

  finalItems.forEach((item) => {
    totalPrice += item.original_price;
    totalDiscount += item.original_price - item.current_price;
  });

  let finalPayment = totalPrice - totalDiscount + convinenceFee;

  const summaryObj = {
    totalItem: bagItems.length,
    totalMRP: totalPrice,
    totalDiscount: totalDiscount,
    finalPayment,
    convinenceFee,
  };

  return (
    <div className="bag-summary mb-5">
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({summaryObj.totalItem} Items){" "}
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{summaryObj.totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{summaryObj.totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">{summaryObj.convinenceFee}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{summaryObj.finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
}

export default BagSummery;
