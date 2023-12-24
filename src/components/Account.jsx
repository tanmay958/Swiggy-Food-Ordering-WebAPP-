import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import { useEffect } from "react";
const Account = () => {
  useEffect(() => {
    console.log("after the intial render");

    return () => {
      console.log("exited the about page");
    };
  }, []);
  return (
    <>
      <h1>THIS IS RENDER THROUGH THE OUTLET</h1>
      {/* <Outlet name =/> */}
      <Profile name="CLASS 1" />
      {/* <Profile name=" CLASS 2" /> */}
    </>
  );
};
export default Account;
