import React from 'react';
import * as IoIcons from 'react-icons/io';
import { Link } from 'react-router-dom';
function Accounts() {
  return (
    <div className="container-fluid p-0">
      <div className="bg-primary px-3 py-2">
        <div className="d-flex justify-content-between text-white fs-4  my-auto py-3">
          <IoIcons.IoMdArrowRoundBack className="my-auto" />

          <p className=" text-center mb-0">Accounts</p>
          <div></div>
        </div>
      </div>
      <div className="my-3">
        <Link to="/" className=" text-white btn btn-danger w-100 mx-auto">
          Log Out
        </Link>
      </div>
    </div>
  );
}

export default Accounts;
