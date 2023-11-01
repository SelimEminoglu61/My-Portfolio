import { useFormik } from "formik";
import { basicSchema } from "../../schema";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styleForm.css";

function successToast() {
  toast.success("Başarılı Şekilde Gönderildi", {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    theme: "light",
  });
}

function successInfoToast(name, surname) {
  toast.success(`Gönderilen kişi:${name} ${surname}`, {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    theme: "light",
  });
}

function errorToast(error) {
  toast.error(`${error.message}`, {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    theme: "light",
  });
}

async function postMailInfo(url, data) {
  try {
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      successToast();
      const jsonData = await response.json();
      return jsonData;
    } else {
      throw new Error(response.status);
    }
  } catch (error) {
    errorToast(error);
  }
}

const onSubmit = async (values, actions) => {
  postMailInfo(
    "https://selimeminoglu-portfolio.cyclic.app:3000/api",
    values
  ).then((response) => {
    successInfoToast(response.name, response.surname);
  });

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function Form() {
  const [isError, setIsError] = useState(false);
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
      <ToastContainer />
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
        />
        {isError && errors.name && (
          <p className="errorText">
            <img src="./src/assets/icons/warning.png" alt="icon" />
            {errors.name}
          </p>
        )}
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
        {isError && errors.surname && (
          <p className="errorText">
            <img src="./src/assets/icons/warning.png" alt="icon" />
            {errors.surname}
          </p>
        )}
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
        {isError && errors.email && (
          <p className="errorText">
            <img src="./src/assets/icons/warning.png" alt="icon" />
            {errors.email}
          </p>
        )}
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
          maxLength="1500"
          placeholder="Limit to 1500 characters"
          wrap="soft"
        />
      </div>
      {isError && errors.message && (
        <p className="errorText messageError">
          <img src="./src/assets/icons/warning.png" alt="icon" />
          {errors.message}
        </p>
      )}
      <input
        className="submitBtn"
        value="Send Mail"
        type="submit"
        onClick={() => {
          if (errors) {
            setIsError(true);
          } else {
            setIsError(false);
          }
        }}
      />
    </form>
  );
}

export default Form;
