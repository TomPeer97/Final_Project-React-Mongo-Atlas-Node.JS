import { GrLocation } from "react-icons/gr";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaFax } from "react-icons/fa";
import ContactValidation from "../../helpers/contact";
import { addContact } from "../../helpers/FetchHelper";
import { toast } from "react-toastify";
import { Container } from "react-bootstrap";
import { useState } from "react";
import "../../css/contact.css";

const notify = (message) => toast(message);

function Contact() {
  const [value, setFields] = useState({
    ContactName: "",
    ContactEmail: "",
    ContactSubject: "",
    ContactQuestion: "",
  });
  return (
    <Container id="contact">
      <h2
        className="h1-responsive font-weight-bold text-center my-4"
        id="conH2"
      >
        Contact us
      </h2>
      <p className="text-center w-responsive mx-auto mb-5" id="conP">
        Do you have any questions? Please do not hesitate to contact us
        directly. Our team will come back to you within a matter of hours to
        help you.
      </p>
      <div className="contactForm">
        <form
          className="mb-4 contactForm"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="row">
            <div className="col-md-9 mb-md-0 mb-5">
              <form
                id="contact-form"
                name="contact-form"
                action="mail.php"
                method="POST"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmlFor="name" id="conName">
                        Your name
                      </label>
                      <input
                        type="text"
                        id="ContactName"
                        name="name"
                        class="form-control"
                        placeholder="Full Name"
                        value={value.ContactName}
                        onChange={(e) =>
                          setFields({ ...value, ContactName: e.target.value })
                        }
                      ></input>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmlFor="email" id="conEmail">
                        Your email
                      </label>
                      <input
                        type="text"
                        id="ContactEmail"
                        name="email"
                        class="form-control"
                        placeholder="Email address"
                        value={value.ContactEmail}
                        onChange={(e) =>
                          setFields({ ...value, ContactEmail: e.target.value })
                        }
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <label htmlFor="subject" id="conSubject">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="ContactSubject"
                        name="subject"
                        class="form-control"
                        placeholder="Write your subject"
                        value={value.ContactSubject}
                        onChange={(e) =>
                          setFields({
                            ...value,
                            ContactSubject: e.target.value,
                          })
                        }
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <label htmlFor="message" id="ConQuestion">
                        Your question:
                      </label>
                      <textarea
                        type="text"
                        id="ContactQuestion"
                        name="message"
                        rows="2"
                        class="form-control md-textarea"
                        placeholder="Your message"
                        value={value.ContactQuestion}
                        onChange={(e) =>
                          setFields({
                            ...value,
                            ContactQuestion: e.target.value,
                          })
                        }
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>
              <br></br>
              <div className="text-center text-md-left ContactBtn">
                <button
                  variant="dark"
                  id="ContactBtn"
                  onClick={() => {
                    let validateContact = ContactValidation(
                      "ContactName",
                      "ContactEmail",
                      "ContactSubject",
                      "ContactQuestion"
                    );

                    if (typeof validateContact == "string") {
                      notify(validateContact);
                    } else {
                      addContact(validateContact);
                      notify(
                        "Your question has been accepted! We will get back to you soon!"
                      );
                      setFields({
                        ContactName: "",
                        ContactEmail: "",
                        ContactSubject: "",
                        ContactQuestion: "",
                      });
                    }
                  }}
                >
                  Send
                </button>
              </div>
            </div>

            <div
              className="col-md-3 text-center contactInformation"
              id="contactInformation"
            >
              <h3>Contact Information</h3>

              <ul className="list-unstyled mb-0 contactInformationUl">
                <li>
                  <i class="fas fa-home mr-3"></i>
                  <p>
                    <GrLocation></GrLocation> Address: Tel Aviv, Rotshild 15, IL
                  </p>
                </li>

                <li>
                  <i class="fas fa-phone mt-4 fa-2x"></i>
                  <p>
                    <HiOutlineMail></HiOutlineMail> Email: CM@gmail.com
                  </p>
                </li>

                <li>
                  <i class="fas fa-envelope mt-4 fa-2x"></i>
                  <p>
                    <HiOutlinePhone></HiOutlinePhone> Office: 03-8846279
                  </p>
                </li>
                <li>
                  <i class="fas fa-envelope mt-4 fa-2x"></i>
                  <p>
                    <FaFax></FaFax> Fax: 03-8857845
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
}
export default Contact;
