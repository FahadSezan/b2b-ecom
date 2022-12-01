//rfce
import React from 'react';
import * as BsIcons from 'react-icons/bs';
import ProductsTabs from './ProductsTabs';

function Products() {
  return (
    <div className="products">
      <div className="container-fluid p-0">
        <div className="bg-primary px-3 py-2">
          <div className="d-flex justify-content-between text-white fs-4  my-auto py-3">
            <div></div>
            <p className=" text-center mb-0">Catalogue</p>
            <BsIcons.BsSearch className="my-auto" />
          </div>
        </div>
        <div>
          <ProductsTabs />
        </div>
      </div>
    </div>
  );
}

export default Products;
