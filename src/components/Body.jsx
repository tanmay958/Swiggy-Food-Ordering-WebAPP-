import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { url, cdn } from "../utils/config";
import { Link } from "react-router-dom";
import useCheckOnline from "../utils/useCheckOnline";
import CardDetails from "./CardDetails";
import ShimmerHomePage from "./ShimmerHomePage";

// const CardDetails = ({ rData }) => {
//   const { name, cloudinaryImageId, avgRating, cuisines, areaName, sla } = rData;
//   image = cdn + cloudinaryImageId;
//   console.log(rData);
//   return (
//     // <div className="card-items">
//     //   <h1>{name}</h1>
//     //   <img src={cdn + cloudinaryImageId} alt="" />
//     //   <h2>{avgRating}</h2>
//     // </div>
//     // <div className="card">
//     //   <div
//     //     className="card-image"
//     //     style={{ backgroundImage: `url(${image})` }}
//     //   ></div>
//     //   <div className="card-text">
//     //     <h2 className="card_title">{name}</h2>
//     //     <p className="card_text">{avgRating}</p>
//     //   </div>
//     // </div>
//     // <div className=" flex-shrink-0 min-w-[280px] bg-white rounded-lg shadow-md p-4 m-2 ">
//     //   <img
//     //     alt="Leon's - Burgers & Wings"
//     //     className="rounded-lg"
//     //     height="160"
//     //     src={image}
//     //     style={{
//     //       aspectRatio: "280/160",
//     //       objectFit: "cover",
//     //     }}
//     //     width="280"
//     //   />
//     //   <div className="mt-4 truncate ...">
//     //     <div className="text-lg font-semibold text-gray-800">{name}</div>
//     //     <div className="flex items-center mt-1">
//     //       {/* <StarIcon className="text-green-500 h-5 w-5" /> */}
//     //       <span className="text-green-500 ml-1">{avgRating}</span>
//     //       <span className="text-gray-500 mx-2">•</span>
//     //       <span className="text-gray-500">{sla.deliveryTime}mins</span>
//     //     </div>
//     //     <div className="text-sm overflow-hidden truncate text-gray-500">
//     //       {cuisines.join(",")}
//     //     </div>

//     //     <div className="text-sm text-gray-700 mt-1">{areaName}</div>
//     //   </div>
//     // </div>

//     <div className="flex-shrink-0 min-w-[280px] rounded-lg  p-2 m-2">
//       <img
//         alt="Leon's - Burgers & Wings"
//         // className="rounded-lg"
//         // height="170"
//         // src={image}
//         // style={{
//         //   aspectRatio: "300/180",
//         //   objectFit: "cover",
//         // }}
//         // width="290"
//         className="rounded-lg object-cover h-40 w-full"
//         src={image}
//       />
//       <div className="flex flex-col justify-between ml-2">
//         <div className="flex-grow">
//           <div className="text-lg font-semibold text-gray-800 truncate">
//             {name}
//           </div>
//           <div className="flex items-center mt-1">
//             {/* <StarIcon className="text-green-500 h-5 w-5" /> */}
//             <span className="text-green-500 ml-1">{avgRating}</span>
//             <span className="text-gray-500 mx-2">•</span>
//             <span className="text-gray-500">{sla.deliveryTime}mins</span>
//           </div>
//           <div className="text-sm overflow-hidden text-gray-500 max-w-[280px] truncate">
//             {cuisines.join(",")}
//           </div>
//         </div>
//         <div className="text-sm text-gray-700 mt-1 max-w-[280px] truncate">
//           {areaName}
//         </div>
//       </div>
//     </div>
//   );
// };
const Body = () => {
  console.log("render");
  const [searchText, setSearchText] = useState("Search");
  const [resData, setResData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  // restaurant function

  async function getRestaurant() {
    const response = await fetch(url);
    const dataObj = await response.json();

    setSearchResult(
      dataObj.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setResData(
      dataObj.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }
  useEffect(() => {
    // add a event listener to check the online status of the window

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
        {/* <input
          type="text"
          className="searchBox"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            console.log(searchText.length);
          }}
        />
        <button
          onClick={() => {
            const filterList = resData.filter((ele) => {
              return ele.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setSearchResult(filterList);
          }}
        >
          Search
        </button> */}
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
