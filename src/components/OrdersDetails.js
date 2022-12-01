import React from 'react';
import * as BsIcons from 'react-icons/bs';
import * as IoIcons from 'react-icons/io';
import * as FaIcons from 'react-icons/fa';
import Burger from '../Assets/burger.jpg';
import Veg from '../Assets/Veg.jpg';

import { Link } from 'react-router-dom';
function OrdersDetails() {
  return (
    <div className="orderdetails">
      <div className="container-fluid p-0">
        <div className="bg-primary px-3 py-2">
          <div className="d-flex justify-content-between text-white fs-4  my-auto py-3">
            <Link to="/orders">
              <IoIcons.IoMdArrowRoundBack className="my-auto text-white" />
            </Link>

            <p className=" text-center mb-0">Order #23456</p>
            <div></div>
            {/* <AiIcons.AiOutlineDotChart className="my-auto" /> */}
          </div>
        </div>
        <div className="my-3 px-3">
          <div className="card my-2 p-2 border-0 rounded-0">
            <div className="d-flex justify-content-between ">
              <img
                className="img-fluid w-25 h-100 my-auto rounded "
                src={Burger}
                alt="burger"
              />
              <div className="w-50 px-2 my-auto">
                <p className="mb-0">Ice Cream</p>
                <p className="mb-0">
                  <span>1</span> Unit
                </p>
                <p>
                  <input
                    type="number"
                    className="btn border border-primary w-25"
                    placeholder="1"
                  />{' '}
                  <span className="mx-2">X</span>
                  <i class="fa-solid fa-indian-rupee-sign px-1"></i>
                  <span className="">450</span>
                </p>
              </div>
              <div className="my-auto text-end">
                <p className="mb-0">
                  <i class="fa-solid fa-indian-rupee-sign px-1"></i>
                  <span className="">450</span>
                </p>
              </div>
            </div>
          </div>
          <div className="card my-2 p-2 border-0 rounded-0">
            <div className="d-flex justify-content-between ">
              <img
                className="img-fluid w-25 h-100 my-auto rounded "
                src={Burger}
                alt="burger"
              />
              <div className="w-50 px-2 my-auto">
                <p className="mb-0">Ice Cream</p>
                <p className="mb-0">
                  <span>1</span> Unit
                </p>
                <p>
                  <input
                    type="number"
                    className="btn border border-primary w-25"
                    placeholder="1"
                  />
                  <span className="mx-2">X</span>
                  <i class="fa-solid fa-indian-rupee-sign px-1"></i>
                  <span className="">450</span>
                </p>
              </div>
              <div className="my-auto text-end">
                <p className="mb-0">
                  <i class="fa-solid fa-indian-rupee-sign px-1"></i>
                  <span className="">450</span>
                </p>
              </div>
            </div>
          </div>
          <div className="border-top border-bottom my-1 p-2">
            <div className="d-flex justify-content-between ">
              <p>Item Total</p>
              <p className="mb-0">
                <i class="fa-solid fa-indian-rupee-sign px-1"></i>
                <span className="">450</span>
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Delivery</p>
              <p className="mb-0">
                <i class="fa-solid fa-indian-rupee-sign px-1"></i>
                <span className="">24</span>
              </p>
            </div>
            <div className="d-flex justify-content-between ">
              <p>Order Total</p>
              <p className="mb-0">
                <i class="fa-solid fa-indian-rupee-sign px-1"></i>
                <span className="">1517</span>
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between my-2">
            <p className="my-auto">CUSTOMER DETAILS</p>
            <p className="text-primary my-auto">
              <BsIcons.BsShare /> <span className="px-2 ">Share</span>
            </p>
          </div>
          <form className="border-bottom py-3">
            <div className="form-group d-flex justify-content-between ">
              <label for="inputName" className="my-auto w-25">
                Name:
              </label>
              <input
                type="text"
                className="form-control border-0 rounded-0 shadow-none w-75"
                id="inputName"
                placeholder="Name"
              />
            </div>
            <div className="form-group d-flex justify-content-between ">
              <label for="inputName" className="my-auto w-25">
                Mobile:
              </label>
              <div className="d-flex justify-content-between w-75">
                <input
                  type="text"
                  className="form-control border-0 rounded-0 shadow-none "
                  id="inputName"
                  placeholder="+8801765551768"
                />
                <div className="d-flex justify-content-between w-50">
                  <p className="w-50 text-center text-primary fs-3 my-auto">
                    <BsIcons.BsFillTelephonePlusFill />
                  </p>
                  <p className="w-50 text-center text-success fs-3 my-auto">
                    <FaIcons.FaWhatsappSquare />
                  </p>
                </div>
              </div>
            </div>

            <div className="form-group d-flex justify-content-between ">
              <label for="inputPinCode" className="my-auto w-25">
                Address:
              </label>
              <textarea
                className="form-control border-0 rounded-0 shadow-none w-75"
                aria-label="With textarea"
                placeholder="Amirbag R/A dadadada adada adadad adadada adadad adadad"
              ></textarea>
            </div>
            <div className="form-group d-flex justify-content-between ">
              <label for="inputPinCode" className="my-auto w-25">
                Pincode:
              </label>
              <input
                type="number"
                className="form-control border-0 rounded-0 shadow-none w-75"
                id="inputPinCode"
                placeholder="45789"
              />
            </div>
            <div className="form-group d-flex justify-content-between ">
              <label for="inputCity" className="my-auto w-25">
                City:
              </label>
              <input
                type="text"
                className="form-control border-0 rounded-0 shadow-none w-75"
                id="inputCity"
                placeholder="Dhaka"
              />
            </div>
            <div className="form-group d-flex justify-content-between ">
              <label for="inputCash" className="my-auto w-25">
                Payment:
              </label>
              <div className="d-flex justify-content-between w-75">
                <input
                  type="text"
                  className="form-control border-0 rounded-0 shadow-none "
                  id="inputCash"
                  placeholder="Cash on Delivery"
                />
                <button className="btn-warning btn ">000</button>
              </div>
            </div>
          </form>
          <div className="d-flex justify-content-between my-4">
            <button className="w-100 mx-2 btn border-danger text-danger">
              Reject Order
            </button>
            <button className="w-100 mx-2 btn btn-success">Accept Order</button>
          </div>
        </div>

        <div className="py-5"></div>
      </div>
    </div>
  );
}

export default OrdersDetails;
