// import { useEffect } from "react";
// import { uniqBy } from "lodash";
import { IChain as Chain } from "../models/chain";
import React from "react";
import { useTranslation } from "react-i18next";

export default function () {
  const { t } = useTranslation();
  const [chains, setChains] = React.useState<Chain[]>([
    {
      name: "Westend AssetHub",
      network: t("testnet"),
      rpc: ["https://westend-asset-hub-eth-rpc.polkadot.io/"],
    },
    {
      name: "Paseo PassetHub",
      network: t("testnet"),
      rpc: ["https://testnet-passet-hub-eth-rpc.polkadot.io/"],
    },
    {
      name: "Dev Node",
      network: t("testnet"),
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
