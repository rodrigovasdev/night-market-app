interface ButtonProps {
    variant: string;
    content: string;
}

export default function Button(buttonProps: ButtonProps) {
    
    const variant = buttonProps.variant || "primary";
    const arrayClass = variant === "primary" ? "relative text-white bg-neutral-950 font-semibold rounded-lg px-4 py-3 w-40 cursor-pointer hover:bg-white hover:border-2 hover:border-neutral-950 hover:text-neutral-950" :
                                                "relative text-neutral-950 font-semibold bg-slate-100 border-2 border-neutral-950 rounded-lg px-4 py-3 w-40 cursor-pointer hover:bg-neutral-950 hover:border-slate-100 hover:text-white";
    const content = buttonProps.content || "default";

    return (
        <button type="button" className={arrayClass}>
            {content}
        </button>
    );


    
}