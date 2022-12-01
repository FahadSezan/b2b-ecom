import React from 'react';
import Tabs from './Tabs';
import Navbar from './Navbar';
import '../App.css';

function Home() {
  return (
    <div className="home">
      <div className="bg-light">
        <div>
          <Navbar />
        </div>
        <div class="container-fluid p-0">
          <div class="bg-primary px-3 py-5">
            <div class="d-flex justify-content-between mb-5">
              <p class="fs-5 text-white fw-bold my-auto">
                Mono Super Market <i class="fa-solid fa-certificate"></i>
              </p>
              <button class="btn rounded-pill bg-white text-primary fw-bold px-3 fs-5">
                Online{' '}
                <small class="px-2">
                  <i class="fa-solid fa-circle "></i>
                </small>
              </button>
            </div>
          </div>
          <div class="container home__share-box">
            <div class="card rounded p-3">
              <h3>Share more to earn more</h3>
              <h5 class="fs-6 text-muted">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Architecto veniam sint alias minusr.
              </h5>
              <div class="d-flex justify-content-between mt-2">
                <p class="text-warning fw-fold  my-auto fs-6">
                  adakhdbakdbaldkba
                </p>
                <button class="btn btn-success fs-5">
                  <i class="fa-brands fa-whatsapp px-2 mb-0 py-1"></i>Success
                </button>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="d-flex justify-content-between my-2">
              <h3>OverView</h3>
              <select
                class="form-select form-select-sm w-50"
                aria-label=".form-select-sm example"
              >
                <option selected>Last week</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="d-flex justify-content-between my-2">
              <div class="card w-50 mx-2 p-3">
                <p class="text-muted fs-5 mb-0">Orders</p>
                <p class="mb-0 fw-bold fs-3">33</p>
              </div>
              <div class="card w-50 mx-2 p-3">
                <p class="text-muted fs-5 mb-0">Total Sales</p>
                <p class="mb-0 fw-bold fs-3">2921</p>
              </div>
            </div>
            <div class="d-flex justify-content-between my-2">
              <div class="card w-50 mx-2 p-3">
                <p class="text-muted fs-5 mb-0">Store Views</p>
                <p class="mb-0 fw-bold fs-3">301</p>
              </div>
              <div class="card w-50 mx-2 p-3">
                <p class="text-muted fs-5 mb-0">Product Views</p>
                <p class="mb-0 fw-bold fs-3">19121</p>
              </div>
            </div>
            <div class="d-flex justify-content-between my-2">
              <h3>Active Order</h3>
              <button class="btn fs-6 text-dark px-4">
                View all <i class="fa-solid fa-greater-than"></i>
              </button>
            </div>
            <div className="container-fluid p-0">
              <Tabs />
            </div>
            <div className="my-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

// import React, { Component } from 'react';
// import Tabs from './Tabs';
// import Navbar from './Navbar';
// export default class Home extends Component {
//   render() {
//     return (
//       <div className="bg-light">
//         <div>
//           <Navbar />
//         </div>
//         <div class="container-fluid p-0">
//           <div class="bg-primary px-3 py-5">
//             <div class="d-flex justify-content-between mb-5">
//               <p class="fs-5 text-white fw-bold my-auto">
//                 Mono Super Market <i class="fa-solid fa-certificate"></i>
//               </p>
//               <button class="btn rounded-pill bg-white text-primary fw-bold px-3 fs-5">
//                 Online{' '}
//                 <small class="px-2">
//                   <i class="fa-solid fa-circle "></i>
//                 </small>
//               </button>
//             </div>
//           </div>
//           <div class="container home__share-box">
//             <div class="card rounded p-3">
//               <h3>Share more to earn more</h3>
//               <h5 class="fs-6 text-muted">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                 Architecto veniam sint alias minusr.
//               </h5>
//               <div class="d-flex justify-content-between mt-2">
//                 <p class="text-warning fw-fold  my-auto fs-6">
//                   adakhdbakdbaldkba
//                 </p>
//                 <button class="btn btn-success fs-5">
//                   <i class="fa-brands fa-whatsapp px-2 mb-0 py-1"></i>Success
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div class="container">
//             <div class="d-flex justify-content-between my-2">
//               <h3>OverView</h3>
//               <select
//                 class="form-select form-select-sm w-50"
//                 aria-label=".form-select-sm example"
//               >
//                 <option selected>Last week</option>
//                 <option value="1">One</option>
//                 <option value="2">Two</option>
//                 <option value="3">Three</option>
//               </select>
//             </div>
//             <div class="d-flex justify-content-between my-2">
//               <div class="card w-50 mx-2 p-3">
//                 <p class="text-muted fs-5 mb-0">Orders</p>
//                 <p class="mb-0 fw-bold fs-3">33</p>
//               </div>
//               <div class="card w-50 mx-2 p-3">
//                 <p class="text-muted fs-5 mb-0">Total Sales</p>
//                 <p class="mb-0 fw-bold fs-3">2921</p>
//               </div>
//             </div>
//             <div class="d-flex justify-content-between my-2">
//               <div class="card w-50 mx-2 p-3">
//                 <p class="text-muted fs-5 mb-0">Store Views</p>
//                 <p class="mb-0 fw-bold fs-3">301</p>
//               </div>
//               <div class="card w-50 mx-2 p-3">
//                 <p class="text-muted fs-5 mb-0">Product Views</p>
//                 <p class="mb-0 fw-bold fs-3">19121</p>
//               </div>
//             </div>
//             <div class="d-flex justify-content-between my-2">
//               <h3>Active Order</h3>
//               <button class="btn fs-6 text-dark px-4">
//                 View all <i class="fa-solid fa-greater-than"></i>
//               </button>
//             </div>
//             <div className="container-fluid p-0">
//               <Tabs />
//             </div>
//             <div className="my-5"></div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
