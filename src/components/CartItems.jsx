import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { useSelector } from "react-redux";

export default function CartItems({ info, array }) {
  const [listItems, setListItems] = useState(array);
  const { details, count } = info;
  const [countOfItem, setCountOfItem] = useState(count);
  const cartItems = useSelector((store) => store.cart.items);
  useEffect(() => {
    setListItems(cartItems);
  }, [cartItems]);

  const dispatch = useDispatch();
  const handleAddItem = (data) => {
    dispatch(addItem(data));
  };
  const handleRemoveItem = (data) => {
    dispatch(removeItem(data));
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-gray-800 font-semibold">{details.name}</h3>
        <div className="flex items-center">
          <button
            variant="secondary"
            onClick={() => {
              if (countOfItem > 0) {
                setCountOfItem(countOfItem - 1);
                handleRemoveItem({
                  prevState: listItems,
                  toBeDeleted: details,
                });
              }
            }}
          >
            -
          </button>
          <p className="mx-2">{countOfItem}</p>
          <button
            variant="secondary"
            onClick={() => {
              setCountOfItem(countOfItem + 1);
              handleAddItem(details);
            }}
          >
            +
          </button>

          <p className="ml-4 font-semibold">
            ₹
            {countOfItem *
              ((details.price === undefined
                ? details.defaultPrice
                : details.price) /
                100)}
          </p>
        </div>
      </div>
      <Link className="text-blue-500" href="#">
        {`Customize >`}
      </Link>
    </div>
  );
}
