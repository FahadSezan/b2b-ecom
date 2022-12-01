import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavbarData } from './NavbarData';

function Navbar() {
  return (
    <div className="container">
      <nav class="navbar navbar-light bg-inverse  fixed-bottom p-0 mb-0">
        <div className="d-flex justify-content-between w-100 bg-white px-2 py-3">
          {NavbarData.map((item, index) => {
            return (
              <div key={index} className={item.cName}>
                <Link class="nav-link" to={item.path}>
                  <div className="row text-center px-3 inav">
                    <div className="col-sm-6  ">{item.icon}</div>
                    <div className="col-sm-6 px-0 ">{item.title}</div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
