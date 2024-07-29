import { StaticImageData } from "next/image";
import whyus1 from "../../assets/why-us-1.png";
import whyus2 from "../../assets/why-us-2.png";
import whyus3 from "../../assets/why-us-3.png";
import whyus4 from "../../assets/why-us-4.png";

export const landingPageNavLinks: { text: string; link: string }[] = [
  {
    text: "home",
    link: "",
  },
  {
    text: "about us",
    link: "/about-us",
  },
  {
    text: "contact us",
    link: "/contact-us",
  },
  {
    text: "faq",
    link: "/faq",
  },
  {
    text: "legal",
    link: "/legal",
  },
];

export const investmentPlans = [
  {
    title: "Capital Basic",
    percentIncrease: 10,
    minDeposit: 300,
    maxDeposit: 2999,
    referralBonus: 5,
  },
  {
    title: "Capital Standard",
    percentIncrease: 15,
    minDeposit: 3000,
    maxDeposit: 5999,
    referralBonus: 7,
  },
  {
    title: "Capital Silver",
    percentIncrease: 20,
    minDeposit: 6000,
    maxDeposit: 9999,
    referralBonus: 12,
  },
  {
    title: "Capital Golden",
    percentIncrease: 25,
    minDeposit: 10000,
    maxDeposit: 29999,
    referralBonus: 16,
  },
  {
    title: "Capital Diamond",
    percentIncrease: 35,
    minDeposit: 30000,
    maxDeposit: 49999,
    referralBonus: 25,
  },
  {
    title: "Capital Platinum",
    percentIncrease: 50,
    minDeposit: 50000,
    maxDeposit: 79999,
    referralBonus: 30,
  },
  {
    title: "Capital Sapphire",
    percentIncrease: 75,
    minDeposit: 80000,
    maxDeposit: 109999,
    referralBonus: 35,
  },
  {
    title: "Capital Pro",
    percentIncrease: 95,
    minDeposit: 110000,
    maxDeposit: "UNLIMITED",
    referralBonus: 40,
  },
];

export const whyChooseUsData: {
  img: StaticImageData;
  title: string;
  text: string;
}[] = [
  {
    img: whyus1,
    title: "Guaranteed profit",
    text: "By leveraging modern technologies and harnessing their full potential, we provide enhanced opportunities for achieving a stable and sustainable high income.",
  },
  {
    img: whyus2,
    title: "Comprehensive customer support",
    text: "Lucrative Capital Customer Support is available 24/7 to assist you with any questions or issues via live chat and other social media platforms.",
  },
  {
    img: whyus3,
    title: "Instant Withdrawal",
    text: "Our withdrawals are processed instantly upon request to your preferred payment processor.",
  },
  {
    img: whyus4,
    title: "Financial security",
    text: "Upon request, our withdrawals are swiftly processed to your chosen payment processor.",
  },
];
