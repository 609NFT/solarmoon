// Next, React
import { FC, useEffect, useState } from "react";
import Link from "next/link";
import Typewriter from "../../components/Typewriter";

// Wallet
import { useWallet, useConnection } from "@solana/wallet-adapter-react";

// Components
import { RequestAirdrop } from "../../components/RequestAirdrop";
import pkg from "../../../package.json";

// Store
import useUserSOLBalanceStore from "../../stores/useUserSOLBalanceStore";

export const HomeView: FC = ({}) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance);
  const { getUserSOLBalance } = useUserSOLBalanceStore();

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58());
      getUserSOLBalance(wallet.publicKey, connection);
    }
  }, [wallet.publicKey, connection, getUserSOLBalance]);

  return (
    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-indigo-500 rounded-lg blur opacity-40 animate-tilt"></div>
          <div className="mockup-code bg-primary border-2 border-[#5252529f] p-6 my-2">
            <pre data-prefix=">">
              <code className="truncate">
                <Typewriter
                  text="$ sudo burn_solarmoon 🚀🌕"
                  delay={100}
                ></Typewriter>
              </code>
            </pre>
          </div>
        </div>
        <div>
          <a
            target="_blank"
            href="https://birdeye.so/token/2kMpEJCZL8vEDZe7YPLMCS9Y3WKSAMedXBn7xHPvsWvi?chain=solana"
            rel="noreferrer"
          >
            <p className="buy_now">
              <b>View Chart</b>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};
