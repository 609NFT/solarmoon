import axios from "axios";
import { useState, useEffect, useRef } from "react";

const config = {
  headers: {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkQXQiOjE2OTI2NDk0MjM5MTQsImVtYWlsIjoiYm9pc2pvbGlicmlhbkBnbWFpbC5jb20iLCJhY3Rpb24iOiJ0b2tlbi1hcGkiLCJpYXQiOjE2OTI2NDk0MjN9.r-D3yS_Q_bGnxoDUYkxkfqeVylj8ij8MIxIcQuOq-fo",
  },
};

function Holders() {
  const [holders, setHolders] = useState(0);
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
          "https://public-api.solscan.io/token/holders?tokenAddress=2kMpEJCZL8vEDZe7YPLMCS9Y3WKSAMedXBn7xHPvsWvi&limit=2&offset=0",
          config
        )
        .then((res) => {
          setHolders(res.data.total);
          // After response is received
          setLoading(false);
        });
    }
  }, [holders]);
  return (
    <div>
      <b>Total Holders: </b>
      {loading ? <>Loading..</> : holders}
    </div>
  );
}

export default Holders;
