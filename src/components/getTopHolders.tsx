import axios from "axios";
import { useState } from "react";

const config = {
  headers: {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkQXQiOjE2OTI2NDk0MjM5MTQsImVtYWlsIjoiYm9pc2pvbGlicmlhbkBnbWFpbC5jb20iLCJhY3Rpb24iOiJ0b2tlbi1hcGkiLCJpYXQiOjE2OTI2NDk0MjN9.r-D3yS_Q_bGnxoDUYkxkfqeVylj8ij8MIxIcQuOq-fo",
  },
};

function AllHolders() {
  const [holders, setHolders] = useState(0);
  axios
    .get(
      "https://public-api.solscan.io/token/holders?tokenAddress=2kMpEJCZL8vEDZe7YPLMCS9Y3WKSAMedXBn7xHPvsWvi&limit=10&offset=1",
      config
    )

    .then((res) => {
      setHolders(res.data);
      //holders.map(post => {
      console.log(holders);
      //})
    });
  //return <div></div>;
}

export default AllHolders;
