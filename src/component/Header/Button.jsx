import React from "react";

export default function Button({
  children,
  bgColor = "bg-blue-600",
  type = "button",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <div>
      <button className={`px-4 py-2 rounded-lg ${className} ${textColor} ${type} ${bgColor}`} {...props}>{children}</button>
    </div>
  );
}
