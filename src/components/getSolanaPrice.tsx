import axios from "axios";
import { useEffect, useState, useRef } from "react";

//let timer = 0;

const config = {
  headers: {
    "x-chain": "solana",
    "X-API-KEY": "2d8edb01ad4944b5a9ebf46346b1eaf7",
  },
};

function SolPrice() {
  const [price, setPrice] = useState(0);
  //const saved = localStorage.getItem("solPrice");
  //let initialValue = JSON.parse(saved);
  const shouldLog = useRef(true);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      // STUFF ONLY HAPPENS ONCE
      // Before calling the API
      setLoading(true);
      axios
        .get(
          "https://public-api.birdeye.so/public/price?address=So11111111111111111111111111111111111111112",
          config
        )
        .then((res) => {
          setPrice(res.data.data.value);
          // After response is received
          setLoading(false);
        });
    }
  }, [price]);

  //localStorage.setItem("solPrice", JSON.stringify(price));
  //return <div>{initialValue.toFixed(2)}</div>;

  return <div>{loading ? <>Loading..</> : price.toFixed(2)}</div>;
}

export default SolPrice;
