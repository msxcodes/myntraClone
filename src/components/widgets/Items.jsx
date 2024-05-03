import React from "react";
import { BsFillHandbagFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/bagSlice";

function Items({ item }) {
  const addHandler = () => {
    dispatch(bagAction.addToBag(item.id));
  };
  const removeHandler = () => {
    dispatch(bagAction.removeFromBag(item.id));
  };

  const bag = useSelector((state) => state.bag);

  const itemFound = bag.indexOf(item.id) >= 0;

  const dispatch = useDispatch();

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>

      {itemFound ? (
        <button className="btn-add-bag" onClick={removeHandler}>
          <MdDelete className="bagIcon white" size={16} /> Remove Item
        </button>
      ) : (
        <button className="btn-add-bag" onClick={addHandler}>
          <BsFillHandbagFill className="bagIcon" /> Add to Bag
        </button>
      )}
    </div>
  );
}

export default Items;
