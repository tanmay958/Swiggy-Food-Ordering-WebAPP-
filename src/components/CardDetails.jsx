import React from "react";
import { cdn } from "../utils/config";

function CardDetails({ rData }) {
  const {
    name,
    cloudinaryImageId,
    avgRating,
    cuisines,
    areaName,
    sla,
    aggregatedDiscountInfoV3,
  } = rData;

  return (
    <>
      <div className="overflow-hidden">
        <div className="mb-6 text-ellipsis overflow-hidden">
          <img
            alt="Burger and Fries"
            className="rounded-lg mb-2"
            height="200"
            src={cdn + cloudinaryImageId}
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
          {aggregatedDiscountInfoV3 === undefined ? (
            <></>
          ) : (
            <div className="bg-[#FF6B6B] text-white text-sm font-bold py-1 px-3 w-max rounded-full mb-2">
              {aggregatedDiscountInfoV3.header +
                " " +
                (aggregatedDiscountInfoV3.subHeader === undefined
                  ? ""
                  : aggregatedDiscountInfoV3.subHeader) +
                " " +
                (aggregatedDiscountInfoV3.footer === undefined
                  ? ""
                  : aggregatedDiscountInfoV3.footer)}
            </div>
          )}
          <div className="font-semibold">{name}</div>
          <div className="flex items-center text-sm my-1">
            <StarIcon className="text-yellow-400 w-4 h-4" />
            <span className="ml-1">{avgRating}</span>
            <span className="mx-2">•</span>
            <span>30 mins</span>
          </div>
          <div className="text-gray-500 text-sm">{cuisines.join(",")}</div>
          <div className="text-sm">{areaName}</div>
        </div>
      </div>
    </>
  );
}
function StarIcon(props) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default CardDetails;
