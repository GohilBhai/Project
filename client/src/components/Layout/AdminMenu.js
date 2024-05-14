import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css"; // Import your CSS file

const AdminMenu = () => {
  return (
    <div className="admin-menu-container">
      <div className="admin-menu-header">
        <h4>Admin Panel</h4>
      </div>
      <div className="admin-menu-list">
        <NavLink
          to="/dashboard/admin/create-category"
          className="admin-menu-item"
          activeClassName="active"
        >
          Create Category
        </NavLink>
        <NavLink
          to="/dashboard/admin/create-product"
          className="admin-menu-item"
          activeClassName="active"
        >
          Create Product
        </NavLink>
        <NavLink
          to="/dashboard/admin/products"
          className="admin-menu-item"
          activeClassName="active"
        >
          Products
        </NavLink>
        <NavLink
          to="/dashboard/admin/users"
          className="admin-menu-item"
          activeClassName="active"
        >
          Users
        </NavLink>
      </div>
    </div>
  );
};

export default AdminMenu;
