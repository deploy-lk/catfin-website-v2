import type { StaticImageData } from "next/image";
import Rishi from "@/components/atoms/team/rishi.png";
import Suneet from "@/components/atoms/team/suneet.png";
import Ujjwal from "@/components/atoms/team/ujjwal.png";
import Sandeep from "@/components/atoms/team/sandeep.png";
import Ankur from "@/components/atoms/team/ankur.png";
import Abhishek from "@/components/atoms/team/abhishek.jpg";
import Gagan from "@/components/atoms/team/gagan.png";
import Sunny from "@/components/atoms/team/sunny.png";
import Sonu from "@/components/atoms/team/sonu.jpg";

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  description: string;
  image: StaticImageData;
  experience?: string;
}

export const teamData: TeamMember[] = [
  {
    id: "rishi",
    name: "Rishi Mohan Rastogi",
    position: "CORE TEAM MEMBER",
    description:
      "Rishi, an entrepreneur and Chartered Accountant, has been at the helm of Cateye for over five years, driving its growth and success. Cateye has emerged as one of the premier financial products and services distribution companies in India, under his strategic leadership. During his tenure, the company achieved a remarkable business turnover of Rs 3,500 crores, and it is now poised for an ambitious expansion, targeting a revenue of Rs 5,000 crores in the coming year. Cateye has established itself as a trusted and preferred Distribution Service Agency (DSA) partner for leading private banks, as well as several prominent and emerging Non-Banking Financial Companies (NBFCs). Rishi's leadership has been pivotal in positioning Cateye as a key player in the highly competitive financial services sector.",
    image: Rishi,
    experience: "5+ years leading Cateye, Rs 3,500 crores business turnover",
  },
  {
    id: "suneet",
    name: "Suneet Rastogi",
    position: "CORE TEAM MEMBER",
    description:
      "A Chartered Accountant by profession having around 17 years of experience in commercial lending. He has worked with top private sectors banks for around 14 years i.e., ICICI, RBS and Indusind- (Handled 40-50 crore exposure). In his last assignment he was designated as Zonal Head - Mumbai with Indusind for SME commercial lending. He has also experience of working in different geographies such as Delhi, Rajasthan and Maharashtra. Handled commercial SME Loans - upto 50 crores of single exposure. Currently also working on Commercial deals + Green filed projects (Ticket size 15-30 crore + Working on Private Placement of shares, preparing company for listing in SME exchange and getting good company raise funds through HNIs.",
    image: Suneet,
    experience: "17 years in commercial lending, 40-50 crore exposure handling",
  },
  {
    id: "ujjwal",
    name: "Ujjwal Rastogi",
    position: "CORE TEAM MEMBER",
    description:
      "A Financial Advisor by profession having around 6 years of experience in MSME Lending and Retail Loans. He has worked with several PSUs as a channel partner for around 3 years. Has successfully handled MSME & Retail Lending up to 5 crores of exposure. Currently, he is working in Distribution Channel for Secured and Unsecured Retail Loans, Working Capital and actively managing the UP East Location",
    image: Ujjwal,
    experience: "6 years in MSME Lending, up to 5 crores exposure",
  },
  {
    id: "sandeep",
    name: "Sandeep Kumar",
    position: "CORE TEAM MEMBER",
    description:
      "Sandeep Kumar is an accomplished professional with an MBA in Marketing and Finance and over 18 years of experience in the financial services industry. He specializes in Machinery Loans, Unsecured Business Loans, Supply Chain Finance, and Medical Equipment Finance. Throughout his career, Sandeep has contributed to the growth of several leading NBFCs, including Intec Capital Ltd., Religare, and Ziploan, as well as startups such as Enkash and Finagg.Sandeep’s core expertise lies in generating unsecured business loans through multiple channels, primarily focusing on the MSME sector across India. He has a proven track record of driving business growth and expanding market reach, with extensive experience in diverse regions, including Uttar Pradesh, Madhya Pradesh, Rajasthan, and Mumbai. Based in Delhi NCR, Sandeep brings a wealth of knowledge and strategic insight to every project he undertakes, making him a key asset in the financial services sector.",
    image: Sandeep,
    experience: "18+ years in financial services, MBA in Marketing and Finance",
  },
  {
    id: "ankur",
    name: "Ankur Rastogi",
    position: "CORE TEAM MEMBER",
    description:
      "A Chartered Accountant by profession having around 17 years of experience in MSME Lending, Channel Finance, Agri Lending and Priority Sector. He has worked with top private sectors banks for around 14 years i.e., ICICI, RBS and Indusind- (Handled 40-50 crore exposure). Specialized in handling big ticket size client and Structured Finance. In his last assignment he was designated as Zonal Head with Indusind for SME commercial lending. He has also experience of working in different geographies such as Gujarat, Madhya Pradesh, Chhattisgarh and Maharashtra. Have successfully managed teams across different geographies. Handled commercial SME Loans - upto 50 crores of single exposure.Currently working on Distribution channel for Secured and Unsecured Commercial and Retail loans, Working Capital and Project Finance.",
    image: Ankur,
    experience: "17 years in MSME Lending, 40-50 crore exposure",
  },
  {
    id: "abhishek",
    name: "Abhishek Miglani",
    position: "CORE TEAM MEMBER",
    description:
      "Abhishek is a competent & diligent professional with 24+ years’ experience in Customer Servicing, Back End Operations, Process Enhancement and Relationship Management. Having worked with big brands such as Telenor, Airtel, Tata & Genpact. He is Experienced in implementing procedures, control systems, service standards, operational policies & customer services standards. He has proven expertise in designing innovative service policies and strategies to facilitate acquisition and retention of customers and generate high value propositions for the customers. He is adept in mapping customer satisfaction and drawing vital inputs to realign strategies to achieve customer delight and tacking market dynamics and initiating reinforcements to neutralize competitors' moves. With superior people management and communication skills; sound knowledge of process and system, he heads the Cross Sell Business vertical for Cateye",
    image: Abhishek,
    experience: "24+ years in Customer Servicing and Operations",
  },
  {
    id: "gagan",
    name: "Gagan Bansal",
    position: "CORE TEAM MEMBER",
    description:
      "With an MBA in Marketing and Finance and 19 years of extensive experience in the financial industry, Gagan has established a commendable career characterized by a blend of strategic expertise and hands-on leadership. His professional journey includes significant tenures at prominent brands like YES Bank, HDFC, and AVIVA, where he honed his skills and developed a deep understanding of the financial sector. For nearly 13 years, Gagan successfully ran his own finance business, showcasing his entrepreneurial spirit and ability to navigate complex market dynamics. His continuous pursuit of knowledge and ability to anticipate market demands have made him a well-respected figure in the industry.",
    image: Gagan,
    experience: "19 years in financial industry, MBA in Marketing and Finance",
  },
  {
    id: "sunny",
    name: "Sunny Rana",
    position: "CORE TEAM MEMBER",
    description:
      "A Master in Business Administration by profession which having 10 years of experience in retail lending and financial services with reputed Bank/NBFC-(Handled 100+ crores exposure). He has experience to manage the Mortgage business and creating brand awareness for CATEYE. He is taking care for entire PAN India mortgage and SME commercial lending business. In his last assignment was as Area Head in INDUSIND BANK.Prior to that he was Area Head with Aditya Birla. Working in different geographies he give him upper edge in understanding with local business.He has excellent connect with channel partners and associates, his Specialization in taking of High-Value cases and structured Finance with Various PSU & Private Banks which helps in improving liaising skills. Currently working on Distribution channel for Secured and Unsecured Commercial and Retail loans, Working Capital and Project Finance.",
    image: Sunny,
    experience: "10 years in retail lending, 100+ crores exposure",
  },
  {
    id: "sonu",
    name: "Sonu Saraswat",
    position: "CORE TEAM MEMBER",
    description:
      "Meet Mr. Saraswat, a highly experienced professional with over 12 years in B2B trade business and supply chain finance. He has played a pivotal role in the growth of multiple unicorns and high-impact startups, particularly in large-scale Manufacturing and EPC (Engineering, Procurement, and Construction) companies. Mr. Saraswat’s expertise has been instrumental in driving success at organizations such as Oxyzo Financial, Aditya Birla Group, Zetwerk Manufacturing, and Metal Book, where he focused on delivering tailored solutions for large manufacturing and EPC customer segments.Holding an MBA in Finance and Marketing, Mr. Saraswat brings a blend of strategic business insight and hands-on operational expertise. Despite his impressive career, he remains grounded and humble, always prioritizing collaboration and integrity in every partnership.His deep understanding of manufacturing and EPC sectors, combined with his global experience, makes him a trusted advisor for driving business growth and innovation in these industries.",
    image: Sonu,
    experience: "12+ years in B2B trade and supply chain finance",
  },
];
