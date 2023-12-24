import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { url, cdn } from "../utils/config";
import { Link } from "react-router-dom";
import useCheckOnline from "../utils/useCheckOnline";
import CardDetails from "./CardDetails";
import ShimmerHomePage from "./ShimmerHomePage";

const Body = () => {
  const [searchText, setSearchText] = useState("Search");
  const [resData, setResData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  async function getRestaurant() {
    const response = await fetch(url);
    const dataObj = await response.json();

    setSearchResult(
      dataObj.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants === undefined
        ? dataObj.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        : dataObj.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
    );
    setResData(
      dataObj.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants === undefined
        ? dataObj.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        : dataObj.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
    );
  }
  useEffect(() => {
    getRestaurant();
  }, []);
  let isOnline = useCheckOnline();
  if (!isOnline) {
    return <h1>😖offline</h1>;
  }

  if (isOnline)
    return searchResult.length === 0 ? (
      <ShimmerHomePage />
    ) : (
      <>
        <div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 ">
            <h2 className="text-2xl font-semibold">
              Top restaurant chains in Bangalore
            </h2>
            <div className="bg-white p-8">
              <div className="grid grid-cols-4 gap-6 overflow-hidden text-ellipsis">
                {searchResult.map((ele) => {
                  return (
                    <Link
                      className="link"
                      to={"/restaurant/" + ele.info.id}
                      key={ele.info.id}
                    >
                      <CardDetails className="" rData={{ ...ele.info }} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Body;
