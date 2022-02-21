import React from "react";
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar shadow navbar-expend-sm navbar-dark bg-primary fixed-top ">
        <div className="container">
          <Link className="navbar-brand" to="#">
            Contact Book
          </Link>
          <div>
          <Link  to="/contact/add" className="btn btn-light ml-auto" role="button">
          
           {/* <button class="btn btn-light" type="button">Create Contact</button> */}
            Create Conatct
          </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
