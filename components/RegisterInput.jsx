import React from "react";
import { ErrorMessage, Field } from "formik";

const RegisterInput = ({
  label,
  placeholder,
  Icon,
  inputType,
  inputName,
  formGroup,
  changePasswordType,
}) => {
  return (
    <div className='mb-2'>
      <label
        htmlFor={inputName}
        className='text-xs font-semibold text-gray-800 pb-2 block'
      >
        {label}
      </label>
      <div
        className={`flex rounded-full ${
          formGroup ? "w-full md:w-52" : "w-full"
        }  h-9 py-2 px-4 border justify-between items-center`}
      >
        <Field
          type={inputType}
          placeholder={placeholder}
          name={inputName}
          className=' border-none outline-none bg-transparent flex-1 h-full text-xs mr-2 text-gray-800'
          autoComplete='off'
        />
        {Icon && (
          <Icon
            className={`cursor-pointer text-gray-400`}
            onClick={changePasswordType}
          />
        )}
      </div>
      <div className='h-4 flex  items-center mt-1 '>
        <ErrorMessage
          name={inputName}
          component={"span"}
          className=' text-xs text-red-500'
        />
      </div>
    </div>
  );
};

export default RegisterInput;
