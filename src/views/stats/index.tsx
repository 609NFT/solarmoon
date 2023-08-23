import { FC } from "react";
import { SignMessage } from "../../components/SignMessage";
import { SendTransaction } from "../../components/SendTransaction";
import { SendVersionedTransaction } from "../../components/SendVersionedTransaction";
import Holders from "components/getHolderData";
import Witheld from "components/getWitheldAmount";
import MoonPrice from "components/getMoonPrice";
import Container from "@mui/material/Container";

export const StatsView: FC = ({}) => {
  return (
    <div className="stats_font">
      {/*<div className="row">
        <div className="col">
          <div id="myProgress">
            <div id="myBar"></div>
          </div>
        </div>
  </div>*/}
      <div className="row">
        <div className="stats_1 col p-5 m-3">
          <div>
            <ul>
              <li>
                <b>SolarMoon:</b>{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://solscan.io/token/2kMpEJCZL8vEDZe7YPLMCS9Y3WKSAMedXBn7xHPvsWvi"
                >
                  Address
                </a>
              </li>
              <li>
                <b>Total Supply:</b> 69,420,000,000
              </li>
              <li>
                <b>Current Tax:</b> 5%
              </li>
              <li>
                <b>Liquidity Pool Burn:</b>{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://solscan.io/tx/4WBgzYDpyf6e3h4CT8kXnAMAfXpi8kKxaakTALz2pj67cR7DbbUtpc2JpCKrTEERRiXpMRexMGFmDrCokBBHBM7B"
                >
                  🔥 TXN
                </a>
              </li>
              <li>
                <b>Liquidity Pool: </b>
                <a
                  href="https://fluxbeam.xyz/app/pools/5EzrpD9fVSWjBigTkoZq9szD3RDRifFgZ3u9kHQWyKJ1"
                  rel="noreferrer"
                  target="_blank"
                >
                  FluxBeam
                </a>
              </li>
              <li>
                <b>MetaData: </b>
                <a
                  href="https://solscan.io/account/H3s1C7jyzjuNDj1njugbQhButT4cdNjC4V7ktdmMPbig"
                  rel="noreferrer"
                  target="_blank"
                >
                  Account
                </a>
              </li>
              <li>
                <b>Version: </b>
                SPL-Token-2022
              </li>
            </ul>
          </div>
        </div>
        <div className="stats_2 col p-5 m-3">
          <div>
            <ul>
              <li>
                <MoonPrice />
              </li>
              <li>
                <Holders />
              </li>
              <li>
                <Witheld />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
