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

export const agreements: string[] = [
  "The Client confirms that he/she has read, understood and accepted all information, conditions and terms set out on Website which are open to be reviewed and can be examined by the public and which include important legal Information.",
  "By accepting this Agreement, the Client agrees and irrevocably accepts the terms and conditions contained in this Agreement, its annexes and/or appendices as well as other documentation/information published on the Website, including without limitation to the Privacy Policy, Payment Policy, Withdrawal & Refund Policy, Code of Conduct, Order Execution Policy and Anti-Money Laundering Policy. The Client accepts this Agreement by registering an Account on the Website and depositing funds. By accepting the Agreement, and subject to the Company’s final approval, the client enters into a legal and binding agreement with the Company.",
  "The terms of this Agreement shall be considered accepted unconditionally by the Client upon the Company’s receipt of an advance payment made by the Client. As soon as the Company receives the Client’s advance payment, every operation made by the Client on the Trading Platform shall be subject to the terms of this Agreement and other documentation/information on the Website.",
  "The Client hereby acknowledges that each and any Operation, activity, transaction, order and/or communication performed by him/her on the Trading Platform, including without limitation through the Account, and the Website, shall be governed by and/or must be executed in accordance to, the terms and conditions of this Agreement and other documentation/information on the Website.",
  "By accepting this current agreement, the Client confirms that he/she is able to receive information, including amendments to the present Agreement either via email or through the Website.",
];

export const terms = [
  {
    title: "terms",
    terms: [
      "Account – means unique personified account registered in the name of the Client and which contains all of the Client’s transactions/ operations on the Trading Platform (as defined below) of the Company.",
      "Ask – means the higher price in a quote. The price the Client may buy at. Investors are entitled to purchase company shares for the minimum of $20000",
      "Bid – means the lower price in a quote. compounding of investment is only allowed from the second plan The price the Client may sell at. ",
      "Classic Options – means CFDs on stock options.",
      "CFD (contract for difference) – means a tradeable contract entered into between the Client and the Company, who exchange the difference in the value of an Instrument, as specified on the Trading Platform at the time of opening a Transaction, and the value of that Instrument at the contract’s end, also no is allowed to invest below your last deposit.",
      "Digital Option Contract – means a type of derivative instrument where the Client earns a payout if they correctly predict the price movement of the underlying asset at the time of the option’s expiry. The prediction can be made as to whether the value of the underlying asset will fall above or below the strike price at time of expiration. Should the option expire at the selected strike price, it will be considered to expire out-of-the money and will result in the loss of the invested amount.",
      "Execution – means the execution of Client order(s) by the Company acting as the Client’s counter party as per the terms of the present agreement. The company operates on automatic withdrawal which manual or forceful withdrawal is prohibited",
      "Notification of changes – Terms and conditions agreement will charge as you learn more about your market and encounter new issues. This is common with all developers and users  generally expect it. We reserve the right to change the rules, commissions and rate of the program at any time and our sole discretion without notice, especially in order to respect the integrity and security of the members interests. You agree that it is your sole responsibility to review the current terms.  This simply means users would receive notification.",
      "Termination – Dropbox adopted a general approach to terminating accounts. It explain that users may stop using service at anytime and a violation of T&C results in account termination. In no way will you interfere with the proper operation of the platform by performing any actions that could adversely affect of the operation or reputation of Brackium Investments. You are responsible for taking appropriate measures to ensure that you comply with all laws of your country of residence, including applicable tax laws. You agree to pay in full all amounts payable including any additional costs established by the platform; You are responsible including recognizing a potential complete loss of funds, for any erroneous transaction made inside or outside Brackium Investments, due to your fault/inattention  ",
      "Multiple Account – it is strictly prohibited to register multiple account in your team. you agree that you will not distribute spam using the site name for any commercial purposes or activities aimed at personal profit which bypasses the general goal and benefit of the platform user.",
      " The Client confirms that he/she has read, understood and accepted all information, conditions and terms set out on Website which are open to be reviewed and can be examined by the public and which include important legal Information.",
      " By accepting this Agreement, the Client agrees and irrevocably accepts the terms and conditions contained in this Agreement, its annexes and/or appendices as well as other documentation/information published on the Website, including without limitation to the Privacy Policy, Payment Policy, Withdrawal and Order Execution Policy and Anti-Money Laundering Policy. The Client accepts this Agreement by registering an Account on the Website and depositing funds. By accepting the Agreement, and subject to the Company’s final approval, the Client enters into a legal and binding agreement with the Company.",
      " The terms of this Agreement shall be considered accepted unconditionally by the Client upon the Company’s receipt of an advance payment made by the Client. As soon as the Company receives the Client’s advance payment, every operation made by the Client on the Trading Platform shall be subject to the terms of this Agreement and other documentation/information on the Website.",
      "The Client hereby acknowledges that each and any Operation, activity, transaction, order and/or communication performed by him/her on the Trading Platform, including without limitation through the Account, and the Website, shall be governed by and/or must be executed in accordance to, the terms and conditions of this Agreement and other documentation/information on the Website.",
      " By accepting this current agreement, the Client confirms that he/she is able to receive information, including amendments to the present Agreement either via email or through the Website. Aggressive behavior, rudness, threats or provocation against the platform developers, employees and other users is not allowed. Don’t post bad vote on public forms and at gold rating site without contacting the administrator of our program first. Maybe there was a technical problem with your transaction, so please always clear the things with the administrator",
      "A client that is a legal entity can register with the Company not through any other means but through the registration button below each plan , the Bronze matrix plan run an IPV4 network and do not support multiple investment. All terms and conditions contained herein, including without limitation to 1 to 5 above, shall at all times be applicable to the Legal Entity and the latter shall conform with such terms and conditions, obligations and rights at all times. It is advised the an investor should upgrade to Silver matrix plan or Gold matrix plan which runs on IPV6 after the second reinvestment to avoid system delay and unnecessary propagation from our mining server which as a result can withheld your profit.",
    ],
  },
  {
    title: " Subject of the Agreement",
    terms: [
      "The subject of the Agreement shall be the provision of Services to the Client by the Company under the Agreement and through the Trading Platform.",
      "The Company shall carry out all transactions as provided in this Agreement on an execution-only basis, neither managing the account nor advising the Client. The Company is entitled to execute transactions requested by the Client as provided in this Agreement even if the transaction is not beneficial for the Client. The Company is under no obligation, unless otherwise agreed in this Agreement and/or other documentation/information on the Website,to monitor or advise the Client on the status of any transaction, to make margin calls, or to close out any of the Client’s open positions. Unless otherwise specifically agreed, the Company is not obligated to make an attempt to execute the Client’s order using quotes more favorable than those offered through the Trading Platform.",
      "The Investment and Ancillary Services which the Company should provide under the terms of the Agreement are stated below, and the Company will provide them in its capacity as a market maker under the terms of this Agreement. The Services that the Company provides in relation to one or more Financial Instruments are the following (the list below shall not be regarded as exhaustive.",
    ],
  },
];

export const privacyData = [
  {
    title: "WHO WE ARE",
    texts: [
      "Brackium Investments Limited is a company registered in United States and  United Kingdom for Crypto forex and many more types of trading. Brackium Investments Limited is the controls and is responsible for the data of its Client disclosed, to register for a Trading Account and/or to make use of any other services offered by the Brackium Investments Limited through the (hereinafter “Website”) (this term shall at all times include Website’s desktop and mobile versions). Brackium Investments Limited exercises control over the processing of data in undertakings affiliated to it and which belong to the Brackium Investments Limited Group of companies.",
      "This Privacy Policy addresses the privacy issues of the Brackium Investments Limited Group so when we mention “Brackium Investments Limited”, “Company”, “we”, “us” or “our” in this Privacy Policy, we are referring to the relevant company in Brackium Investments Limited responsible for collecting and/or processing your data when you use the Trading Platform through the Website, either for a Trading Account or more(or their mobile/desktop versions) (hereinafter the Service(s)). In Brackium Investments LTD, we respect your privacy and therefore all companies within the Brackium Investments LTD is committed to protect your data, which it collects, uses and/or has access to.",
      "The Company takes measures to implement advanced data protection policies and procedures and to update them from time to time for the purpose of safeguarding its Client’s data and the Client’s account. Your data is protected by the legal, administrative and technical measures that we take to ensure the privacy, integrity and accessibility of data. To prevent security incidents with your data, we use a mixed organizational and technical approach based on the results of annual risk assessment.",
      "The Company shall not divulge any private information of its Clients and former Clients unless the Client approves in writing such disclosure or unless such disclosure is required under applicable law or is required in order to verify the Client’s identity or it is required for Brackium Investments LTD to perform its contractual obligations under any agreement concluded with the Client. The Clients’ information is processed only by the employees of the Company and/or employees of the Premium Trade limited group and/or trusted third parties which provide specific support services, dealing with the specific Client’s Accounts and necessary for the provision of our services. All such information shall be stored on electronic and physical storage media according to applicable law here in the United state of America.",
    ],
  },
  {
    title: "DATA USAGE",
    subTitle:
      "We may collect, use, store and transfer different kinds of data about you which we have grouped together as follows:",
    texts: [
      "Identity Data includes first name, last name, and patronymic (if available)’s number, and copy of photo.",
      "Contact Data includes billing address, email address and telephone numbers.",
      "Financial Data includes bitcoin addresses or any other related address.",
      "Transaction Data includes details about the transactions performed by you, details about payments, withdrawals, exchanges, trading history, profit, balance, deposited and withdrawal amount methods, and any other details in relation to the services you have made use of through our Website.",
      "Technical Data includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in type and versions, operating system and platform, and other technologies on the devices you use to access the Website and use of cookies stored on your device.",
      "Profile Data includes your Client’s account details, username and password, transactions made by you, your interests, preferences, feedback and/or information received through your interaction with us within the course of providing our services and survey responses.",
      "Usage Data includes information about how you use the Website, products and services, registration date, account category, trading cluster, number of complaints, number of requests filed and IP history.",
      "Marketing and Communication Data includes your preferences in receiving marketing from us and your communication preferences.",
      "Special Categories of Data/ ‘Sensitive’ Data includes details about your religious belief and/or criminal convictions and offences.",
      "Conformity Data includes details about your education, employment status, trading experience, self-assessment test.",

      "Data in KYC (Know your customer) includes identity document information, including copies of recent dated Utility Bills, Identity Card, Passport, and/or Driver’s License.",
      "Economic Profile Data includes details on annual income, net profit, expected annual amount of investment, sources of funds.",
      "Location Data includes details on your actual location when interacting with our Website (for example, a set of parameters that determine regional settings of your interface, namely residency country, time zone, and the interface language)",
      "Audio Data includes full voice recordings of calls that you receive from us or make to us. (the above collectively referred to as Personal Data)",
    ],
  },
];
