import React, { forwardRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = forwardRef((props, ref) => {
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { 0: from_name, 1: email, 2: message } = e.target;
    let hasError = false;
    const emailRegex = new RegExp(
      "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
    );

    const error = { name: "", email: "", message: "" };

    if (!from_name?.value || from_name?.value?.trim() === "") {
      hasError = true;
      error.name = "Please enter a name";
    } else {
      error.name = "";
    }
    if (!emailRegex.test(email?.value)) {
      hasError = true;
      error.email = "Please enter an email";
    } else {
      error.email = "";
    }
    if (!message?.value || message?.value.trim() === "") {
      hasError = true;
      error.message = "Please enter a message";
    } else {
      error.message = "";
    }
    if (hasError) {
      setErrors(error);
      if (window?.navigator?.vibrate) {
        window.navigator?.vibrate(80);
      }
      return;
    }

    setErrors({ name: "", email: "", message: "" });

    setStatus("sending");
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
          privateKey: process.env.REACT_APP_EMAILJS_PRIVATE_KEY,
        }
      )
      .then(
        (result) => {
          setStatus("success");
          e.target.reset();
          setTimeout(() => {
            setStatus("");
          }, 3000);
        },
        (error) => {
          setStatus("error");
          setTimeout(() => {
            setStatus("");
          }, 3000);
        }
      );
  };

  return (
    <section ref={ref} className="contact-section">
      {status === "success" && (
        <div className="success-overlay">
          <div className="success-container">
            <img className="checkMark" src="/check.gif" />
            <p className="success-message">Message sent successfully!</p>
          </div>
        </div>
      )}

      <div className="contact-container">
        <h2>Let's Connect</h2>
        <p className="contact-subtitle">
          Have a question or want to work together?
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:+918951335326">+91 8951335326</a>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:siddaling.gkoudi@gmail.com">
              siddaling.gkoudi@gmail.com
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              name="from_name"
              type="text"
              placeholder="Your Name"
              className={`${errors?.name ? "vibrate" : ""}`}
            />
            <p className={`error-text ${errors?.name ? "show" : ""}`}>
              {errors.name}
            </p>
          </div>
          <div className="form-group">
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className={`${errors?.email ? "vibrate" : ""}`}
            />
            <p className={`error-text ${errors?.email ? "show" : ""}`}>
              {errors.email}
            </p>
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className={`${errors?.message ? "vibrate" : ""}`}
            />
            <p className={`error-text ${errors?.message ? "show" : ""}`}>
              {errors.message}
            </p>
          </div>
          <button
            type="submit"
            className="submit-btn"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "error" && (
            <p className="error-message">
              Failed to send message. Please try again.
            </p>
          )}
        </form>

        <div className="social-links">
          <a
            href="https://github.com/sid283"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://linkedin.com/in/siddalinga"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:siddaling.gkoudi@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </section>
  );
});

export default Contact;
