export default function CardContainer({ children, bgClass, shadow, padding, rounded, width, margin }: {width?: string, children?: React.ReactNode, bgClass?: string, shadow?: boolean, padding?: string, rounded?: string, margin?: string}) {
    const propClass = bgClass ? bgClass + ' ' : ' bg-gray-50 border-1 border-gray-300 ';
    const paddingClass = padding ? padding + ' ' : ' py-10 px-4 sm:px-10 lg:px-15 xl:px-25 ';
    const marginClass = margin ? ' ' + margin : ' mx-auto';
    const shadowClass = shadow ? " shadow-md " : " shadow-none ";
    const roundedClass = rounded ? rounded + ' ' : " rounded-xl ";
    const widthClass =  width ? width + ' ': ' w-7/8 '
    const secondDivClass = roundedClass + paddingClass + propClass + shadowClass + widthClass + marginClass;
    return (
            <div className={secondDivClass}>
                {children}
            </div>
    );
}