import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import { useState } from "react";
import "reactjs-popup/dist/index.css";
import { Link, Outlet } from "react-router-dom";
import PaymentSucess from "./PaymentSucess";

export default function Component() {
  const cartItems = useSelector((store) => store.cart.items);
  const price = useSelector((store) => store.cart.cost);
  const [paymentDone, SetPaymentDone] = useState(false);
  const [itemArray, SetItemArray] = useState(cartItems);
  const obj = {};
  function arrayToObject() {
    for (let i = 0; i < itemArray.length; i++) {
      obj[itemArray[i].id] = { count: 0, details: itemArray[i] };
    }

    for (let i = 0; i < itemArray.length; i++) {
      obj[itemArray[i].id].count = obj[itemArray[i].id].count + 1;
    }
  }
  const restaurantDetails = useSelector((store) => store.restaurant.restaurant);
  arrayToObject();
  const [ItemObject, setItemObject] = useState(obj);

  return paymentDone ? (
    <PaymentSucess />
  ) : (
    <div className="flex h-screen bg-gray-100">
      <div className="flex flex-col w-1/2 p-8 bg-white">
        <div className="flex items-center mb-6">
          <CloudLightningIcon className="text-orange-500 w-6 h-6" />
          <h1 className="ml-2 text-lg font-semibold">
            {!paymentDone ? "SECURE CHECKOUT" : "ORDER RECEIVED"}
          </h1>
        </div>
        <div className="flex items-start mb-4">
          <MapPinIcon className="text-gray-600 w-6 h-6" />
          <div className="ml-4">
            <h2 className="text-lg font-semibold">Delivery address</h2>
            <p className="text-gray-600">Mars Planet, Sector 14, India</p>
            <p className="text-green-500">42 LightYear</p>
          </div>
          <button className="ml-auto" variant="secondary" onClick={() => {}}>
            CHANGE
          </button>
        </div>
        {!paymentDone ? (
          <div className="flex items-center mb-4">
            <WalletIcon className="text-gray-600 w-6 h-6" />
            <div className="ml-4">
              <h2 className="text-lg font-semibold">Choose payment method</h2>
            </div>
          </div>
        ) : (
          <></>
        )}
        {!paymentDone ? (
          <button
            className="bg-green-500 text-white w-full py-3 "
            onClick={() => {
              SetPaymentDone(true);
            }}
          >
            PROCEED TO PAY
          </button>
        ) : (
          <></>
        )}
      </div>
      <div className="w-1/2 bg-white p-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-semibold">
              {restaurantDetails.details.name}
            </h2>
            <p className="text-gray-400">
              {restaurantDetails.details.areaName === undefined
                ? ""
                : restaurantDetails.details.areaName}
            </p>
          </div>
          <div className="flex items-center">
            <HelpCircleIcon className="text-gray-600 w-6 h-6" />
            <p className="ml-2 text-gray-600">Help</p>
          </div>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-200px)]">
          {Object.entries(obj).map(([key, value]) => {
            return (
              <CartItems array={itemArray} info={{ ...value }} key={key} />
            );
          })}

          <div className="my-4">
            <input placeholder="Any suggestions? We will pass it on..." />
          </div>
          <div className="flex items-start mb-4">
            <input className="mr-2" id="no-contact" type="checkbox" />
            <label className="text-gray-600" htmlFor="no-contact">
              Opt in for No-contact Delivery
              <br />
              Unwell, or avoiding contact? Please select no-contact delivery.
              Partner will safely place the order outside your door (not for
              COD)
            </label>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <h3 className="text-lg font-semibold">TO PAY</h3>
          <p className="text-lg font-semibold">₹{price}</p>
        </div>
      </div>
    </div>
  );
}

function CloudLightningIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
      <path d="m13 12-3 5h4l-3 5" />
    </svg>
  );
}

function HelpCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function WalletIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
    </svg>
  );
}
