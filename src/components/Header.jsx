import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
      <div className="nav flex items-center justify-between border-b border-gray-200 pb-5">
        <div className="nav-item1 flex items-center space-x-4">
          <Link className="link " to="/">
            <img
              className="text-orange-500 h-20 w-20 "
              src="https://cdn.worldvectorlogo.com/logos/zomato-1.svg"
              alt="Description of the image"
            />
          </Link>

          <span className="text-gray-500">Bengaluru, Karnataka, India</span>
        </div>
        <div className="flex space-x-4">
          <h3 className="">
            <Link className="text-gray-500 h-6 w-6" to={"/account"}>
              Account
            </Link>
          </h3>
          <h3>
            <Link className="text-gray-500 h-6 w-6" to="/orders">
              Orders
            </Link>
          </h3>
          {/* need to subscribe to the store */}
          <h3>
            <Link className="text-gray-500 h-6 w-6" to="/cart">
              Cart <span>{cartItems.length}</span>
            </Link>
          </h3>
          <h3>
            <Link className="text-gray-500 h-6 w-6" to="/instamart">
              Instamart
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};
