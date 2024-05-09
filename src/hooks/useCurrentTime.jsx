import { useState, useEffect } from "react";
import moment from "moment";

const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(moment().format("HH:mm"));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().format("HH:mm"));
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return currentTime;
};

export default useCurrentTime;
