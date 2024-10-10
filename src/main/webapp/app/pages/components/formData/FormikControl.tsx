// import { FieldProps } from "formik";
import React from 'react';
import Input from './Input';
import Select from './Select';
interface optionsArrtypeof {
  key: string;
  value: string;
}
interface FormikControlProps {
  control: 'input' | 'select';
  type?: string;
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  name: string;
  options?: optionsArrtypeof[];
}

const FormikControl: React.FC<FormikControlProps> = props => {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'select':
      return <Select {...rest} />;
    default:
      return null;
  }
};
export default FormikControl;
