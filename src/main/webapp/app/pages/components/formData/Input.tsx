import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';
import React from 'react';

interface propstypeOf {
  type?: string;
  placeholder?: string;
  className?: string;
  name: string;
}

const Input = (props: propstypeOf) => {
  const { placeholder, type, name, className, ...rest } = props;
  return (
    <div className="h-fit flex flex-col justify-center align-middle">
      <Field type={type} id={name} name={name} className={className} placeholder={placeholder} {...rest} />
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};
export default Input;
