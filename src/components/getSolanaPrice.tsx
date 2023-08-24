import axios from "axios";
import { useState } from "react";

let timer = 0;

function SolPrice() {
  const [price, setPrice] = useState(0);
  const saved = localStorage.getItem("solPrice");
  let initialValue = JSON.parse(saved);

  if (initialValue === null && timer === 0) {
    axios
      .get(
        "https://public-api.birdeye.so/public/price?address=So11111111111111111111111111111111111111112"
      )
      .then(function (response) {
        console.log(response);
        //localStorage.setItem("solPrice", JSON.stringify(price));
        //initialValue = price;
        //alert(initialValue);

        timer = 1;
        /*setTimeout(function () {
          setPrice(res.data.data.value);
          alert(price);
        }, 5000);*/
      });
  }
  //alert(initialValue);
  //return <div>{initialValue.toFixed(2)}</div>;
  return <div>value</div>;
}

export default SolPrice;
