export default function Container({ children, shadow }: { children: React.ReactNode, shadow?: boolean }) {
    const shadowClass = shadow ? "shadow-md " : "shadow-none ";
    const firstDivClass = shadowClass + "w-full h-full py-10 px-8 md:px-30 lg:px-40 md:h-3/4 bg-white"
    //DEJAR EL PADDING MEDIANTE PROPS EN EL COMPONENTE CONTAINER
    return (
        <div className={firstDivClass}>
            {children}
        </div>
    );
}