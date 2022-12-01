import React from 'react';
import * as IoIcons from 'react-icons/io';
import Burger from '../Assets/burger.jpg';
import Veg from '../Assets/Veg.jpg';
function Customers() {
  return (
    <div>
      <div className="container-fluid p-0 ">
        <div className="bg-primary px-3 py-2">
          <div className="d-flex justify-content-between text-white fs-4  my-auto py-3">
            <IoIcons.IoMdArrowRoundBack className="my-auto" />
            <p className=" text-center mb-0">My Customer</p>

            <div></div>
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control p-2 mb-2"
              id="exampleFormControlInput1"
              placeholder="search by cutomers name"
            />
          </div>
        </div>
        <div className="my-3 px-4 ">
          <div className="card my-2 p-2 bg-white border-light my-2">
            <div className="d-flex justify-content-between w-75">
              <img
                className="img-fluid w-25  my-auto rounded "
                src={Burger}
                alt="burger"
              />
              <div className="w-75 px-2 my-auto text-start">
                <p className="mb-0">Kabir</p>
                <p className="mb-0">
                  <span>10</span> orders
                </p>
              </div>
            </div>
          </div>
          <div className="card my-2 p-2 bg-white border-light my-2">
            <div className="d-flex justify-content-between w-75">
              <img
                className="img-fluid w-25  my-auto rounded "
                src={Burger}
                alt="burger"
              />
              <div className="w-75 px-2 my-auto text-start">
                <p className="mb-0">Kabir</p>
                <p className="mb-0">
                  <span>10</span> orders
                </p>
              </div>
            </div>
          </div>
          <div className="card my-2 p-2 bg-white border-light my-2">
            <div className="d-flex justify-content-between w-75">
              <img
                className="img-fluid w-25  my-auto rounded "
                src={Burger}
                alt="burger"
              />
              <div className="w-75 px-2 my-auto text-start">
                <p className="mb-0">Kabir</p>
                <p className="mb-0">
                  <span>10</span> orders
                </p>
              </div>
            </div>
          </div>
          <div className="card my-2 p-2 bg-white border-light my-2">
            <div className="d-flex justify-content-between w-75">
              <img
                className="img-fluid w-25  my-auto rounded "
                src={Burger}
                alt="burger"
              />
              <div className="w-75 px-2 my-auto text-start">
                <p className="mb-0">Kabir</p>
                <p className="mb-0">
                  <span>10</span> orders
                </p>
              </div>
            </div>
          </div>
          <div className="card my-2 p-2 bg-white border-light my-2">
            <div className="d-flex justify-content-between w-75">
              <img
                className="img-fluid w-25  my-auto rounded "
                src={Burger}
                alt="burger"
              />
              <div className="w-75 px-2 my-auto text-start">
                <p className="mb-0">Kabir</p>
                <p className="mb-0">
                  <span>10</span> orders
                </p>
              </div>
            </div>
          </div>
          <div className="card my-2 p-2 bg-white border-light my-2">
            <div className="d-flex justify-content-between w-75">
              <img
                className="img-fluid w-25  my-auto rounded "
                src={Burger}
                alt="burger"
              />
              <div className="w-75 px-2 my-auto text-start">
                <p className="mb-0">Kabir</p>
                <p className="mb-0">
                  <span>10</span> orders
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
