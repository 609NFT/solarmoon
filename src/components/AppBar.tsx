import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { useAutoConnect } from "../contexts/AutoConnectProvider";
import NetworkSwitcher from "./NetworkSwitcher";
import NavElement from "./nav-element";
import SolPrice from "./getSolanaPrice";

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

export const AppBar: React.FC = () => {
  const { autoConnect, setAutoConnect } = useAutoConnect();
  const [isNavOpen, setIsNavOpen] = useState(false);

  //const saved = localStorage.getItem("solPrice");
  //const initialValue = JSON.parse(saved);

  alert("hello");
  /*if (initialValue.length > 1) {
    alert(initialValue.toFixed(2));
    return <div>{initialValue.toFixed(2)}</div>;
  }*/

  return (
    <div>
      {/* NavBar / Header */}
      <div className="navbar flex h-20 flex-row md:mb-2 shadow-lg bg- text-neutral-content border-b border-zinc-600 bg-opacity-66">
        <div className="navbar-start align-items-center">
          <div className="w-22 h-22 main_logo">
            <Link
              href="/"
              rel="noopener noreferrer"
              passHref
              className="text-secondary hover:text-white"
            >
              <Image
                src="/favicon.png"
                alt="solarmoon logo"
                width={60}
                height={60}
                priority={true}
              ></Image>
            </Link>
          </div>
          <div>
            <Image
              src="/solana.png"
              alt="solana logo"
              width={14}
              height={14}
            ></Image>
          </div>
          {/*<div className="ml-1">
            <SolPrice></SolPrice>
  </div>*/}
        </div>

        {/* Nav Links */}
        {/* Wallet & Settings */}
        <div className="navbar-end">
          <div className="hidden md:inline-flex align-items-center justify-items gap-6">
            {/*<a href="https://alldomains.id/" rel="noreferrer" target="_blank">
              <p className="customNav">Domains</p>
            </a>
            <NavElement
              label="Domains"
              href="https://alldomains.id/"
              navigationStarts={() => setIsNavOpen(false)}
            />*/}
            <NavElement
              label="Stats"
              href="/stats"
              navigationStarts={() => setIsNavOpen(false)}
            />
            <WalletMultiButtonDynamic className="btn-ghost btn-sm rounded-btn text-lg mr-6 " />
          </div>
          <label
            htmlFor="my-drawer"
            className="btn-gh items-center justify-between md:hidden mr-6"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <div className="HAMBURGER-ICON space-y-2.5 ml-5">
              <div
                className={`h-0.5 w-8 bg-white ${isNavOpen ? "hidden" : ""}`}
              />
              <div
                className={`h-0.5 w-8 bg-white ${isNavOpen ? "hidden" : ""}`}
              />
              <div
                className={`h-0.5 w-8 bg-white ${isNavOpen ? "hidden" : ""}`}
              />
            </div>
            <div
              className={`absolute block h-0.5 w-8 animate-pulse bg-white ${
                isNavOpen ? "" : "hidden"
              }`}
              style={{ transform: "rotate(45deg)" }}
            ></div>
            <div
              className={`absolute block h-0.5 w-8 animate-pulse bg-white ${
                isNavOpen ? "" : "hidden"
              }`}
              style={{ transform: "rotate(135deg)" }}
            ></div>
          </label>
          {/*<div>
            <span className="absolute block h-0.5 w-12 bg-zinc-600 rotate-90 right-14"></span>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              className="btn btn-square btn-ghost text-right mr-4"
            >
              <svg
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="p-2 shadow menu dropdown-content bg-base-100 rounded-box sm:w-52"
            >
              <li>
                <div className="form-control bg-opacity-100">
                  <label className="cursor-pointer label">
                    <a>Autoconnect</a>
                    <input
                      type="checkbox"
                      checked={autoConnect}
                      onChange={(e) => setAutoConnect(e.target.checked)}
                      className="toggle"
                    />
                  </label>
                  <NetworkSwitcher />
                </div>
              </li>
            </ul>
          </div>*/}
        </div>
      </div>
    </div>
  );
};
