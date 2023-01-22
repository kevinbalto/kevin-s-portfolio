import React, { useState } from "react";
import imageOverlay from "../img/contacto.jpg";
import { addContact } from './firebase.jsx';

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubjet] = useState("");
  const [messaje, setMessaje] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();

    addContact(name, email, subject, messaje);

    setName("");
    setEmail("");
    setSubjet("");
    setMessaje("");
    
  }

  return (
    <section
      className="paralax-mf footer-paralax bg-image sect-mt4 route"
      style={{ backgroundImage: "url(" + imageOverlay + ")" }}
    >
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">Would you Like to Contact Me?</h5>
                    </div>
                    <div>
                      <form
                        onSubmit={handleSubmit}
                        className="contactForm"
                      >
                        <div id="errormessage"></div>
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="name"
                                placeholder="Whats is Your Name?"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="What is Your Email?"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"  
                                value={subject}
                                onChange={(e) => setSubjet(e.target.value)}
                                required                               
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="message"
                                rows="5"
                                data-rule="required"
                                placeholder="Would you like to say something?"  
                                value={messaje}
                                onChange={(e) => setMessaje(e.target.value)}
                                required
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <button
                              type="submit"
                              className="button button-a button-big button-rouded">
                              Summit
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Let's Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        If you want to talk about a work offer, a personal project, or a collaboration, I would like to hear more about it.
                        <br/>
                        Just sent me a message or contact me through my social networks, you can find them below.
                      </p>
                    </div>
                    <div className="socials">
                      <ul>
                        <li>
                          <a
                            href="https://twitter.com/KevinBaltodano9"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <i className="ion-social-twitter"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com/kevinbalto"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <i className="ion-social-github"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/in/kevin-baltodano-611098213/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <i className="ion-social-linkedin"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/kevin07_07/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <i className="ion-social-instagram"></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        Phone number: +506 6481-0246
                        <br/>
                        Email: kbaltodanoch@hotmail.es
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box">
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Contact;
