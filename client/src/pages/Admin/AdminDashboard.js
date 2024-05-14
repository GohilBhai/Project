import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import "./style.css"; // Import your CSS file

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid admin-dashboard-container">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-8">
            <div className="card admin-info-card">
              <h3 className="admin-info-title">Admin Information</h3>
              <div className="admin-info">
                <p className="admin-info-item">Name: {auth?.user?.name}</p>
                <p className="admin-info-item">Email: {auth?.user?.email}</p>
                <p className="admin-info-item">Contact: {auth?.user?.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
