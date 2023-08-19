import { useState, useEffect } from "react";

function Clock() {
  const [clock, setClock] = useState(
    new Date().toLocaleString().substring(15, 25)
  );
  useEffect(() => {
    const intervalClockId = setInterval(() => {
      setClock(new Date().toLocaleString().substring(15, 25));

      return () => clearInterval(intervalClockId);
    }, 1000);
  }, []);

  return <div className="headerUl__clock">{clock}</div>;
}

export default Clock;
