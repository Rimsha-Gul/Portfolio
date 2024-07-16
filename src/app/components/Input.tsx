import { ChangeEvent, FocusEvent, useEffect, useState } from "react";

interface InputProps {
  type?: string;
  name: string;
  label: string;
  value: string;
  rows?: number;
  onFocus: (field: string) => void;
  onBlur: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string;
}

const Input = ({
  type = "text",
  name,
  label,
  value,
  rows,
  onFocus,
  onBlur,
  onChange,
  error,
}: InputProps) => {
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (!value) {
      setFocus(false);
    }
  }, [value]);

  const handleFocus = () => {
    setFocus(true);
    onFocus(name);
  };

  const handleBlur = (
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.target.value === "") {
      setFocus(false);
    }
    onBlur(event);
  };

  return (
    <div className="relative w-full">
      <div
        className={`relative w-full ${
          focus ? "border-b-2 border-primary" : "border-b-2 border-muted"
        }`}
      >
        {type === "textarea" ? (
          <textarea
            name={name}
            id={name}
            rows={rows}
            className="w-full px-2 py-2 bg-transparent focus:outline-none text-sm text-muted cursor-text resize-none"
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={value}
            onChange={onChange}
          />
        ) : (
          <input
            type={type}
            name={name}
            id={name}
            className="w-full px-2 py-2 bg-transparent focus:outline-none text-sm text-muted cursor-text"
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={value}
            onChange={onChange}
          />
        )}
        <label
          htmlFor={name}
          className={`absolute left-0 top-2 text-sm transform transition-all duration-300 cursor-text ${
            focus || value
              ? "text-primary -translate-y-6 text-xs"
              : "text-muted translate-y-0"
          }`}
        >
          {label}
        </label>
      </div>
      <div className="mt-2 text-primary text-sm">{error && <p>{error}</p>}</div>
    </div>
  );
};

export default Input;
