import { useFormik } from "formik";
import { basicSchema } from "../../schema";
import "./styleForm.css";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function Form() {
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      message: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit}>
      <h3>Send Mail To Me</h3>
      <div>
        <label htmlFor="name">Your Name:</label>
        <input
          name="name"
          value={values.name}
          onChange={handleChange}
          id="name"
          className="nameInput"
          type="text"
          autoFocus
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="surname">Your Surname:</label>
        <input
          name="surname"
          value={values.surname}
          onChange={handleChange}
          id="surname"
          className="nameInput"
          type="text"
        />
        {errors.surname && <p>{errors.surname}</p>}
      </div>
      <div>
        <label htmlFor="email">Your Email:</label>
        <input
          name="email"
          value={values.email}
          onChange={handleChange}
          id="email"
          className="nameInput"
          type="email"
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div className="messageDiv">
        <label htmlFor="message">Your Message:</label>
        <textarea
          id="message"
          value={values.message}
          onChange={handleChange}
          className="nameInput"
          rows="10"
          columns="100"
          required
          maxLength="500"
          placeholder="Limit to 500 characters"
          wrap="soft"
        />
        {errors.message && <p>{errors.message}</p>}
      </div>
      <input className="submitBtn" value="Send Mail" type="submit" />
    </form>
  );
}

export default Form;
