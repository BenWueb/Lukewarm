import { useState } from "react";
import { MdEmail } from "react-icons/md";
import emailImage from "../assets/undraw_reading_re_29f8.svg";

function Contact() {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    subject: "",
    message: "",
  });

  const { fName, lName, email, subject, message } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div className="contact-page-container">
      <header className="contact-header">
        <h1 className="contact-us">Contact Us</h1>
      </header>
      <main className="contact-container">
        <div className="contact-img">
          <img src={emailImage} alt="email" className="contact-email-img" />
        </div>

        <div className="contact-form-container">
          <form
            action="https://formsubmit.co/54a5a9ea76781b7ba2269215de70ef76"
            method="POST"
            className="contact-form"
            id="contactForm"
          >
            <input
              type="hidden"
              name="_next"
              value="http://localhost:3000/contact"
            ></input>
            <input type="hidden" name="_captcha" value="false"></input>
            <div className="form-name-container">
              <div className="first-container">
                <label htmlFor="fName">First Name:</label>
                <input
                  name="First Name"
                  type="text"
                  id="fName"
                  value={fName}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="last-container">
                <label htmlFor="lName">Last Name:</label>
                <input
                  name="Last Name"
                  type="text"
                  id="lName"
                  value={lName}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
            <label htmlFor="email">Email:</label>
            <input
              name="Email"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              required
            />
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={onChange}
              required
            />
            <label htmlFor="message" id="message">
              Message:
            </label>
            <textarea
              name="Message"
              id="message"
              value={message}
              onChange={onChange}
              cols="30"
              rows="10"
              required
            ></textarea>
            <button className="form-button" type="submit">
              Submit
              <MdEmail style={{ height: "20px", width: "20px" }} />
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
export default Contact;
