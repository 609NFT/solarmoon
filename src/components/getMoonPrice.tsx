import axios from "axios";
import { useState, useEffect, useRef } from "react";

const config = {
  headers: {
    "x-chain": "solana",
    "X-API-KEY": "2d8edb01ad4944b5a9ebf46346b1eaf7",
  },
};

function MoonPrice() {
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      // STUFF ONLY HAPPENS ONCE
      // Before calling the API
      setLoading(true);
      axios
        .get(
          "https://public-api.birdeye.so/defi/price?address=2kMpEJCZL8vEDZe7YPLMCS9Y3WKSAMedXBn7xHPvsWvi",
          config
        )
        .then((res) => {
          setPrice(res.data.data.value);
          // After response is received
          setLoading(false);
        });
    }
  }, [price]);

  return (
    <div>
      <b>$MOON Price: </b>
      {loading ? <>Loading..</> : price}
    </div>
  );
}

export default MoonPrice;
