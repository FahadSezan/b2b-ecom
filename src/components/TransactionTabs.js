import React, { useState } from 'react';
import Burger from '../Assets/burger.jpg';
import Veg from '../Assets/Veg.jpg';
import * as GoIcons from 'react-icons/go';
function TransactionTabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div>
      <div className="d-flex justify-content-between">
        <button
          className={
            toggleState === 1
              ? 'tabs active-tabs rounded-pill text-white px-2 border-0 mx-2'
              : 'tabs rounded-pill border-0 mx-2 px-2 py-1'
          }
          onClick={() => toggleTab(1)}
        >
          Pending(112)
        </button>
        <button
          className={
            toggleState === 2
              ? 'tabs active-tabs rounded-pill text-white px-2 border-0 mx-2'
              : 'tabs rounded-pill border-0 mx-2 px-2 py-1'
          }
          onClick={() => toggleTab(2)}
        >
          Accepted(152)
        </button>
        <button
          className={
            toggleState === 3
              ? 'tabs active-tabs rounded-pill text-white px-2 border-0 mx-2'
              : 'tabs rounded-pill border-0 mx-2 px-2 py-1'
          }
          onClick={() => toggleTab(3)}
        >
          Shipped(133)
        </button>
      </div>
      <div className="content-tabs">
        <div
          className={toggleState === 1 ? 'content  active-content' : 'content'}
        >
          <div className="btn border-bottom my-2 px-2">
            <div className="d-flex justify-content-between px-3">
              <div className="d-flex justify-content-between w-75 my-auto">
                <img
                  className="img-fluid w-25 h-25 my-auto rounded"
                  src={Burger}
                  alt="burger"
                />
                <div className="text-start w-75 px-2 my-auto">
                  <p className="mb-0">Order #12345</p>
                  <p className="text-muted mb-0">
                    <span>30/10/2022</span>,<span>08.45 PM</span>
                  </p>
                </div>
              </div>
              <div className="my-auto text-end">
                <p>
                  <i class="fa-solid fa-indian-rupee-sign"></i>
                  <span>12354</span>
                </p>
                <p className="d-flex justify-content-between my-auto">
                < GoIcons.GoPrimitiveDot className="text-success my-auto"/>
                  <span className="text-muted">Received</span>
                </p>
              </div>
            </div>
          </div>
          <div className="btn border-bottom my-2 px-2">
            <div className="d-flex justify-content-between px-3">
              <div className="d-flex justify-content-between w-75 my-auto">
                <img
                  className="img-fluid w-25 h-25 my-auto rounded"
                  src={Veg}
                  alt="Veg"
                />
                <div className="text-start w-75 px-2 my-auto">
                  <p className="mb-0">Order #12345</p>
                  <p className="text-muted mb-0">
                    <span>30/10/2022</span>,<span>08.45 PM</span>
                  </p>
                </div>
              </div>
              <div className="my-auto text-end">
                <p>
                  <i class="fa-solid fa-indian-rupee-sign"></i>
                  <span>12354</span>
                </p>
                <p className="d-flex justify-content-between my-auto">
                < GoIcons.GoPrimitiveDot className="text-success my-auto"/>
                  <span className="text-muted">Received</span>
                </p>
              </div>
            </div>
          </div>
          
        </div>

        <div
          className={toggleState === 2 ? 'content  active-content' : 'content'}
        >
          <div className="btn border-bottom my-2 px-2">
            <div className="d-flex justify-content-between px-3">
              <div className="d-flex justify-content-between w-75 my-auto">
                <img
                  className="img-fluid w-25 h-25 my-auto rounded"
                  src={Veg}
                  alt="Veg"
                />
                <div className="text-start w-75 px-2 my-auto">
                  <p className="mb-0">Order #12345</p>
                  <p className="text-muted mb-0">
                    <span>30/10/2022</span>,<span>08.45 PM</span>
                  </p>
                </div>
              </div>
              <div className="my-auto text-end">
                <p>
                  <i class="fa-solid fa-indian-rupee-sign"></i>
                  <span>12354</span>
                </p>
                <p className="d-flex justify-content-between my-auto">
                < GoIcons.GoPrimitiveDot className="text-success my-auto"/>
                  <span className="text-muted">Received</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={toggleState === 3 ? 'content  active-content' : 'content'}
        >
          <div className="btn border-bottom my-2 px-2">
            <div className="d-flex justify-content-between px-3">
              <div className="d-flex justify-content-between w-75 my-auto">
                <img
                  className="img-fluid w-25 h-25 my-auto rounded"
                  src={Burger}
                  alt="Burger"
                />
                <div className="text-start w-75 px-2 my-auto">
                  <p className="mb-0">Order #12345</p>
                  <p className="text-muted mb-0">
                    <span>30/10/2022</span>,<span>08.45 PM</span>
                  </p>
                </div>
              </div>
              <div className="my-auto text-end">
                <p>
                  <i class="fa-solid fa-indian-rupee-sign"></i>
                  <span>12354</span>
                </p>
                <p className="d-flex justify-content-between my-auto">
                < GoIcons.GoPrimitiveDot className="text-success my-auto"/>
                  <span className="text-muted">Received</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionTabs;
