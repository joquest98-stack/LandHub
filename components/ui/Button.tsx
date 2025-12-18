import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

// Reusable Button component
const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-300 ease-in-out";

  const variantStyles = {
    primary:
      "bg-cta-brown text-white hover:bg-cta-brown-dark focus:ring-cta-brown",
    secondary:
      "bg-white text-text-dark border border-subtle-gray hover:bg-subtle-gray focus:ring-cta-brown",
    outline:
      "bg-transparent border border-text-dark text-text-dark hover:bg-text-dark hover:text-white focus:ring-text-dark",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
