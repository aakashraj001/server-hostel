import React from 'react';

interface TextErrorTypeOf {
  children?: React.ReactNode;
}

const TextError = ({ children }: TextErrorTypeOf) => {
  return <div className="text-red-600 font-bold text-base">{children}</div>;
};
export default TextError;
