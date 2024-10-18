import { FaBitcoin } from "react-icons/fa";
import { IoLogoChrome } from "react-icons/io";
import { MdVerifiedUser } from "react-icons/md";
import { PiFileVideoBold } from "react-icons/pi";

export const features = [
    {
        logo: <IoLogoChrome size={50} />,
        feature: 'Manage Portfolio',
        description: 'Manage and sell popular digital currencies, keep track of them in one place.'
    },
    {
        logo: <MdVerifiedUser size={50} />,
        feature: 'Protected Securely',
        description: 'Your digital assets are secured with top-level encryption and safety measures.'
    },
    {
        logo: <FaBitcoin size={50} />,
        feature: 'Cryptocurrency Variety',
        description: 'Access a wide variety of cryptocurrencies for trading and managing your portfolio.'
    },
    {
        logo: <PiFileVideoBold size={50} />,
        feature: 'Learn Best Practices',
        description: 'Stay updated with the best practices for managing and growing your digital assets.'
    }
];
