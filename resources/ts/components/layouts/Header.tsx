import React from "react";
import {
  Link
} from "react-router-dom";

const Header = () => {
  return (<>
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">テストヘッダー</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900">Home</Link>
          <Link to="/tasks" className="mr-5 hover:text-gray-900">Tasks</Link>
          <Link to="/todos" className="mr-5 hover:text-gray-900">ToDos</Link>
          <Link to="/help" className="mr-5 hover:text-gray-900">Help</Link>
          <Link to="/users" className="mr-5 hover:text-gray-900">Users</Link>
          <Link to="/login" className="mr-5 hover:text-gray-900">Login</Link>
        </nav>
      </div>
    </header>
  </>);
};

export default Header;