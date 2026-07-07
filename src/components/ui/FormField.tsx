interface FormFieldProps {
    label: string;
    id: string;
    name: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    multiline?: boolean;
    rows?: number;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    className?: string;
}

export default function FormField({ label, id, name, type = "text", placeholder, required, disabled, multiline, rows = 4, value, onChange, className }: FormFieldProps) {
    const inputClass = "bg-white ps-5 p-2 w-full border-1 border-gray-300";
    return (
        <div className={`gap-1 flex flex-col ${className ?? ""}`}>
            <label className="text-left text-sm font-semibold pl-2" htmlFor={id}>
                {label}
            </label>
            {multiline ? (
                <textarea
                    id={id}
                    name={name}
                    required={required}
                    disabled={disabled}
                    value={value}
                    onChange={onChange as (e: React.ChangeEvent<HTMLTextAreaElement>) => void}
                    rows={rows}
                    className={inputClass}
                    placeholder={placeholder}
                />
            ) : (
                <input
                    type={type}
                    id={id}
                    name={name}
                    required={required}
                    disabled={disabled}
                    value={value}
                    onChange={onChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
                    className={`${inputClass} items-center justify-self-center`}
                    placeholder={placeholder}
                />
            )}
        </div>
    );
}
