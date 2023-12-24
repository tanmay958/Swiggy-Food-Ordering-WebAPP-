import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantDetails = ({ data }) => {
  return (
    <div className="py-6">
      <div className="flex items-center space-x-3">
        <h1 className="text-3xl font-bold text-gray-900">{data.name} </h1>
        <span className="text-sm text-gray-500">{data.cuisines.join(",")}</span>
      </div>

      <div className="mt-4 flex items-center">
        <div className="flex items-center"></div>
        <div className="ml-2 flex items-start">
          <IndianRupeeIcon className="h-5 w-5 text-gray-400" />
          <span className="ml-1 font-medium text-gray-900">
            {data?.costForTwoMessage}
          </span>
        </div>
        <div className="ml-auto flex items-center">
          <StarIcon className="h-5 w-5 text-yellow-400" />
          <span className="ml-1 font-medium text-gray-900">
            {data?.avgRatingString}
          </span>
          <span className="ml-1 text-sm text-gray-500">
            {data?.totalRatingString}
          </span>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6"></div>
    </div>
  );
};

function IndianRupeeIcon(props) {
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
      <path d="M6 3h12" />
      <path d="M6 8h12" />
      <path d="m6 13 8.5 8" />
      <path d="M6 13h3" />
      <path d="M9 13c6.667 0 6.667-10 0-10" />
    </svg>
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

export default RestaurantDetails;
