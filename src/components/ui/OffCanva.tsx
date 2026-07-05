

import Button from "./Button";
import { XMarkIcon } from "@heroicons/react/24/solid";
interface OffCanvaProps {
    onClick: () => void;
    isOpen: boolean;
    title: string;
    children?: React.ReactNode;
}
export default function OffCanva(props: OffCanvaProps) {
    const { onClick, isOpen, title, children} = props;

    return (
        <>
            <div
                className={`fixed inset-0 z-90 bg-black/50 transition-opacity duration-300 ${
                    isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onClick={onClick}
            />

            <div
                className={`fixed top-0 right-0 z-100 w-full md:w-1/4 h-screen bg-white transform transition-transform duration-500 ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex justify-between p-4 border-b border-gray-200">
                    <h1 className="font-bold text-lg my-auto">{title}</h1>
                    <Button type="icon" onClick={onClick} border="border-none" paddingY="py-0" paddingX="px-0" width="w-6" heigth="h-6">
                        <XMarkIcon className="w-7 h-7" />
                    </Button>
                </div>
                {children}
            </div>
        </>
    );
}
