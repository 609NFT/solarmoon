import axios from "axios";
import { useState } from "react";

function SolPrice() {
  const [price, setPrice] = useState(0);
  /*const saved = localStorage.getItem("solPrice");
  const initialValue = JSON.parse(saved);

  if (initialValue.length > 1) {
    
    return <div>{initialValue.toFixed(2)}</div>;
  }*/

  axios
    .get(
      "https://public-api.birdeye.so/public/price?address=So11111111111111111111111111111111111111112"
    )

    .then((res) => {
      setPrice(res.data.data.value);
      localStorage.setItem("solPrice", JSON.stringify(price));
    });
  return <div>{price.toFixed(2)}</div>;
}

export default SolPrice;
