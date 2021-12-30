import * as Yup from "yup";

export const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  password: "",
};

const registerSchema = Yup.object().shape({
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  email: Yup.string().required("Required").email("Invalid email"),
  phone: Yup.number().min(11, "Invalid phone-number").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password must be more than 7 chars")
    .max(16, "Password cannot be more than 16 chars"),
});

export default registerSchema;
