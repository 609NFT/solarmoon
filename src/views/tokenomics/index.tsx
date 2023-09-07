import { FC, useEffect, useState } from "react";
import Image from "next/image";

export const TokenView: FC = ({}) => {
  return (
    <div className="tokenomics">
      <Image
        src="/chart.svg"
        alt="tokenomics diagram"
        width={500}
        height={0}
        priority={true}
      ></Image>
    </div>
  );
};

/*const { publicKey } = useWallet();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pubKey = publicKey;
  var public_key = JSON.stringify(pubKey);

  if (public_key == null) {
    return <div>{public_key} not logged in</div>;
  } else {
    return (
      <div>
        <WalletDetail />
      </div>
    );
  }*/
