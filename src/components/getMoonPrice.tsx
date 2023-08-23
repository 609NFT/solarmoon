import axios from "axios";
import { useState } from "react";

function MoonPrice() {
  const [price, setPrice] = useState(0);
  axios
    .get(
      "https://public-api.birdeye.so/public/price?address=2kMpEJCZL8vEDZe7YPLMCS9Y3WKSAMedXBn7xHPvsWvi"
    )
    .then((res) => {
      setPrice(res.data.data.value);
    });
  return (
    <div>
      <b>$MOON Price: </b>
      {price}
    </div>
  );
}

export default MoonPrice;
