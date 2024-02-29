import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SubHeader from "../subHeader/subHeader";
import Typical from "react-typical";
import { toast } from "react-toastify";
import "./contactMe.css";

export const ContactMe = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9pisqz5",
        "template_0g7n5yo",
        form.current!,
        "QKzsaxG2DYsmIA6lw"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent!", {
            className: "toastBanner",
          });

          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="container home" id="Contact Me">
        <SubHeader title="Contact Me" subheading="Drop me a line!" />
        <div className="container me-5">
          <h3 className="text-center screen-heading">
            <Typical loop={Infinity} steps={["Get in touch 📨", 1000]} />
          </h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-floating mb-3 text-dark">
              <input
                type="text"
                className="form-control"
                id="nameBox"
                placeholder="My Name"
                name="user_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label htmlFor="nameBox">Your name</label>
            </div>
            <div className="form-floating mb-3 text-dark">
              <input
                type="email"
                className="form-control"
                id="emailBox"
                placeholder="name@example.com"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="emailBox">Email address</label>
            </div>
            <div className="form-floating mb-3  text-dark">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="messageBox"
                style={{ height: "100px" }}
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <label htmlFor="messageBox">Message</label>
            </div>
            <div className="text-center">
              <button type="submit" className="dark butn">
                Send Email
              </button>
            </div>
          </form>
          <div
            className="vr"
            style={{ color: "var(--main)", height: "5rem" }}
          ></div>
        </div>
      </div>
    </>
  );
};
