import axios from "axios";
import { useEffect, useState, useRef } from "react";

//let timer = 0;

function SolPrice() {
  const [price, setPrice] = useState(0);
  //const saved = localStorage.getItem("solPrice");
  //let initialValue = JSON.parse(saved);
  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      // STUFF ONLY HAPPENS ONCE
      axios
        .get(
          "https://public-api.birdeye.so/public/price?address=So11111111111111111111111111111111111111112"
        )
        .then((res) => {
          setPrice(res.data.data.value);
        });
    }
  }, [price]);

  //localStorage.setItem("solPrice", JSON.stringify(price));
  //return <div>{initialValue.toFixed(2)}</div>;

  return <div>{price.toFixed(2)}</div>;
}

export default SolPrice;
