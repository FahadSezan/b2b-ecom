import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import TransactionTabs from './TransactionTabs'

function Payment() {
  return (
    <div>
      <div className="container-fluid p-0">
        <div className="bg-primary px-3 py-2">
          <div className="d-flex justify-content-between text-white fs-4  my-auto py-3">
            <IoIcons.IoMdArrowRoundBack className="my-auto" />

            <p className=" text-center mb-0">Payments</p>
            <AiIcons.AiOutlineInfoCircle className="my-auto" />
          </div>
        </div>
        <div className="my-3 px-3">
          <div className="d-flex justify-content-between my-auto fs-5">
            <p className="my-auto">Default Method</p>
            <p className="btn border-0 my-auto text-muted">
              <span className="px-2">Both option</span>
              <FaIcons.FaGreaterThan />
            </p>
          </div>
          <div className="d-flex justify-content-between my-auto fs-5 border-bottom pb-2">
            <p className="my-auto">Payment Profile</p>
            <p className="btn border-0 my-auto text-muted">
              <span className="px-2">Bank Account</span>
              <FaIcons.FaGreaterThan />
            </p>
          </div>
          <div className="d-flex justify-content-between my-auto fs-5">
            <p className="my-auto">Payment Overview</p>
            <p className="btn border-0 my-auto text-muted">
              <span className="px-2">Both option</span>
              <FaIcons.FaGreaterThan />
            </p>
          </div>
          <div class="d-flex justify-content-between my-2 ">
            <div class="text-white text-start w-100 mx-2 py-3 px-2 btn-warning btn">
              <p class=" fs-6 mb-0 px-0">Ammount Hold</p>
              <p class="mb-0 fw-bold fs-5">33</p>
            </div>
            <div class="text-white text-start w-100 mx-2 py-3 px-2 btn-success btn">
              <p class=" fs-6 mb-0">Ammount Received</p>
              <p class="mb-0 fw-bold fs-5">2921</p>
            </div>
          </div>
          <p className="my-2 fs-5">Transactions</p>
          <div className="conatiner">
            <TransactionTabs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
