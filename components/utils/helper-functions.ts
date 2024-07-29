import bitcoinImg from "../../assets/coins/bitcoin.png";
import ethereumImg from "../../assets/coins/ethereum.png";
import usdtImg from "../../assets/coins/usdt.png";
import solanaImg from "../../assets/coins/solana.jpg";
import bnbImg from "../../assets/coins/bnb.png";
import xrpImg from "../../assets/coins/xrp.png";
import dogeImg from "../../assets/coins/doge.png";
import tonImg from "../../assets/coins/ton.png";
import cardanoImg from "../../assets/coins/cardano.jpeg";
import tronImg from "../../assets/coins/tron.png";
import avalancheImg from "../../assets/coins/avalanche.png";
import shiba_inuImg from "../../assets/coins/shiba_inu.png";
import bitcoinCashImg from "../../assets/coins/Bitcoin_Cash.png";
import polkadotImg from "../../assets/coins/polkadot.png";
import chainlinkImg from "../../assets/coins/chainlink.png";
import nearImg from "../../assets/coins/near.png";
import litecoinImg from "../../assets/coins/litecoin.png";
import pepeImg from "../../assets/coins/pepe.jpg";
import polygonImg from "../../assets/coins/polygon.png";
import aptosImg from "../../assets/coins/aptos.png";
import moneroImg from "../../assets/coins/monero.png";
import stellarImg from "../../assets/coins/stellar.png";
import stacksImg from "../../assets/coins/stacks.png";
import arbitrumImg from "../../assets/coins/arbitrum.png";
import cronosImg from "../../assets/coins/cronos.png";
import arweaveImg from "../../assets/coins/arweave.png";
import bonkImg from "../../assets/coins/bonk.png";
import optimismImg from "../../assets/coins/optimism.png";

const coinsImg: any = {
  bitcoin: bitcoinImg,
  ethereum: ethereumImg,
  tether: usdtImg,
  solana: solanaImg,
  bnb: bnbImg,
  xrp: xrpImg,
  dogecoin: dogeImg,
  toncoin: tonImg,
  cardano: cardanoImg,
  tron: tronImg,
  avalanche: avalancheImg,
  bitcoincash: bitcoinCashImg,
  polkadotnew: polkadotImg,
  chainlink: chainlinkImg,
  nearprotocol: nearImg,
  litecoin: litecoinImg,
  polygon: polygonImg,
  aptos: aptosImg,
  monero: moneroImg,
  stellar: stellarImg,
  stacks: stacksImg,
  arbitrum: arbitrumImg,
  cronos: cronosImg,
  arweave: arweaveImg,
  optimismethereum: optimismImg,
};

const coinsNames = [
  "bitcoin",
  "ethereum",
  "tether",
  "solana",
  "bnb",
  "xrp",
  "dogecoin",
  "toncoin",
  "cardano",
  "tron",
  "avalanche",
  "bitcoincash",
  "polkadotnew",
  "chainlink",
  "nearprotocol",
  "litecoin",
  "polygon",
  "aptos",
  "monero",
  "stellar",
  "stacks",
  "arbitrum",
  "cronos",
  "arweave",
  "optimismethereum",
];

export const filterCoins = (coins: any) => {
  let newCoinArr = [];

  for (let i = 0; i < coins.length; i++) {
    const slug = coins[i].slug.split("-").join("");
    for (let j = 0; j < coinsNames.length; j++) {
      if (slug === coinsNames[j]) {
        newCoinArr.push({
          name: coins[i].name,
          symbol: coins[i].symbol,
          price: coins[i].quote,
          img: coinsImg[slug],
        });
      }
    }
  }

  return newCoinArr;
};
