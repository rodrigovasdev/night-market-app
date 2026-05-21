interface OfferCardProps {
    title: string;
    description: string;
    bgColor: string;
    href?: string;
    onClick?: () => void;
}

export default function OfferCard(props: OfferCardProps) {
    const { title, description, bgColor, onClick } = props;

    if (onClick) {
        return (
            <button
                type="button"
                className="w-full text-left"
                onClick={onClick}
            >
                <div className={`flex flex-col w-full h-full p-5 py-8 gap-1 ${bgColor} rounded-xl shadow-md`}>
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p className="text-gray-600">{description}</p>
                </div>
            </button>
        );
    }

    return (
        <div className="w-full">
            <div className={`flex flex-col w-full h-full p-5 py-8 gap-1 ${bgColor} rounded-xl shadow-md`} >
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>      
    );
}
