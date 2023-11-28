import React from 'react';
import './ContactPage.css';

function ContactPage() {
  return (
    <>
      <div className="d-flex justify-content-around align-items-center p-5 contactDiv" id="contactDiv">
        <div className="d-flex flex-column contactDivCol1">
          <h2 className="contactDivText">
            I&apos;m always interested in hearing about new projects,
            so if you&apos;d like to chat please get in touch.
          </h2>
        </div>
        <div className="d-flex flex-column align-items-center w-50">
          <form className="d-flex flex-column justify-content-between align-items-center formDiv">
            <div className="d-flex flex-column justify-content-between align-items-center w-100">
              <div className="d-flex flex-column justify-content-center align-items-left w-100">
                <label htmlFor="name" className="d-flex flex-column justify-content-between label">
                  Name
                  <div className="inputDiv mt-3 mb-3">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="input mt-2 mb-2"
                      placeholder="Full Name"
                    />
                  </div>
                </label>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-left w-100">
                <label htmlFor="email" className="d-flex flex-column justify-content-between label">
                  Email
                  <div className="inputDiv mt-3 mb-3">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="input mt-2 mb-2"
                      placeholder="Email adress"
                    />
                  </div>
                </label>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center w-100">
              <label htmlFor="msg_id" className="d-flex flex-column justify-content-between label">
                Message
                <textarea
                  name="message"
                  id="msg_id"
                  className="inputTextArea mt-2 mb-2 p-2"
                  placeholder="...Write your message here"
                />
              </label>
            </div>
            <div className="d-flex justify-content-center w-100 p-2">
              <button type="submit" className="buttonForm">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
