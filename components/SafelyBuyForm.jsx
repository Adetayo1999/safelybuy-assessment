import React, { useState } from "react";
import { Formik, Form } from "formik";
import registerSchema, { initialValues } from "../schemas";
import RegisterInput from "./RegisterInput";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";
import Spinner from "./Spinner";

const SafelyBuyForm = () => {
  const [passwordType, setPasswordType] = useState(false);

  const handlePasswordType = () => setPasswordType(!passwordType);

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    axios
      .post("https://api.safelybuy.com/api/v1/test-register", values)
      .then((res) => {
        setSubmitting(false);
        if (res.data.message === "Success") {
          Swal.fire("Success", "Registration successful", "success");
        }
        resetForm();
      })
      .catch((err) => console.error(err.message));
  };

  return (
    <div className='flex justify-center items-center flex-col mt-10'>
      <h3 className='text-gray-800 text-2xl font-bold mb-6 '>
        Sign up on Safelyby
      </h3>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form className=' w-8/12 md:w-2/6'>
            <div className='flex flex-col md:flex-row justify-between md:items-center '>
              <RegisterInput
                inputName={"firstname"}
                inputType={"text"}
                placeholder={"First Name"}
                label={"First Name"}
                formGroup
              />
              <RegisterInput
                inputName={"lastname"}
                inputType={"text"}
                placeholder={"Last Name"}
                label={"Last Name"}
                formGroup
              />
            </div>
            <RegisterInput
              inputName={"email"}
              inputType={"text"}
              placeholder={"Email"}
              label={"Email"}
            />
            <RegisterInput
              inputName={"phone"}
              inputType={"number"}
              placeholder={"Enter your phone number"}
              label={"Phone Number"}
            />
            <RegisterInput
              inputName={"password"}
              inputType={!passwordType ? "password" : "text"}
              placeholder={"Enter your password"}
              label={"Password"}
              Icon={!passwordType ? FiEyeOff : FiEye}
              changePasswordType={handlePasswordType}
            />

            <div className='flex flex-col md:flex-row justify-between md:items-center'>
              <div className='flex md:justify-center mb-4 md:mb-0 items-center'>
                <input type='checkbox' name='agreement' id='agreement' />
                <label htmlFor='agreement' className='ml-2 text-xs'>
                  I agree to
                  <Link href='/'>
                    <a className='text-purple-750 border-b border-purple-750'>
                      {" "}
                      Terms & conditions
                    </a>
                  </Link>
                </label>
              </div>
              <button
                className='flex w-36  text-green-600 border border-green-600 rounded-md  justify-around items-center text-xs h-9 font-bold'
                type='submit'
                disabled={!(dirty && isValid)}
              >
                {!isSubmitting ? "Proceed" : <Spinner />}{" "}
                <BsArrowRightShort className=' text-gray-800 text-lg ' />{" "}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SafelyBuyForm;
