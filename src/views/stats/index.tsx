import { FC } from "react";
import { SignMessage } from "../../components/SignMessage";
import { SendTransaction } from "../../components/SendTransaction";
import { SendVersionedTransaction } from "../../components/SendVersionedTransaction";

export const StatsView: FC = ({}) => {
  return (
    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <h1 className="text-center text-5xl font-bold bg-clip-text mt-10 mb-8">
          Statistics
        </h1>

        {/* CONTENT GOES HERE */}
        <div className="text-center">
          <ul>
            <li>
              <b>Total Supply:</b> 69,000,000,000
            </li>
            <li>
              <b>Current Transfer Tax:</b> 5% (All Transactions 🔥 $MOON)
            </li>
            <li>
              <b>Liquidity Pool Burned:</b>{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://solscan.io/tx/4WBgzYDpyf6e3h4CT8kXnAMAfXpi8kKxaakTALz2pj67cR7DbbUtpc2JpCKrTEERRiXpMRexMGFmDrCokBBHBM7B"
              >
                TXN
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
          </ul>
          {/*<SignMessage />
          <SendTransaction />
          <SendVersionedTransaction />*/}
        </div>
      </div>
    </div>
  );
};
