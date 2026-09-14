import { XMarkIcon } from '@heroicons/react/24/solid'

interface PopUpContainerProps {
    onClose: () => void;
    children: React.ReactNode;
    isClosing?: boolean;
}

export default function PopUpContainer({ onClose, children, isClosing = false }: PopUpContainerProps) {
    return (
        <div
            inert={isClosing}
            className={`fixed top-0 left-0 w-full h-full bg-black/60 z-50 flex items-center justify-center ${isClosing ? "popup-backdrop-exit" : "popup-backdrop-enter"}`}
            onClick={onClose}
        >
            <div
                className={`bg-white p-6 rounded shadow-lg ${isClosing ? "popup-panel-exit" : "popup-panel-enter"}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="w-full px-4 flex justify-between items-center pb-3 gap-30 md:gap-60">
                    <span className="text-2xl font-semibold whitespace-nowrap">N-Market</span>
                    <XMarkIcon className="h-10 w-10 cursor-pointer" onClick={onClose} />
                </div>
                {children}
            </div>
        </div>
    );
}
