import "./styleForm.css";

function Form() {
  return (
    <form>
      <h3>Send Mail To Me</h3>
      <div>
        <label htmlFor="name">Your Name:</label>
        <input name="name" className="nameInput" type="text" autoFocus />
      </div>
      <div>
        <label htmlFor="surname">Your Surname:</label>
        <input name="surname" className="nameInput" type="text" />
      </div>
      <div>
        <label htmlFor="email">Your Email:</label>
        <input name="email" className="nameInput" type="email" />
      </div>
      <div className="messageDiv">
        <label htmlFor="message">Your Message:</label>
        <textarea
          id="message"
          className="nameInput"
          rows="10"
          columns="100"
          required
          maxLength="500"
          placeholder="Limit to 500 characters"
          wrap="soft"
        />
      </div>
      <input className="submitBtn" value="Send Mail" type="submit" />
    </form>
  );
}

export default Form;
