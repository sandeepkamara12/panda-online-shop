import React from "react";

const Modal = ({children, closeModalFn, openModal}) => {
  return (
    <>
        <div
          className={`modal-backdrop fade ${openModal ? "show" : ""} `}
        ></div>
      <div
        className={`modal fade d-block ${openModal ? "show" : ""}`}
        // style={{ display: openModal ? "block" : "none" }}
        id="signin-modal"
        tabIndex="-1"
        role="dialog"
        // aria-hidden={!openModal}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={closeModalFn}
              >
                <span aria-hidden="true">
                  <i className="icon-close"></i>
                </span>
              </button>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
