import { IoLogoUsd } from "react-icons/io";

export const coins = [
    {
        sNo: 1,
        icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
        <path fill="#ffc107" d="M44,24c0,11.044-8.956,20-20,20S4,35.044,4,24S12.956,4,24,4S44,12.956,44,24z"></path><path fill="#fff8e1" d="M17,34V14h8.199c2.41,0,4.234,0.465,5.48,1.395s1.867,2.293,1.867,4.086c0,0.98-0.25,1.844-0.746,2.59c-0.5,0.746-1.195,1.293-2.086,1.641c1.016,0.258,1.816,0.773,2.402,1.555C32.703,26.043,33,26.992,33,28.121c0,1.922-0.609,3.379-1.828,4.367S28.219,33.98,25.965,34H17z M21,22h4.363c2.063-0.035,3.098-0.824,3.098-2.445c0-0.906-0.262-1.559-0.785-1.957S26.328,17,25.199,17H21V22z M21,25v6h4.844C26.805,31,29,30.531,29,28.391S27.883,25.027,26,25H21z"></path><path fill="#fff8e1" d="M20 11h3v5h-3V11zM25 11h3v5h-3V11zM20 32h3v5h-3V32zM25 32h3v5h-3V32z"></path>
        </svg>,
        coinName: "Bitcoin",
        abbreviation: "BTC",
        lastPrice: '$56,141.41',
        change: 1.41
    },
    {
        sNo: 2,
        icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
        <path fill="#9fa8da" d="M11 24L25 2 39 24 25 32z"></path><path fill="#7986cb" d="M25 2L39 24 25 32z"></path><path fill="#9fa8da" d="M11 27L25 35 39 27 25 46z"></path><path fill="#7986cb" d="M25 35L39 27 25 46zM11 24L25 18 39 24 25 32z"></path><path fill="#5c6bc0" d="M25 18L39 24 25 32z"></path>
        </svg>,
        coinName: "Ethereum",
        abbreviation: "ETH",
        lastPrice: '$3,725.31',
        change: 0.87
    },
    {
        sNo: 3,
        icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 64 64">
        <path fill="orange" d="M33.721,25.702l2.583,2.581c0.944,0.944,0.944,2.477,0,3.421	l-2.587,2.587c-0.944,0.944-2.477,0.944-3.421,0l-2.583-2.583c-0.944-0.944-0.944-2.477,0-3.421l2.587-2.585	C31.243,24.758,32.777,24.758,33.721,25.702z"></path><path fill="orange" d="M11.725,25.701l2.583,2.581c0.944,0.944,0.944,2.477,0,3.421	l-2.587,2.587c-0.944,0.944-2.477,0.944-3.421,0l-2.583-2.583c-0.944-0.944-0.944-2.477,0-3.421l2.587-2.585	C9.247,24.757,10.781,24.757,11.725,25.701z"></path><path fill="orange" d="M55.718,25.701l2.583,2.581c0.944,0.944,0.944,2.477,0,3.421	l-2.587,2.587c-0.944,0.944-2.477,0.944-3.421,0l-2.583-2.583c-0.944-0.944-0.944-2.477,0-3.421l2.587-2.585	C53.241,24.757,54.774,24.757,55.718,25.701z"></path><path fill="orange" d="M19.298,23.295l-2.581-2.583	c-0.944-0.943-0.944-2.479,0-3.421l13.58-13.584c0.944-0.945,2.477-0.945,3.421-0.001l13.583,13.576	c0.943,0.944,0.944,2.477,0,3.421l-2.587,2.588c-0.944,0.943-2.477,0.943-3.421-0.001l-9.284-9.292l-9.288,9.297	C21.777,24.239,20.243,24.241,19.298,23.295z"></path><path fill="orange" d="M19.297,36.701l-2.583,2.583	c-0.944,0.944-0.944,2.477,0,3.421l13.58,13.585c0.944,0.944,2.477,0.944,3.421,0l13.583-13.576c0.944-0.944,0.944-2.477,0-3.421	l-2.587-2.587c-0.944-0.944-2.477-0.944-3.421,0l-9.284,9.292l-9.288-9.297C21.774,35.757,20.241,35.757,19.297,36.701z"></path><path fill="#fff" fill-opacity=".298" d="M16.715,17.293L30.297,3.707	c0.944-0.945,2.477-0.945,3.421-0.001l13.583,13.577c-1.957,1.472-4.753,1.317-6.535-0.464l-8.76-8.752l-8.753,8.759	C21.47,18.61,18.674,18.765,16.715,17.293z"></path><path fill="#fff" fill-rule="evenodd" d="M23.43,14.577	c-0.585-0.585-0.585-1.536,0-2.121l3.024-3.024c0.585-0.585,1.536-0.585,2.121,0c0.585,0.585,0.585,1.536,0,2.121l-3.024,3.024	C24.966,15.162,24.015,15.162,23.43,14.577z" clip-rule="evenodd"></path><path fill-opacity=".149" d="M16.715,42.706l13.581,13.585	c0.944,0.945,2.477,0.945,3.421,0.001l13.583-13.577c-1.957-1.472-4.753-1.317-6.535,0.464l-8.76,8.752l-8.753-8.759	C21.47,41.389,18.674,41.234,16.715,42.706z"></path><path fill-opacity=".298" d="M58.009,61c0-1.656-11.648-3-26-3s-26,1.344-26,3	c0,1.656,11.648,3,26,3S58.009,62.656,58.009,61z"></path>
        </svg>,
        coinName: "Binance Coin",
        abbreviation: "BNB",
        lastPrice: '$423.12',
        change: -0.54
    },
    {
        sNo: 4,
        icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="20" fill="#26a69a"></circle><rect width="18" height="5" x="15" y="13" fill="#fff"></rect><path fill="#fff" d="M24,21c-4.457,0-12,0.737-12,3.5S19.543,28,24,28s12-0.737,12-3.5S28.457,21,24,21z M24,26 c-5.523,0-10-0.895-10-2c0-1.105,4.477-2,10-2s10,0.895,10,2C34,25.105,29.523,26,24,26z"></path><path fill="#fff" d="M24,24c1.095,0,2.093-0.037,3-0.098V13h-6v10.902C21.907,23.963,22.905,24,24,24z"></path><path fill="#fff" d="M25.723,25.968c-0.111,0.004-0.223,0.007-0.336,0.01C24.932,25.991,24.472,26,24,26 s-0.932-0.009-1.387-0.021c-0.113-0.003-0.225-0.006-0.336-0.01c-0.435-0.015-0.863-0.034-1.277-0.06V36h6V25.908 C26.586,25.934,26.158,25.953,25.723,25.968z"></path>
        </svg>,
        coinName: "Tether",
        abbreviation: "USDT",
        lastPrice: '$1.00',
        change: 0.01
    },
    {
        sNo: 5,
        icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 64 64">
        <linearGradient id="2xyP8ITvw2AyN9J62dUAba_icTiMgoOHSVy_gr1" x1="32" x2="32" y1="17.936" y2="43.068" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#2xyP8ITvw2AyN9J62dUAba_icTiMgoOHSVy_gr1)" d="M41.806,25H17.032l5.161-6h24.774L41.806,25z M17.032,45h24.774l5.161-6H22.194L17.032,45z M17.032,29l5.161,6h24.774l-5.161-6H17.032z"></path><linearGradient id="2xyP8ITvw2AyN9J62dUAbb_icTiMgoOHSVy_gr2" x1="32" x2="32" y1="8.553" y2="55.331" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#2xyP8ITvw2AyN9J62dUAbb_icTiMgoOHSVy_gr2)" d="M32,58C17.663,58,6,46.337,6,32	C6,17.664,17.663,6,32,6s26,11.664,26,26C58,46.337,46.337,58,32,58z M32,8C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24	S45.233,8,32,8z"></path>
        </svg>,
        coinName: "Solana",
        abbreviation: "SOL",
        lastPrice: '$155.20',
        change: 2.45
    },
    {
        sNo: 6,
        icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
        <path fill="#6c19ff" d="M29.024,31.916c-1.338-1.319-3.14-2.059-5.019-2.059c-1.879,0-3.681,0.74-5.019,2.059L9.807,41H4	l12.08-11.98c2.111-2.079,4.956-3.245,7.92-3.245s5.808,1.166,7.92,3.245L44,41h-5.807L29.024,31.916z"></path><path fill="#6c19ff" d="M38.193,7H44L31.92,18.98c-2.111,2.079-4.956,3.245-7.92,3.245s-5.808-1.166-7.92-3.245L4,7h5.807 l9.179,9.084c1.338,1.319,3.14,2.059,5.019,2.059c1.879,0,3.681-0.74,5.019-2.059L38.193,7z"></path>
        </svg>,
        coinName: "XRP",
        abbreviation: "XRP",
        lastPrice: '$1.09',
        change: -0.25
    },
    {
        sNo: 7,
        icon: <IoLogoUsd size={25} color="#fff" />,
        coinName: "USD Coin",
        abbreviation: "USDC",
        lastPrice: '$1.00',
        change: 0.02
    }
];