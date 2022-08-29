import React from "react";

import "../../../../css/modal.scss";

const Modal = ({ show, closeModal, content }) => {
  if (show) {
    return (<>
      <div id="overlay" onClick={closeModal}>
        <div id="content" onClick={(e) => e.stopPropagation()}>
          <p>{ content }</p>
          <p className="text-right">
            <button onClick={closeModal} type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">閉じる</button>
          </p>
        </div>
      </div>
    </>);
  } else {
    return null;
  }
};

export default Modal;