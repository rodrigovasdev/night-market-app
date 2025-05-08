export default function Container({ children, bgClass, shadow }: { children: React.ReactNode, bgClass?: string, shadow?: boolean }) {
    const propClass = bgClass ? bgClass : 'bg-gray-50 border-1 border-gray-300 ';
    const shadowClass = shadow ? "shadow-md " : "shadow-none ";
    const firstDivClass = shadowClass + "w-full h-full py-10 px-8 md:px-30 lg:px-40 md:h-3/4 bg-gray-200"
    const secondDivClass = propClass + "w-7/8 mx-auto flex flex-col gap-10 rounded-xl py-10 px-4 sm:px-10 lg:px-15 xl:px-25" + shadowClass;
    //DEJAR EL PADDING MEDIANTE PROPS EN EL COMPONENTE CONTAINER
    return (
        <div className={firstDivClass}>
            <div className={secondDivClass}>
                {children}
            </div>
        </div>
    );
}