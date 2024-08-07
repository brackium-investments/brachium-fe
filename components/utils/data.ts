import { StaticImageData } from "next/image";
import whyus1 from "../../assets/why-us-1.png";
import whyus2 from "../../assets/why-us-2.png";
import whyus3 from "../../assets/why-us-3.png";
import whyus4 from "../../assets/why-us-4.png";
import feed1 from "../../assets/feed-img1.jpg";
import feed2 from "../../assets/feed-img2.jpg";
import feed3 from "../../assets/feed-img3.jpg";
import feed4 from "../../assets/feed-img4.jpg";
import footerImg1 from "../../assets/pay1.png";
import footerImg2 from "../../assets/pay2.png";
import footerImg3 from "../../assets/pay3.png";
import footerImg4 from "../../assets/pay4.png";
import footerImg5 from "../../assets/pay5.png";
import footerImg6 from "../../assets/pay6.png";
import footerImg7 from "../../assets/pay7.png";
import footerImg8 from "../../assets/pay8.png";
import footerImg9 from "../../assets/pay9.png";
import footerImg10 from "../../assets/pay10.png";

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
    text: "Brackium Customer Support is available 24/7 to assist you with any questions or issues via live chat and other social media platforms.",
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

export const customerFeedback: {
  img: StaticImageData;
  firstName: string;
  lastName: string;
  text: string;
}[] = [
  {
    img: feed1,
    firstName: "Amira",
    lastName: "L. Cooley",
    text: "Instant payment, good customer service, stable income, brackium is my best choice for investment.Highly recommended!",
  },
  {
    img: feed2,
    firstName: "Robert",
    lastName: "C. Wilson",
    text: "I have been investing in brackium since July 2023. By using compound interest, I have doubled my initial investment by December 2023. Very good income, my earnings are still growing！",
  },
  {
    img: feed3,
    firstName: "Earl",
    lastName: "M. Perez",
    text: "This program seems to be well done. The plan is also stable. I decided to invest $1500 here and test the waters from now. Withdrawals are also paid instantly.",
  },
  {
    img: feed4,
    firstName: "Chloe",
    lastName: "J. Bouffard",
    text: "Brackium is the best project I have invested in, the withdrawals are incredibly instant and they have a pretty good support, I really recommend them.",
  },
];

export const footerImgs = [
  footerImg1,
  footerImg2,
  footerImg3,
  footerImg4,
  footerImg5,
  footerImg6,
  footerImg7,
  footerImg8,
  footerImg9,
  footerImg10,
];

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min); // Ensure the minimum is an integer
  max = Math.floor(max); // Ensure the maximum is an integer
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const faqData = [
  {
    title: "How to register for a personal account at your service?",
    text: "To create personal account, please, click at ‘Registration’ button and fill in the form that opens with all required details. Make sure that all the information is correct, and press at ‘Create account’ button.",
  },
  {
    title: "How much do I pay to register for a personal account?",
    text: "Registration and creation of personal accounts is free of charge for any user.",
  },
  {
    title: "How to recover the password that was forgotten?",
    text: "Make use of password ‘Recovery’ option. In case of problem, please, contact our technical support. Before contacting us, however, please, make sure that you originally put in correct login and password (check keyboard register and layout).",
  },
  {
    title: "What are the requirements for project participants?",
    text: "Any person of legal age can participate in the project, irrespective of nationality, social status and religious preferences.",
  },
  {
    title: "Is it possible to change personal account information?",
    text: "In order to make changes to your personal data you just need to login to your account after registration and choose a corresponding menu choice.",
  },
  {
    title: "What payment systems are available for deposits and withdrawals?",
    text: "For the time being the project accepts Bitcoin, Litecoin, Dogecoin, Tether USDT-TRC20 and Others.",
  },
  {
    title: "What is the maximum number of deposits for one investor?",
    text: "There are no limits for a number of deposits in our project. It is up to individual investor to decide depending on his/her wishes, goals and financial capacities.",
  },
  {
    title: "How the profit accruals a made in the project?",
    text: "Accruals are made in accordance with the terms of investment plan chosen.",
  },
  {
    title:
      "Are there any limits for withdrawals of funds from account balance?",
    text: "There are no limits for withdrawals. You can order payments every day.",
  },
  {
    title: "How to make a withdrawal of funds from the system?",
    text: "The order of withdrawal of funds is as follows: login to your personal account, get to ‘Withdraw funds’ section, choose the payment system you have funds in, put in a required amount, and confirm the operation.",
  },
  {
    title: "How much time is required to process a withdrawal?",
    text: "After you order withdrawal the funds shall be immediately transferred to your wallet. For Bitcoin, Litecoin, Dogecoin and USDT-TRC20 withdrawals you might have to wait for three confirmations from the corresponding blockchain.",
  },
  {
    title: "Are there minimum and maximum amounts for withdrawal?",
    text: "The minimum withdrawal amount from account balance is $110. There is no any maximum withdrawal limits.",
  },
];
