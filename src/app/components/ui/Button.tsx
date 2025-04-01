interface ButtonProps {
    variant: string;
    content: string;
    width?: string;
}
  
  const Button = ({ variant, content = "default", width = "w-40" }: ButtonProps) => {
    const arrayClass = variant === "primary"
      ? `relative text-white bg-neutral-950 font-semibold rounded-lg px-4 py-3 ${width} cursor-pointer hover:bg-neutral-700`
      : `relative text-neutral-950 font-semibold bg-slate-100 border-2 border-neutral-950 rounded-lg px-4 py-3 ${width} cursor-pointer hover:bg-slate-200`;
    return (
      <button className={arrayClass}>
        {content}
      </button>
    );
  };
  
  export default Button;