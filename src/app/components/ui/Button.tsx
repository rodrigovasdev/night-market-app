interface ButtonProps {
    variant?: string;
    type?: string;
    content?: string;
    width?: string;
    heigth?: string;
    paddingY?: string;
    paddingX?: string;
    border?: string;
    children?: React.ReactNode;
    aux?: string;
    href?: string;
    onClick?: () => void
}

import Link from "next/link";

  const Button = ({ variant, content, type = "text", children, width = "w-20", heigth = "h-10" , paddingY = "py-2" , paddingX = "px-4", aux, href = '',border, onClick}: ButtonProps) => {
    const sharedClasses = `relative cursor-pointer rounded-full font-semibold text-sm text-align-center ${aux}`;
    const arrayClass = variant === "primary"
    ? `text-white bg-neutral-950 hover:bg-neutral-600 ${sharedClasses} ${paddingY} ${paddingX} ${width} ${heigth}`
    : `text-neutral-950 bg-white border-1 border-neutral-200 hover:bg-neutral-100 hover:border-transparent ${sharedClasses} ${paddingY} ${paddingX} ${width} ${heigth}`;

    const iconClasses = variant === "primary"
    ? `text-white bg-neutral-950 hover:bg-neutral-600 ${sharedClasses} ${paddingY} ${paddingX} ${width} ${heigth} ${border} flex items-center justify-center gap-1`
    : `text-neutral-950 bg-white border-1 border-neutral-200
        hover:bg-neutral-100 hover:border-transparent ${sharedClasses} ${paddingY} ${paddingX} ${width} ${heigth} ${border} flex items-center justify-center gap-1`;


    const iconButtonClasses= `text-neutral-950 bg-white border-1 border-neutral-200 transition-all duration-300 ease-in-out 
  hover:scale-120 hover:border-transparent ${sharedClasses} ${paddingY} ${paddingX} ${width} ${heigth} ${border}`;

    if (type === "icon" && content == null) {
      return (
        <button className={iconButtonClasses} onClick = {onClick}>
          {children}
        </button>
      );
    }
    else if (type === "icon") {
      return (
        <button className={iconClasses} onClick = {onClick}>
          {children}
          {content}
        </button>
      )
    }
    else if (type === "link") {
      return (
        <Link href={href} className={arrayClass}>
          {content}
        </Link>
      );
    }
    else {
      return (
      <button className={arrayClass}>
        {content}
      </button>
    );
    }
    
  };
  
  export default Button;