import axios from "axios";
import { useState } from "react";

function Witheld() {
  const [witheld, setWitheld] = useState(0);
  const [percent, setPercent] = useState(0);
  const [remaining, setRemainder] = useState(0);
  axios
    .get(
      "https://api.fluxbeam.xyz/v1/tokens/2kMpEJCZL8vEDZe7YPLMCS9Y3WKSAMedXBn7xHPvsWvi/withheld"
    )
    .then((res) => {
      setWitheld(res.data.withheldAmount.amount);
      setPercent((witheld / 6942000000000000) * 100);
      setRemainder(6942000000000000 - witheld);
    });
  return (
    <div>
      <div>
        <b>Total Burned: </b>
        {percent.toFixed(2)}%
      </div>
      {/*<div>
        <b>Remaining Supply: </b>
        {remaining.toLocaleString()}
  </div>*/}
    </div>
  );
}

export default Witheld;
