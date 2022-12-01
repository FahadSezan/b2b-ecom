import React from 'react';
import '../App.css'
import * as IoIcons from 'react-icons/io';
import Customer from '../Assets/customer.png';
import Orders from '../Assets/orders.png';
import Products from '../Assets/products.png';
import Accounts from '../Assets/accounts.png';
import { Link } from 'react-router-dom';
function Manage() {
  return (
    <div>
      <div className="container-fluid p-0 ">
        <div className="bg-primary px-3 py-2">
          <div className="d-flex justify-content-between text-white fs-4  my-auto py-3">
            <IoIcons.IoMdArrowRoundBack className="my-auto" />

            <p className=" text-center mb-0">Manage</p>
            <div></div>
          </div>
        </div>
        <div className="my-3 py-5">
          <div class="d-flex justify-content-between my-2">
            <Link to="/customers" className="card w-50 mx-2 p-3 text-center text-muted btn ">
              <img
                className="img-fluid w-50 h-100 mx-auto rounded mb-2"
                src={Customer}
                alt="Customer"
              />

              <p class="text-muted fs-5 mb-0 a">Customer</p>
              <p class="mb-0 fw-bold fs-3">33</p>
            </Link>

            <Link to="/products" className="card w-50 mx-2 p-3 text-center text-muted btn">
              <img
                className="img-fluid w-50 h-100 mx-auto rounded mb-2"
                src={Products}
                alt="Products"
              />

              <p class="text-muted fs-5 mb-0">Products</p>
              <p class="mb-0 fw-bold fs-3">2921</p>
            </Link>
          </div>
          <div class="d-flex justify-content-between my-2">
            <Link to="/orders" className="card w-50 mx-2 p-3 text-center text-muted btn">
              <img
                className="img-fluid w-50 h-100 mx-auto rounded mb-2"
                src={Orders}
                alt="Orders"
              />

              <p class="text-muted fs-5 mb-0">Orders</p>
              <p class="mb-0 fw-bold fs-3">33</p>
            </Link>
            <Link to="/payment" className="card w-50 mx-2 p-3 text-center text-muted btn">
              <img
                className="img-fluid w-50 h-100 mx-auto rounded mb-2"
                src={Orders}
                alt="Orders"
              />

              <p class="text-muted fs-5 mb-0">Payments</p>
              <p class="mb-0 fw-bold fs-3">33</p>
            </Link>

            
          </div>
          <div class="d-flex justify-content-between my-2">
            {/* <Link to="/orders" className="card w-50 mx-2 p-3 text-center text-muted btn">
              <img
                className="img-fluid w-50 h-100 mx-auto rounded mb-2"
                src={Orders}
                alt="Orders"
              />

              <p class="text-muted fs-5 mb-0">Payments</p>
              <p class="mb-0 fw-bold fs-3">33</p>
            </Link> */}

            <Link to="/accounts" className="card w-50 mx-2 p-3 text-center text-muted btn">
              <img
                className="img-fluid w-50 h-100 mx-auto rounded mb-2"
                src={Accounts}
                alt="Accounts"
              />

              <p class="text-muted  fs-5 mb-0">Account</p>
              <p class="mb-0 fw-bold fs-3">Fahad</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manage;
