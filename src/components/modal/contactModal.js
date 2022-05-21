import React from "react";
import Modal from "react-modal";

export const ContactModal = ({ OpenModal }) => {
  return (
    <>
      <Modal
        isOpen={OpenModal}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => OpenModal(false)}
        className="mod-contact"
        overlayClassName="over-lay"
      >
        <div className="mod-container">
          <div className="mod-text">
            <div className="mod-header">
              <h2>Contact Me</h2>
            </div>
            <div className="mod-box">
              <div className="mod-phone">
                <p>Phone: (403) 973-7318</p>
                <div className="line-line"></div>
              </div>
              <div className="mod-email">
                <p>
                  {" "}
                  Email <br />
                  <a
                    href="mailto:huumai0918@gmail.com?subject = MessMe&body = Message"
                    className="email-link"
                  >
                    huumai0918@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
