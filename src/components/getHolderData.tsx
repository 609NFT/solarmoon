import axios from "axios";
import { useState, useEffect, useRef } from "react";

const config = {
  headers: {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkQXQiOjE2OTEwOTUyODc3NDYsImVtYWlsIjoiYnJpYW4uYm9pc2pvbGlAY3J5cHRvc2xhbS5pbyIsImFjdGlvbiI6InRva2VuLWFwaSIsImlhdCI6MTY5MTA5NTI4N30.TmqWBjzeWkiiKpX_ZWxPejo5wTurbwek0iLcEaE-GLQ",
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
