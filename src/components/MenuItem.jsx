import { cdn } from "../utils/config";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const MenuItem = ({ details }) => {
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem(details));
  };
  return (
    <div className="bg-white p-4 rounded-lg shadow flex justify-between items-start">
      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-900">{details.name}</h3>
        <p className="text-gray-700">₹{details.price / 100}</p>
        <p className="text-sm text-gray-600 mt-1">{details.description}</p>
      </div>
      <div className="flex-col ml-4 items-center">
        <img
          src={cdn + details.imageId}
          className="rounded-lg w-24 h-24 object-cover"
          height="100"
          onError={(e) => {
            e.target.style.display = "none"; // Hide the image on error
          }}
          style={{
            aspectRatio: "100/100",
            objectFit: "cover",
          }}
          width="100"
        />
        <button
          onClick={() => {
            handleAddItem();
          }}
          className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-2 border border-green-500 hover:border-transparent rounded"
        >
          ADD
        </button>
      </div>
    </div>
  );
};
export default MenuItem;
