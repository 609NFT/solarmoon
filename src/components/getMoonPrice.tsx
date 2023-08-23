import axios from "axios";
import { useState } from "react";

function MoonPrice() {
  const [price, setPrice] = useState(0);
  const address = "2kMpEJCZL8vEDZe7YPLMCS9Y3WKSAMedXBn7xHPvsWvi";
  axios
    .get(
      "https://api.fluxbeam.xyz/v1/tokens/2kMpEJCZL8vEDZe7YPLMCS9Y3WKSAMedXBn7xHPvsWvi/withheld"
    )
    .then((res) => {
      setPrice(res.data);
      console.log(price);
    });
  return (
    <div>
      <b>$MOON PRICE: </b>
      {price}%
    </div>
  );
}

export default MoonPrice;
