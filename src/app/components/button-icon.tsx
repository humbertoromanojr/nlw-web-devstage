import { ReactNode } from "react";

interface ButtonIconProps {
  children: ReactNode;
}

export function ButtonIcon(props: ButtonIconProps) {
  return (
    <button className="p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer transition-colors duration-400 hover:bg-blue hover:text-gray-900">
      {props.children}
    </button>
  );
}
