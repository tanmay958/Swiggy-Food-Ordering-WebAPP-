import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import { useEffect } from "react";

const Account = () => {
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <>
      <h1>Hello sorry not Built Yet</h1>
      {/* <Outlet name =/> */}
      <Profile name="CLASS 1" />
      {/* <Profile name=" CLASS 2" /> */}
    </>
  );
};
export default Account;
