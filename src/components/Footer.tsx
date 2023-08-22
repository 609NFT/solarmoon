import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
export const Footer: FC = () => {
  return (
    <div className="flex">
      <footer className="border-t-2 border-[#141414] bg-[#0E1019] hover:text-white w-screen">
        <div className="ml-12 py-8 mr-12">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-8 md:space-x-12 relative">
            <div className="flex flex-col col-span-2 mx-4 items-center md:items-start">
              <div className="flex md">
                <a
                  href="https://twitter.com/SolarMoonSol"
                  type="button"
                  className="border-white text-secondary leading-normal hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="twitter"
                    className="w-4 h-full mx-auto"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    ></path>
                  </svg>
                </a>
                {/*<Link
                  href="https://t.me/SolarMoonofficial"
                  rel="noopener noreferrer"
                  passHref
                >
                  <div className="flex flex-row ml-1">
                    <Image
                      src="/telegram_logo.png"
                      alt="telegram icon"
                      width={20}
                      height={20}
                      className="w-5/5 h-5/5"
                    />
                  </div>
                </Link>*/}
              </div>
              <div className="mb-6 m-1 sm:text-left place-items-start items-start font-normal tracking-tight text-secondary">
                Built by{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/609NFT"
                >
                  609
                </a>
              </div>
            </div>

            <div className="mb-6 items-center mx-auto max-w-screen-lg">
              <h5 className="font-normal capitalize tracking-tight  mb-2.5">
                ECOSYSTEM
              </h5>

              <div className="flex flex-col mb-0 gap-2">
                <Link
                  href="https://solarmoon.space/burn"
                  target="_blank"
                  rel="noopener noreferrer"
                  passHref
                  className="text-secondary hover:text-white"
                >
                  Burn Dash
                </Link>
                <Link
                  href="https://rugcheck.xyz/tokens/2kMpEJCZL8vEDZe7YPLMCS9Y3WKSAMedXBn7xHPvsWvi"
                  target="_blank"
                  rel="noopener noreferrer"
                  passHref
                  className="text-secondary hover:text-white"
                >
                  Rug Check
                </Link>
              </div>
            </div>

            <div className="mb-6 items-center mx-auto max-w-screen-lg">
              <div className="font-normal capitalize mb-2.5">TOKENS</div>

              <div className="flex flex-col mb-0 gap-2">
                <Link
                  href="https://jup.ag/swap/MOON-SOL"
                  target="_blank"
                  rel="noopener noreferrer"
                  passHref
                  className="text-secondary hover:text-white"
                >
                  Buy MOON
                </Link>
                <Link
                  href="https://www.coinbase.com/how-to-buy/solana"
                  target="_blank"
                  rel="noopener noreferrer"
                  passHref
                  className="text-secondary hover:text-white"
                >
                  Buy SOL
                </Link>
              </div>
            </div>

            <div className="mb-6 items-center mx-auto max-w-screen-lg">
              <h5 className="font-normal capitalize tracking-tight  mb-2.5">
                COMMUNITY
              </h5>

              <div className="flex flex-col mb-0 gap-2">
                <Link
                  href="https://t.me/SolarMoonofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  passHref
                  className="text-secondary hover:text-white"
                >
                  Telegram
                </Link>
                <Link
                  href="https://twitter.com/SolarMoonSol"
                  target="_blank"
                  rel="noopener noreferrer"
                  passHref
                  className="text-secondary hover:text-white"
                >
                  Twitter
                </Link>
              </div>
            </div>

            <div className="mb-6 items-center mx-auto max-w-screen-lg">
              <h5 className="font-normal tracking-tight  mb-2.5">TOKEN-2022</h5>

              <div className="flex flex-col mb-0 gap-2">
                <Link
                  href="https://spl.solana.com/token-2022#security-audits"
                  target="_blank"
                  rel="noopener noreferrer"
                  passHref
                  className="text-secondary hover:text-white"
                >
                  Audit Status
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
