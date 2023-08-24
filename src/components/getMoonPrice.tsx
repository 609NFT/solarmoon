import axios from "axios";
import { useState, useEffect, useRef } from "react";

function MoonPrice() {
  const [price, setPrice] = useState(0);

  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      // STUFF ONLY HAPPENS ONCE
      axios
        .get(
          "https://public-api.birdeye.so/public/price?address=2kMpEJCZL8vEDZe7YPLMCS9Y3WKSAMedXBn7xHPvsWvi"
        )
        .then((res) => {
          setPrice(res.data.data.value);
        });
    }
  }, [price]);
  return (
    <div>
      <b>$MOON Price: </b>
      {price}
    </div>
  );
}

export default MoonPrice;
