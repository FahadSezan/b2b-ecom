import { useState } from 'react';
import Burger from '../Assets/burger.jpg';
import Veg from '../Assets/Veg.jpg';

import * as BsIcons from 'react-icons/bs';

import Switch from './Switch';

function ProductsTabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const [toggle, setToggle] = useState(false);
  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <div>
      <div className="d-flex justify-content-between">
        <button
          className={
            toggleState === 1
              ? 'tabss active-tabss w-50 text-white py-3 bg-primary '
              : 'tabss w-50 text-white py-3 bg-primary '
          }
          onClick={() => toggleTab(1)}
        >
          Products
        </button>
        <button
          className={
            toggleState === 2
              ? 'tabss active-tabss  w-50 text-white py-3 bg-primary '
              : 'tabss  w-50 text-white py-3 bg-primary '
          }
          onClick={() => toggleTab(2)}
        >
          Categories
        </button>
      </div>
      <div className="content-tabs mx-3 mb-5">
        <div
          className={toggleState === 1 ? 'content  active-content' : 'content '}
        >
          <div className="card my-2 p-2">
            <div className="d-flex justify-content-between card-body">
              <div className="d-flex justify-content-between w-75">
                <img
                  className="img-fluid w-50 h-100 my-auto rounded "
                  src={Burger}
                  alt="burger"
                />
                <div className="w-50 px-2 my-auto">
                  <p className="mb-0">Ice Cream</p>
                  <p className="mb-0">
                    <span>1</span> Unit
                  </p>
                  <p className="mb-0">
                    <i class="fa-solid fa-indian-rupee-sign px-1"></i>
                    <span className="">399</span>{' '}
                    <i class="fa-solid fa-indian-rupee-sign px-1"></i>
                    <span className="">450</span>
                  </p>
                  <p className="text-success mb-0">In Stock</p>
                </div>
              </div>
              <div className="w-25 text-end my-auto">
                <button className="btn border-0 mb-0 w-100 text-end">
                  <BsIcons.BsThreeDotsVertical />
                </button>
                <div className="py-3"></div>

                <button className="btn border-0 mb-0">
                  <Switch />
                </button>
              </div>
            </div>
            <div className="card-footer fs-5 text-muted bg-white">
              <p className="text-center my-auto">
                <BsIcons.BsShare />
                <span className="px-2">Share Product</span>
              </p>
            </div>
          </div>
          <div className="card my-2 p-2">
            <div className="d-flex justify-content-between card-body">
              <div className="d-flex justify-content-between w-75">
                <img
                  className="img-fluid w-50 h-100 my-auto rounded "
                  src={Veg}
                  alt="Veg"
                />
                <div className="w-50 px-2 my-auto">
                  <p className="mb-0">Ice Cream</p>
                  <p className="mb-0">
                    <span>1</span> Unit
                  </p>
                  <p className="mb-0">
                    <i class="fa-solid fa-indian-rupee-sign px-1"></i>
                    <span className="">399</span>{' '}
                    <i class="fa-solid fa-indian-rupee-sign px-1"></i>
                    <span className="">450</span>
                  </p>
                  <p className="text-success mb-0">In Stock</p>
                </div>
              </div>
              <div className="w-25 text-end my-auto">
                <button className="btn border-0 mb-0 w-100 text-end">
                  <BsIcons.BsThreeDotsVertical />
                </button>
                <div className="py-3"></div>

                <button className="btn border-0 mb-0">
                  <Switch />
                </button>
              </div>
            </div>
            <div className="card-footer fs-5 text-muted bg-white">
              <p className="text-center my-auto">
                <BsIcons.BsShare />
                <span className="px-2">Share Product</span>
              </p>
            </div>
          </div>
          <div className="card my-2 p-2">
            <div className="d-flex justify-content-between card-body">
              <div className="d-flex justify-content-between w-75">
                <img
                  className="img-fluid w-50 h-100 my-auto rounded "
                  src={Veg}
                  alt="Veg"
                />
                <div className="w-50 px-2 my-auto">
                  <p className="mb-0">Ice Cream</p>
                  <p className="mb-0">
                    <span>1</span> Unit
                  </p>
                  <p className="mb-0">
                    <i class="fa-solid fa-indian-rupee-sign px-1"></i>
                    <span className="">399</span>{' '}
                    <i class="fa-solid fa-indian-rupee-sign px-1"></i>
                    <span className="">450</span>
                  </p>
                  <p className="text-success mb-0">In Stock</p>
                </div>
              </div>
              <div className="w-25 text-end my-auto">
                <button className="btn border-0 mb-0 w-100 text-end">
                  <BsIcons.BsThreeDotsVertical />
                </button>
                <div className="py-3"></div>

                <button className="btn border-0 mb-0">
                  <Switch />
                </button>
              </div>
            </div>
            <div className="card-footer fs-5 text-muted bg-white">
              <p className="text-center my-auto">
                <BsIcons.BsShare />
                <span className="px-2">Share Product</span>
              </p>
            </div>
          </div>
          <div className="card my-2 p-2">
            <div className="d-flex justify-content-between card-body">
              <div className="d-flex justify-content-between w-75">
                <img
                  className="img-fluid w-50 h-100 my-auto rounded "
                  src={Veg}
                  alt="Veg"
                />
                <div className="w-50 px-2 my-auto">
                  <p className="mb-0">Ice Cream</p>
                  <p className="mb-0">
                    <span>1</span> Unit
                  </p>
                  <p className="mb-0">
                    <i class="fa-solid fa-indian-rupee-sign px-1"></i>
                    <span className="">399</span>{' '}
                    <i class="fa-solid fa-indian-rupee-sign px-1"></i>
                    <span className="">450</span>
                  </p>
                  <p className=" mb-0">
                    {toggle ? <span>Out of stock</span> : <span>In Stock</span>}
                  </p>
                </div>
              </div>
              <div className="w-25 text-end my-auto">
                <button className="btn border-0 mb-0 w-100 text-end">
                  <BsIcons.BsThreeDotsVertical />
                </button>
                <div className="py-3"></div>

                <button className="btn border-0 mb-0">
                  <Switch onClick={toggler} />
                </button>
              </div>
            </div>
            <div className="card-footer fs-5 text-muted bg-white">
              <p className="text-center my-auto">
                <BsIcons.BsShare />
                <span className="px-2">Share Product</span>
              </p>
            </div>
          </div>
          <div className="w-100 text-center">
            <button className="btn btn-warning text-white py-2 fs-5">
              Add New Product
            </button>
          </div>
        </div>

        <div
          className={toggleState === 2 ? 'content  active-content' : 'content'}
        >
          <div className="card my-2 p-2">
            <div className="d-flex justify-content-between">
              <div className="d-flex justify-content-between w-75">
                <img
                  className="img-fluid w-50 h-100 my-auto rounded "
                  src={Burger}
                  alt="burger"
                />
                <div className="w-50 px-2 my-auto">
                  <p className="mb-0">Fast Food</p>
                </div>
              </div>
              <div className="w-25 text-end my-auto">
                <button className="btn border-0 mb-0 w-100 text-end">
                  <BsIcons.BsThreeDotsVertical />
                </button>
                <div className="py-3"></div>
                <button className="btn border-0 mb-0">
                  <Switch />
                </button>
              </div>
            </div>
          </div>
          <div className="w-100 text-center">
            <button className="btn btn-warning text-white py-2 fs-5">
              Add New Category
            </button>
          </div>
        </div>
        <div className="my-5 py-1"></div>
      </div>
    </div>
  );
}

export default ProductsTabs;
