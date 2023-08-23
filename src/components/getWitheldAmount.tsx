import axios from "axios";
import { useState } from "react";

function Witheld() {
  const [witheld, setWitheld] = useState(0);
  const [percent, setPercent] = useState(0);
  const [remaining, setRemainder] = useState(0);
  const [remainingPercent, setRemainPercent] = useState(0);
  const [burned, setBurn] = useState(0);
  axios
    .get(
      "https://api.fluxbeam.xyz/v1/tokens/2kMpEJCZL8vEDZe7YPLMCS9Y3WKSAMedXBn7xHPvsWvi/withheld"
    )
    .then((res) => {
      setWitheld(res.data.withheldAmount.amount);
      setPercent((witheld / 6942000000000000) * 100);
      setRemainder((6942000000000000 - witheld) / 100000);
      setBurn(62420000000 - remaining);
      setRemainPercent((remaining / 69420000000) * 100);
    });
  return (
    <div>
      <div>
        <b>Total Burned: </b>
        {burned.toLocaleString()} ({percent.toFixed(2)}%)
      </div>
      <div>
        <b>Remaining Supply: </b>
        {remaining.toLocaleString()} ({remainingPercent.toFixed(2)}%)
      </div>
    </div>
  );
}

export default Witheld;
