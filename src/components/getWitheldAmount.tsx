import axios from "axios";
import { useState, useEffect, useRef } from "react";

function Witheld() {
  const [witheld, setWitheld] = useState(0);
  const [loading, setLoading] = useState(false);
  let percent = 0;
  let remaining = 0;
  let remainingPercent = 0;
  let burned = 0;
  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      // STUFF ONLY HAPPENS ONCE
      // Before calling the API
      setLoading(true);
      axios
        .get(
          "https://api.fluxbeam.xyz/v1/tokens/2kMpEJCZL8vEDZe7YPLMCS9Y3WKSAMedXBn7xHPvsWvi/withheld"
        )
        .then((res) => {
          setWitheld(res.data.withheldAmount.amount);
          // After response is received
          setLoading(false);
        });
    }
  }, [witheld]);

  percent = (witheld / 6942000000000000) * 100;
  remaining = (6942000000000000 - witheld) / 100000;
  burned = 62420000000 - remaining;
  remainingPercent = (remaining / 69420000000) * 100;

  return (
    <div>
      <div>
        <ul>
          <li>
            <b>Total Burned: </b>
            {loading ? <>Loading..</> : burned.toLocaleString()} (
            {loading ? <>Loading..</> : percent.toFixed(2)}%)
          </li>
          <li>
            <b>Remaining Supply: </b>
            {loading ? <>Loading..</> : remaining.toLocaleString()} (
            {loading ? <>Loading..</> : remainingPercent.toFixed(2)}%)
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Witheld;
