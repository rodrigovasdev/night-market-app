export default function CardContainer({ children, bgClass, shadow, padding, rounded }: { children?: React.ReactNode, bgClass?: string, shadow?: boolean, padding?: string, rounded?: string }) {
    const propClass = bgClass ? bgClass : 'bg-gray-50 border-1 border-gray-300 ';
    const paddingClass = padding ? padding + ' ' : 'py-10 px-4 sm:px-10 lg:px-15 xl:px-25 ';
    const shadowClass = shadow ? "shadow-md " : "shadow-none ";
    const roundedClass = rounded ? rounded + ' ' : "rounded-xl ";
    const secondDivClass = roundedClass + paddingClass + propClass + shadowClass + "w-7/8 mx-auto flex flex-col gap-10";
    //DEJAR EL PADDING MEDIANTE PROPS EN EL COMPONENTE CONTAINER
    return (
            <div className={secondDivClass}>
                {children}
            </div>
    );
}