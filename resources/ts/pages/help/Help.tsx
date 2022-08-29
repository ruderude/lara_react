import React, { useState } from "react";
import Modal from "../../components/layouts/parts/Modal";

// import "../../../css/help.scss";


const Help = () => {
  const content = "モーダルの内容！";
  const [show, setShow] = useState(false);
  const openModal = () => {
    setShow(true);
  }
  const closeModal = () => {
    setShow(false);
  }

  return (<>
    <h1 className="text-3xl font-bold underline text-red-400">
      Hello world!
    </h1>
    <h2>Help</h2>
    <br />
    <button onClick={openModal} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      ヘルプ
      <svg aria-hidden="true" className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
    </button>
    <Modal show={ show } closeModal={ closeModal } content={ content } />
  </>);
};

export default Help;