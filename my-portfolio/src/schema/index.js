import * as yup from "yup";

export const basicSchema = yup.object().shape({
  name: yup.string().required("Please type your name"),
  surname: yup.string().required("Please type your surname"),
  email: yup
    .string()
    .required("Please type your email")
    .email("Please give available email"),
  message: yup
    .string()
    .required("Please type your message")
    .max("Limit to 500 characters"),
});
