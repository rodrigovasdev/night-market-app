export default function CardContainer({ children, bgClass, shadow, padding, rounded, width, margin, id }: {width?: string, children?: React.ReactNode, bgClass?: string, shadow?: boolean, padding?: string, rounded?: string, margin?: string, id?: string}) {
    const propClass = bgClass ? bgClass + ' ' : ' border-1 border-gray-300 ';
    const paddingClass = padding ? padding + ' ' : ' py-10 px-4 lg:px-15 ';
    const marginClass = margin ? ' ' + margin : ' ';
    const shadowClass = shadow ? " shadow-md " : " shadow-none ";
    const roundedClass = rounded ? rounded + ' ' : " rounded-xl ";
    const widthClass =  width ? width + ' ': ' w-full '
    const secondDivClass = roundedClass + paddingClass + propClass + shadowClass + widthClass + marginClass;
    return (
            <section id={id} className={secondDivClass}>
                {children}
            </section>
    );
}