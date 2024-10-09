import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';

interface optionsArrtypeof {
  key: string;
  value: string;
}
interface selectPropsTypeOf {
  name: string;
  placeholder?: string;
  className?: string;
  options?: optionsArrtypeof[];
}

const Select = (props: selectPropsTypeOf) => {
  const { placeholder, className, name, options, ...rest } = props;
  return (
    <div className="h-fit flex flex-col justify-center align-middle">
      <Field as="select" id={name} placeholder={placeholder} name={name} className={className} {...rest}>
        {options &&
          options.map(option => {
            return (
              <option key={option.value} value={option.value} className="text-center">
                {option.key}
              </option>
            );
          })}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};
export default Select;
