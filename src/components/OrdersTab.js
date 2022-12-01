import React, { useState } from 'react';
import Burger from '../Assets/burger.jpg';
import Veg from '../Assets/Veg.jpg';
import * as GoIcons from 'react-icons/go';
import * as FaIcons from 'react-icons/fa';
import { Link } from "react-router-dom";

function OrdersTab() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="orders tab">
      <div className="d-flex justify-content-between">
        <button
          className={
            toggleState === 1
              ? 'tabs active-tabs rounded-pill text-white px-2 border-0 mx-2'
              : 'tabs rounded-pill border-0 mx-2 px-2 py-1'
          }
          onClick={() => toggleTab(1)}
        >
          All Time(112)
        </button>
        <button
          className={
            toggleState === 2
              ? 'tabs active-tabs rounded-pill text-white px-2 border-0 mx-2'
              : 'tabs rounded-pill border-0 mx-2 px-2 py-1'
          }
          onClick={() => toggleTab(2)}
        >
          Todays(152)
        </button>
        <button
          className={
            toggleState === 3
              ? 'tabs active-tabs rounded-pill text-white px-2 border-0 mx-2'
              : 'tabs rounded-pill border-0 mx-2 px-2 py-1'
          }
          onClick={() => toggleTab(3)}
        >
          Yesterday(133)
        </button>
      </div>
      <div className="content-tabs mx-3 mb-5">
        <div
          className={toggleState === 1 ? 'content  active-content' : 'content'}
        >
          <div className="card my-2 p-2">
            <div className="d-flex justify-content-between my-2">
              <div className="d-flex justify-content-between">
                <p className=" my-auto mx-2">
                  Order : <span>#123345</span>
                </p>
                <button className="btn btn-success">New</button>
              </div>
              <p>
                Today <span>11:00 AM</span>
              </p>
            </div>
            <div className="d-flex justify-content-between p-3">
              <div className="d-flex justify-content-between w-75 my-auto">
                <img
                  className="img-fluid w-25 h-25 my-auto rounded"
                  src={Burger}
                  alt="burger"
                />
                <div className="text-left w-75 px-3 my-auto">
                  <p className="mb-0">Ice cream</p>
                  <p className="text-primary mb-0">
                    <i class="fa-solid fa-indian-rupee-sign"></i>{' '}
                    <span>12354</span>
                  </p>
                </div>
              </div>
              <div className="my-auto">
                
                <button className="btn bg-warning ">000</button>
              </div>
            </div>
            <div className="card-footer bg-white">
              <div className="d-flex justify-content-between my-auto text-muted">
                <p className=" my-auto">
                  <GoIcons.GoPrimitiveDot className="text-warning" />{' '}
                  <span>Pending</span>
                </p>
                <Link to="/ordersdetails" className="btn border rounded bg-white text-muted"><span className="px-2">Details</span> <FaIcons.FaGreaterThan /></Link>
                {/* <button className="btn border rounded bg-white text-muted"><span className="px-2">Details</span> <FaIcons.FaGreaterThan /></button> */}

              </div>
            </div>
          </div>
          <div className="card my-2 p-2">
            <div className="d-flex justify-content-between my-2">
              <div className="d-flex justify-content-between">
                <p className=" my-auto mx-2">
                  Order : <span>#123345</span>
                </p>
                <button className="btn btn-success">New</button>
              </div>
              <p>
                Today <span>11:00 AM</span>
              </p>
            </div>
            <div className="d-flex justify-content-between p-3">
              <div className="d-flex justify-content-between w-75 my-auto">
                <img
                  className="img-fluid w-25 h-25 my-auto rounded"
                  src={Veg}
                  alt="Veg"
                />
                <div className="text-left w-75 px-3 my-auto">
                  <p className="mb-0">Ice cream</p>
                  <p className="text-primary mb-0">
                    <i class="fa-solid fa-indian-rupee-sign"></i>{' '}
                    <span>12354</span>
                  </p>
                </div>
              </div>
              <div className="my-auto">
                
                <button className="btn bg-warning ">000</button>
              </div>
            </div>
            <div className="card-footer bg-white">
              <div className="d-flex justify-content-between my-auto text-muted">
                <p className=" my-auto">
                  <GoIcons.GoPrimitiveDot className="text-warning" />{' '}
                  <span>Pending</span>
                </p>
                <Link to="/ordersdetails" className="btn border rounded bg-white text-muted"><span className="px-2">Details</span> <FaIcons.FaGreaterThan /></Link>
                {/* <button className="btn border rounded bg-white text-muted"><span className="px-2">Details</span> <FaIcons.FaGreaterThan /></button> */}

              </div>
            </div>
          </div>
          
        </div>

        <div
          className={toggleState === 2 ? 'content  active-content' : 'content'}
        >
          <div className="card my-2 p-2">
            <div className="d-flex justify-content-between my-2">
              <div className="d-flex justify-content-between">
                <p className=" my-auto mx-2">
                  Order : <span>#123345</span>
                </p>
                <button className="btn btn-success">New</button>
              </div>
              <p>
                Today <span>11:00 AM</span>
              </p>
            </div>
            <div className="d-flex justify-content-between p-3">
              <div className="d-flex justify-content-between w-75 my-auto">
                <img
                  className="img-fluid w-25 h-25 my-auto rounded"
                  src={Burger}
                  alt="burger"
                />
                <div className="text-left w-75 px-3 my-auto">
                  <p className="mb-0">Ice cream</p>
                  <p className="text-primary mb-0">
                    <i class="fa-solid fa-indian-rupee-sign"></i>{' '}
                    <span>12354</span>
                  </p>
                </div>
              </div>
              <div className="my-auto">
                
                <button className="btn bg-warning ">000</button>
              </div>
            </div>
            <div className="card-footer bg-white">
              <div className="d-flex justify-content-between my-auto text-muted">
                <p className=" my-auto">
                  <GoIcons.GoPrimitiveDot className="text-warning" />{' '}
                  <span>Pending</span>
                </p>
                <Link to="/ordersdetails" className="btn border rounded bg-white text-muted"><span className="px-2">Details</span> <FaIcons.FaGreaterThan /></Link>
                {/* <button className="btn border rounded bg-white text-muted"><span className="px-2">Details</span> <FaIcons.FaGreaterThan /></button> */}

              </div>
            </div>
          </div>
        </div>

        <div
          className={toggleState === 3 ? 'content  active-content' : 'content'}
        >
          <div className="card my-2 p-2">
            <div className="d-flex justify-content-between my-2">
              <div className="d-flex justify-content-between">
                <p className=" my-auto mx-2">
                  Order : <span>#123345</span>
                </p>
                <button className="btn btn-success">New</button>
              </div>
              <p>
                Today <span>11:00 AM</span>
              </p>
            </div>
            <div className="d-flex justify-content-between p-3">
              <div className="d-flex justify-content-between w-75 my-auto">
                <img
                  className="img-fluid w-25 h-25 my-auto rounded"
                  src={Veg}
                  alt="Veg"
                />
                <div className="text-left w-75 px-3 my-auto">
                  <p className="mb-0">Ice cream</p>
                  <p className="text-primary mb-0">
                    <i class="fa-solid fa-indian-rupee-sign"></i>{' '}
                    <span>12354</span>
                  </p>
                </div>
              </div>
              <div className="my-auto">
                
                <button className="btn bg-warning ">000</button>
              </div>
            </div>
            <div className="card-footer bg-white">
              <div className="d-flex justify-content-between my-auto text-muted">
                <p className=" my-auto">
                  <GoIcons.GoPrimitiveDot className="text-warning" />{' '}
                  <span>Pending</span>
                </p>
                <Link to="/ordersdetails" className="btn border rounded bg-white text-muted"><span className="px-2">Details</span> <FaIcons.FaGreaterThan /></Link>
                {/* <button className="btn border rounded bg-white text-muted"><span className="px-2">Details</span> <FaIcons.FaGreaterThan /></button> */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrdersTab;
