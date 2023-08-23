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
                <Link
                  href="https://twitter.com/SolarMoonSol"
                  rel="noopener noreferrer"
                  passHref
                >
                  <div className="center">
                    <Image
                      src="/twitter.png"
                      alt="telegram icon"
                      width={25}
                      height={25}
                    />
                  </div>
                </Link>

                <Link
                  href="https://t.me/SolarMoonofficial"
                  rel="noopener noreferrer"
                  passHref
                >
                  <div className="center">
                    <Image
                      src="/telegram_logo.png"
                      alt="telegram icon"
                      width={25}
                      height={25}
                    />
                  </div>
                </Link>
              </div>
              <div className="mb-6 sm:text-left place-items-start items-start font-normal tracking-tight text-secondary">
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
                  href="https://alldomains.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  passHref
                  className="text-secondary hover:text-white"
                >
                  Domains
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
              <h5 className="font-normal capitalize mb-2.5">TOKENS</h5>

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
              <h5 className="font-normal tracking-tight  mb-2.5">T-22</h5>

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
