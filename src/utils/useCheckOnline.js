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
    window.addEventListener("online", onlineChecker);
    window.addEventListener("offline", offlineChecker);
    return () => {
      window.removeEventListener("online", onlineChecker);
      window.removeEventListener("offline", offlineChecker);
    };
  });

  return isOnline;
};
export default useCheckOnline;
