import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button className={`px-4 py-2 rounded-md ${className}`}>{children}</button>
  );
};

export default Button;
