import React,{ useState } from 'react';
import Burger from '../Assets/burger.jpg';
import Veg from '../Assets/Veg.jpg';

function Tabs() {
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
                Today <span>12:00 AM</span>
              </p>
            </div>
            <div className="d-flex justify-content-between p-3">
              <div className="d-flex justify-content-between w-75 my-auto">
                <img
                  className="img-fluid w-25 h-25 my-auto rounded"
                  src={Burger}
                  alt="Burger"
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
                Today <span>12:00 AM</span>
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
                Today <span>12:00 AM</span>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
