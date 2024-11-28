import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expense Tracker</h1>
    <nav>
      <Link to="/">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  </header>
);

export default Header;
