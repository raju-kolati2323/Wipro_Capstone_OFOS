import React from "react";
import { Link } from "react-router-dom";

const CustomerNavbar = ({ onLogout }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
      <Link className="navbar-brand fw-bold" to="/customer/dashboard">Customer</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/customer/restaurants">Restaurants</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/customer/orders">My Orders</Link></li>
          <li className="nav-item"><button className="btn btn-sm btn-light" onClick={onLogout}>Logout</button></li>
        </ul>
      </div>
    </div>
  </nav>
);
export default CustomerNavbar;
