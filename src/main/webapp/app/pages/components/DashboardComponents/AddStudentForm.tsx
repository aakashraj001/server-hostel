import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../../components/formData/FormikControl';
import { ContextData, ContextValueType } from '../../../shared/contextdata/Context';
import { useContext } from 'react';
import React from 'react';

interface formValuetypeof {
  [key: string]: string;
}

const bloodGroup = [
  { key: 'A+', value: 'A+' },
  { key: 'A-', value: 'A-' },
  { key: 'B+', value: 'B+' },
  { key: 'B-', value: 'B-' },
  { key: 'AB+', value: 'AB+' },
  { key: 'AB-', value: 'AB-' },
  { key: 'O+', value: 'O+' },
  { key: 'O-', value: 'O-' },
];
const initialValue = {
  name: '',
  BG: 'A+',
  phoneNumber: '',
  emergencyNumber: '',
  email: '',
  addressLine1: '',
  addressLine2: '',
  pinCode: '',
  district: '',
  state: '',
  country: '',
};

const validationschema = Yup.object().shape({
  name: Yup.string().required('Required'),
  BG: Yup.string().required('Required'),
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, 'Phone number should be 10 digits')
    .required('Required'),
  emergencyNumber: Yup.string()
    .required('Required')
    .matches(/^\d{10}$/, 'Phone number should be 10 digits'),
  email: Yup.string()
    .email('Invalid email address')
    .matches(/^[^@]+@[^@]+\.[^@]+$/, 'Email should Contain @ and .')
    .required('Required'),
  addressLine1: Yup.string().required('Required'),
  addressLine2: Yup.string(),
  pinCode: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
});

const AddStudentForm = () => {
  const onSubmit = async (values: formValuetypeof) => {
    const data = new FormData();
    for (const key in values) {
      if (Object.prototype.hasOwnProperty.call(values, key)) {
        data.append(key, values[key]);
      }
    }

    // Example of awaiting an API call
    await fetch('/your-api-endpoint', {
      method: 'POST',
      body: data,
    });
  };

  const { setStudentAdd } = useContext(ContextData);
  const handleClick = () => {
    setStudentAdd(false);
  };
  return (
    <div className=" flex flex-col gap-3 bg-baseTwo py-5 ">
      <div className="row-span-1 grid grid-cols-12">
        <div className="col-span-11 px-3 font-montserrat font-medium text-3xl my-auto">
          <h3>Add Student</h3>
        </div>
        <div className="col-span-1 my-auto cursor-pointer" onClick={handleClick}>
          <h3 className=" px-3 font-montserrat font-medium text-3xl">X</h3>
        </div>
      </div>
      <div className="">
        <Formik initialValues={initialValue} validationSchema={validationschema} onSubmit={onSubmit}>
          {() => (
            <Form className=" flex flex-col gap-3">
              <div className="grid grid-cols-5 gap-3 px-3">
                <div className="col-span-4 h-fit">
                  <FormikControl
                    control="input"
                    type="text"
                    placeholder="Name of the Student"
                    className="bg-baseOne text-base text-white px-11 py-3 rounded-lg w-full"
                    name="name"
                  />
                </div>
                <div className="col-span-1 grid grid-cols-2">
                  <div className="col-span-1 ">
                    <h5 className="text-base bg-baseOne my-auto py-3 px-2 rounded-tl-lg rounded-bl-lg ">BG</h5>
                  </div>
                  <div className="col-span-1">
                    <FormikControl
                      control="select"
                      placeholder="A+"
                      className="bg-baseOne text-base  px-1 py-3  text-center my-auto rounded-tr-lg rounded-br-lg "
                      name="BG"
                      options={bloodGroup}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-3 px-3">
                <div className="col-span-1 bg-baseFour h-fit  rounded-lg">
                  <h3 className="text-base  py-3 text-center ">+91</h3>
                </div>
                <div className="col-span-4">
                  <FormikControl
                    control="input"
                    type="text"
                    placeholder="Contact Number"
                    className="bg-baseOne text-base text-white px-11 py-3 rounded-lg w-full"
                    name="phoneNumber"
                  />
                </div>
              </div>
              <div className="grid grid-cols-5 gap-3 px-3">
                <div className="col-span-1 bg-baseFour h-fit  rounded-lg">
                  <h3 className="text-base py-3  text-center ">+91</h3>
                </div>
                <div className="col-span-4">
                  <FormikControl
                    control="input"
                    type="text"
                    placeholder="Emergency Contact Number"
                    className="bg-baseOne text-base text-white px-11 py-3 rounded-lg w-full"
                    name="EmergencyNumber"
                  />
                </div>
              </div>
              <div className=" px-3">
                <div className="">
                  <FormikControl
                    control="input"
                    type="email"
                    placeholder="Email Address"
                    className="bg-baseOne text-base text-white px-11 py-3 rounded-lg w-full"
                    name="email"
                  />
                </div>
              </div>
              <div className="px-3 my-auto">
                <h3 className="text-2xl font-medium ">Residential Address</h3>
              </div>
              <div className=" px-3">
                <div className="">
                  <FormikControl
                    control="input"
                    type="text"
                    placeholder="Address Line 1"
                    className="bg-baseOne text-base text-white px-11 py-3 rounded-lg w-full"
                    name="addressLine1"
                  />
                </div>
              </div>
              <div className="grid grid-cols-5 gap-3 px-3">
                <div className="col-span-4">
                  <FormikControl
                    control="input"
                    type="text"
                    placeholder="Address Line 2"
                    className="bg-baseOne text-base text-white px-11 py-3 rounded-lg w-full"
                    name="addressLine2"
                  />
                </div>
                <div className="">
                  <FormikControl
                    control="input"
                    type="text"
                    placeholder="Pincode"
                    className="bg-baseOne text-base text-white px-3 py-3 rounded-lg w-full"
                    name="pincode"
                  />
                </div>
              </div>

              <div className="grid grid-cols-6 gap-3 px-3">
                <div className="col-span-3">
                  <FormikControl
                    control="input"
                    type="text"
                    placeholder="District"
                    className="bg-baseOne text-base text-white px-11 py-3 rounded-lg w-full"
                    name="district"
                  />
                </div>
                <div className="col-span-2">
                  <FormikControl
                    control="input"
                    type="text"
                    placeholder="State"
                    className="bg-baseOne text-base text-white px-11 py-3 rounded-lg w-full"
                    name="State"
                  />
                </div>
                <div className="col-span-1">
                  <FormikControl
                    control="input"
                    type="text"
                    placeholder="Country"
                    className="bg-baseOne text-base text-white px-3 py-3 rounded-lg w-full"
                    name="country"
                  />
                </div>
              </div>
              <div className="col-span-1 grid grid-cols-2 gap-11 mx-11">
                <button type="submit" className="col-start-1 border-2 text-2xl p-3 h-fit   rounded-lg hover:bg-[#00868D]">
                  Proceed
                </button>
                <button className="col-start-2 border-2 text-2xl p-3 h-fit   rounded-lg hover:bg-[#00868D]" onClick={handleClick}>
                  Back
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default AddStudentForm;
