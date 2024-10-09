import loginlogo from '../../content/images/loginlogo.svg';
import FormikControl from '../pages/components/formData/FormikControl';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import username from '../../content/images/username.svg';
import password from '../../content/images/password.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import fullname from '../../content/images/fullname.svg';
import confirm from '../../content/images/confirmpassword.svg';
import { setsessions } from '../pages/components/AuthComponents/SessionSetting';

import React from 'react';

interface formValuetypeof {
  [key: string]: string;
}

const SignUp = () => {
  const navigate = useNavigate();
  const initialValues = {
    fullname: '',
    username: '',
    password: '',
    confirmpassword: '',
  };
  const validationschema = Yup.object().shape({
    fullname: Yup.string().required('Required'),
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
    confirmpassword: Yup.string()
      .required('Required')
      .oneOf([Yup.ref('password'), ''], 'Passwords must match'),
  });
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
    setsessions('xyz', 'Verified', 3);
    navigate('/');
    window.location.reload();
  };
  return (
    <div className="bg-baseOne w-[100vw] h-[100vh]">
      <div className="flex flex-col w-[30%] justify-center align-middle mx-[35%]  pt-[1%] ">
        <div className="mx-auto">
          <img src={loginlogo} alt="loading" />
        </div>
        <div className="relative mx-auto">
          <h1 className="text-[120px] text-PrimaryText font-semibold font-smoochsans">Welcome</h1>
          <h3 className="font-poppins text-[14px] text-PrimaryText absolute top-[75%] left-[15%]">We are glad to see you back with us</h3>
        </div>
        <div className="mx-auto">
          <Formik initialValues={initialValues} validationSchema={validationschema} onSubmit={onSubmit}>
            {() => (
              <Form>
                <div className="relative w-[20vw] ">
                  <FormikControl
                    control="input"
                    type="text"
                    placeholder="Full Name"
                    className=" bg-baseinput text-[12px] h-[5vh] font-poppins rounded-xl pl-[2.5vw] text-baseThree"
                    name="fullname"
                  />
                  <img src={fullname} alt="laoding" className="absolute top-[15%] left-[3%]" />
                </div>
                <div className="relative w-[20vw] mt-[2vh] ">
                  <FormikControl
                    control="input"
                    type="text"
                    placeholder="Username"
                    className=" bg-baseinput text-[12px] h-[5vh] font-poppins rounded-xl pl-[2.5vw] text-baseThree"
                    name="username"
                  />
                  <img src={username} alt="laoding" className="absolute top-[15%] left-[3%]" />
                </div>
                <div className="relative w-[20vw] mt-[2vh] ">
                  <FormikControl
                    control="input"
                    type="password"
                    placeholder="Password"
                    className=" bg-baseinput text-[12px] h-[5vh] font-poppins rounded-xl pl-[2.5vw] text-baseThree"
                    name="password"
                  />
                  <img src={password} alt="laoding" className="absolute top-[15%] left-[3%]" />
                </div>
                <div className="relative w-[20vw] mt-[2vh] ">
                  <FormikControl
                    control="input"
                    type="password"
                    placeholder="Password"
                    className=" bg-baseinput text-[12px] h-[5vh] font-poppins rounded-xl pl-[2.5vw] text-baseThree"
                    name="confirmpassword"
                  />
                  <img src={confirm} alt="laoding" className="absolute top-[15%] left-[3%]" />
                </div>
                <div className="w-[20vw] mt-[2vh]">
                  <button
                    type="submit"
                    className="h-[5vh] w-full rounded-lg text-center border border-PrimaryText text-PrimaryText text-[12px] font-bold font-poppins"
                  >
                    Create Account
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="text-[12px] text-PrimaryText font-bold font-poppins text-center mt-[2vh]">or</div>
        <NavLink to="/login" className="text-[14px] font-poppins text-PrimaryText text-center mt-[2vh]">
          Login to you account
        </NavLink>
      </div>
    </div>
  );
};
export default SignUp;
