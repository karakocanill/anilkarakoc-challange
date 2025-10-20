import { getFullnodeUrl } from "@mysten/sui/client";
import { createNetworkConfig } from "@mysten/dapp-kit";

/**
 * Package ID retrieved from transaction summary, after runnning `sui client publish`
 *
 * Example:
 * ```bash
 *  Published Objects:
 * ┌──
 * │ PackageID: 0xdbd32a4b9802fab3bca9f7c7cb339d9a88d3b271581280cb83df487ce87a65e6
 * │ Version: 1
 * │ Digest: bn8Vs7TgMzhyPN4GtjDdjTfufX67dErp4926bQeCSFr
 * │ Modules: arena, hero, marketplace
 * └──
 */
const { networkConfig, useNetworkVariable, useNetworkVariables } =
  createNetworkConfig({
    devnet: {
      url: getFullnodeUrl("devnet"),
      variables: {
        packageId: "0x[INSTRUCTOR_PROVIDED_PACKAGE_ID]", // TODO: Get package ID from instructor
      },
    },
    testnet: {
      url: getFullnodeUrl("testnet"),
      variables: {
        packageId: "0x835e6c874ab409cc869e550b2ee410d2aa0204e39b1aabc9917ecc32c5fa4330", // TODO: Get package ID from instructor
      },
    },
    mainnet: {
      url: getFullnodeUrl("mainnet"),
      variables: {
        packageId: "0x[INSTRUCTOR_PROVIDED_PACKAGE_ID]", // TODO: Get package ID from instructor
      },
    },
  });

export { useNetworkVariable, useNetworkVariables, networkConfig };
