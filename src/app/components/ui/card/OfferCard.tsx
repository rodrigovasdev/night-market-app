interface OfferCardProps {
    title: string;
    description: string;
    bgColor: string;
    href: string;
}

import Link from "next/link";

export default function OfferCard(props: OfferCardProps) {
    const { title, description, bgColor, href } = props;
    return (
        <Link href={href} className="w-full">
            <div className={`flex flex-col w-full h-full p-5 py-8 gap-1 ${bgColor} rounded-xl shadow-md`} >
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-gray-600">{description}</p>
            </div>
        </Link>      
    );
}
