import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Pagination } from "antd";
import "./style.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 2; // Number of items per page

  // Get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  // Lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);

  // Pagination change handler
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Paginate products
  const paginatedProducts = products.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h2 className="text-center">ALL PRODUCTS LIST</h2>
            <div className="d-flex flex-wrap justify-content-center align-items-stretch">
              {paginatedProducts.map((p) => (
                <Link
                  key={p._id}
                  to={`/dashboard/admin/product/${p.slug}`}
                  className="product-link"
                >
                  <div className="card m-2 product-card">
                    <img
                      src={`/product/product-photo/${p._id}`}
                      className="card-img-top product-image"
                      alt={p.name}
                    />
                    <div
                      className="card-body"
                      style={{ backgroundColor: "skyblue" }}
                    >
                      <h5
                        className="card-title"
                        style={{
                          textTransform: "uppercase",
                        }}
                      >
                        {p.name}
                      </h5>
                      <p className="card-text">
                        {p.description.slice(0, 30)}...
                      </p>
                      <h6 className="card-text">Price: ${p.price}</h6>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="d-flex justify-content-center mt-4 mb-4">
              <Pagination
                current={currentPage}
                total={products.length}
                pageSize={pageSize}
                onChange={handlePageChange}
                showSizeChanger={false}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
