// import { useEffect } from "react";
// import { uniqBy } from "lodash";
import { IChain as Chain } from "../models/chain";
import React from "react";
import { useTranslation } from "react-i18next";

export default function () {
  const { t } = useTranslation();
  const [chains, setChains] = React.useState<Chain[]>([
    {
      name: "Polkadot Hub TestNet",
      network: t("Polkadot TestNet"),
      rpc: ["https://eth-rpc-testnet.polkadot.io/"],
    },
    {
      name: "Polkadot Hub",
      network: t("Polkadot"),
      rpc: ["https://eth-rpc.polkadot.io/"],
    },
    {
      name: "Kusama Hub",
      network: t("Kusama"),
      rpc: ["https://eth-rpc-kusama.polkadot.io/"],
    },
    {
      name: "Dev Node",
      network: t("localhost:8545"),
      rpc: ["http://localhost:8545"],
    },
  ]);

  // uncomment once we add 'chain list provider' concept. This list blows.

  // useEffect(() => {
  //   if (chains === undefined) {
  //     fetch("https://chainid.network/chains.json")
  //       .then((r) => r.json())
  //       .then((chainIdNetwork) => {
  //         const filteredChains = chainIdNetwork.filter((c: Chain) => {
  //           if (c.rpc.length === 0) {
  //             return false;
  //           }
  //           return true;
  //         });
  //         if (chains) {
  //           setChains(mergeChainSets(chains, filteredChains));
  //         } else {
  //           setChains(filteredChains);
  //         };
  //       });
  //   }
  // }, [chains]);

  return [chains, setChains];
}
