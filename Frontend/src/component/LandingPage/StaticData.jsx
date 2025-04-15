import { LuShield, LuQrCode } from "react-icons/lu";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export const How_it_work = [
  {
    step: "1",
    title: "Companies Register Products",
    description:
      "Manufacturers add product details to the blockchain through our secure portal",
  },
  {
    step: "2",
    title: "QR Codes Generated",
    description:
      "Unique QR codes are created and buttoned to blockchain records for each product",
  },
  {
    step: "3",
    title: "Consumers Verify Products",
    description:
      "Users scan QR codes to instantly check product authenticity against blockchain records",
  },
];

export const feature = [
  {
    icon: <LuShield className="w-8 h-8" />,
    title: "Tamper-Proof",
    description:
      "Blockchain technology ensures product data cannot be altered or falsified",
  },
  {
    icon: <LuQrCode className="w-8 h-8" />,
    title: "Instant Verification",
    description:
      "Scan and verify products in seconds with our easy-to-use QR scanner",
  },
  {
    icon: <IoMdCheckmarkCircleOutline className="w-8 h-8" />,
    title: "Supply Chain Tracking",
    description:
      "Track products from manufacturing to retail with complete transparency",
  },
];
