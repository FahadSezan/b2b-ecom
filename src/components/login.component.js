import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Login extends Component {
  render() {
    return (
      <div className="conatiner w-100 mx-auto my-5 p-3">
        <div className="card p-3">
          <p className="fs-3 text-center">Sign In</p>
          <div className="card-body my-2">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control my-2"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label for="exampleInputnumber1">obile number</label>
                <input
                  type="number"
                  className="form-control my-2"
                  id="exampleInputnumber1"
                  placeholder="number"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control my-2"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>

              <Link to="/home" className="w-100 text-white btn btn-primary my-2">
                Submit
              </Link>
              <p className="forgot-password text-right my-auto mb-0">
                New here?
                <Link to="/sign-up" className="text-warning px-3 btn border-0"> sign Up?</Link>
                {/* <a href="/sign-up">sign Up?</a> */}
              </p>
            </form>
          </div>
        </div>
        
      </div>
    );
  }
}
