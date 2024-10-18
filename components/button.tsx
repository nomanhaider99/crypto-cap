"use client";

import React from 'react';
import { IconType } from 'react-icons';

interface ButtonProps {
    text: string;
    className?: string;
    textOnly?: boolean;
    icon?: IconType;
}

const Button = (props: ButtonProps) => {
  const textOnlyClasses = props.textOnly ? 'bg-transparent text-seagreen px-0' : 'bg-seagreen text-white px-4';

  return (
    <button className={`py-1 text-xs font-light rounded-lg flex gap-2 items-center ${textOnlyClasses} ${props.className}`}>
      {props.text} {props.icon as any}
    </button>
  );
};

export default Button;
