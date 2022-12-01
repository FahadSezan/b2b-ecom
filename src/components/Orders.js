//rfce
import React from 'react';
import * as AiIcons from 'react-icons/ai';
import OrdersTab from './OrdersTab';

function Orders() {
  return (
    <div className="orders">
      <div className="container-fluid p-0">
        <div className="bg-primary px-3 py-2">
          <div className="d-flex justify-content-between text-white fs-4  my-auto py-3">
            <div></div>
            <p className=" text-center mb-0">All Orders (102)</p>
            <AiIcons.AiOutlineDotChart className="my-auto" />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control p-2 mb-2"
              id="exampleFormControlInput1"
              placeholder="Order id / Mobile number"
            />
          </div>
        </div>
        <div className="my-3">
        <OrdersTab />
        </div>
      </div>
    </div>
  );
}

export default Orders;
