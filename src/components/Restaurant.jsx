import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { resurl } from "../utils/config";
import ShimmerMenu from "./ShimmerMenu";
import MenuItem from "./MenuItem";
import RestaurantDetails from "./RestaurantDetails";

function displayCardType(props) {
  return (
    <>
      <h2 className="text-2xl bg-slate-50 font-semibold my-6">
        {props?.title}
      </h2>
      <div className="space-y-4 ">
        {props.itemCards.map((ele) => {
          return <MenuItem details={ele.card.info} key={ele.card.id} />;
        })}
      </div>
    </>
  );
}
function displaySection(props) {
  let filledJSX = [];
  for (let i = 0; i < props.length; i++) {
    filledJSX.push(
      props[i]?.card?.card?.itemCards === undefined ? (
        <></>
      ) : (
        displayCardType(props[i].card.card)
      )
    );
  }
  return filledJSX;
}

const RestaurantMenu = () => {
  let { id } = useParams();
  const [details, setDetails] = useState(null);
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    getRestaurantDetails(id);
  }, []);
  async function getRestaurantDetails(id) {
    const res = await fetch(resurl + id);
    const data = await res.json();
    setDetails(data);
  }

  if (details === null) return <ShimmerMenu />;

  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex leading-none text-indigo-600 divide-x divide-indigo-400">
              <li className="pr-4">Home</li>
              <li className="px-4">
                {details.data.cards[0].card.card.info.city}
              </li>
              <li className="pl-4">
                {details.data.cards[0].card.card.info.name}
              </li>
            </ol>
          </nav>
          <RestaurantDetails data={details.data.cards[0].card.card.info} />
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto p-6">
        {displaySection(
          details.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards
        ).map((ele) => {
          return ele;
        })}
      </div>
    </>
  );
};

export default RestaurantMenu;
