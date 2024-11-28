import { ReactElement } from "react";

// interface ButtonProps {
//     variant: "primary" | "secondary";
//     size: "sm" | "md" | "lg";
//     text: string;
//     startIcon?: unknown; // any
//     endIcon?: unknown;
//     onClick: () => void;
// }

// const Button = (props: ButtonProps) => {

type Variants = "primary" | "secondary";

// use maps or records for key value pair //  const variantStyles: {[key: Variants]: string} {
const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-300 text-purple-600",
};

const sizeStyles = {
  "sm": "py-1 px-2",
  "md": "py-2 px-4",
  "lg": "py-4 px-6",
};

const defaultStyles = "rounded-md flex";

// concatination syntex: let firstname: "a"; let lastName: "b"; let fullName: `${firsName} ${lastName}`

const Button = (props: {
  // same as ButtonProps
  variant: Variants;
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
}) => {
  // thsese ButtonProps willl come as an argumen. // Eg: Props.variant, props.size
  return (
    <button
      className={`${variantStyles[props.variant]} ${defaultStyles} ${
        sizeStyles[props.size]
      }`}
    >
      {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}{" "}
      {props.text} {props.endIcon}
    </button>
  );
};

export default Button;
