import { useEffect, useState } from "react";

const useCheckOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  function onlineChecker() {
    setIsOnline(true);
  }
  function offlineChecker() {
    setIsOnline(false);
  }
  useEffect(() => {
    console.log("intialised  event listener");
    window.addEventListener("online", onlineChecker);
    window.addEventListener("offline", offlineChecker);
    return () => {
      console.log("removed the event listener why ?");
      window.removeEventListener("online", onlineChecker);
      window.removeEventListener("offline", offlineChecker);
    };
  });

  return isOnline;
};
export default useCheckOnline;
