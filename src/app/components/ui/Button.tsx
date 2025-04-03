interface ButtonProps {
    variant?: string;
    type?: string;
    content?: string;
    width?: string;
    heigth?: string;
    paddingY?: string;
    paddingX?: string;
    children?: React.ReactNode;
}

  const Button = ({ variant, content = "default", type = "text", children, width = "w-20", heigth = "h-10" , paddingY = "py-2" , paddingX = "px-4"}: ButtonProps) => {
    const sharedClasses = "relative cursor-pointer rounded-full font-semibold text-sm text-align-center";
    const arrayClass = variant === "primary"
      ? `text-white bg-neutral-950 hover:bg-neutral-600 ${sharedClasses} ${paddingY} ${paddingX} ${width} ${heigth}`
      : `text-neutral-950 bg-white border-1 border-neutral-200 hover:bg-neutral-100 hover:border-transparent ${sharedClasses} ${paddingY} ${paddingX} ${width} ${heigth}`;

    if (type === "icon") {
      return (
        <button className={sharedClasses}>
          {children}
        </button>
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