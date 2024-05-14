import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";

import axios from "axios";
import { Checkbox, Radio, Pagination } from "antd";
import { Prices } from "../components/Prices";

//+++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++
import "./style.css";
import Slide1 from "../assets/images/slider-1.png";
import Slide2 from "../assets/images/slider-2.png";
//+++++++++++++++++++++++++++++++++++++++
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
//+++++++++++++++++++++++++++++++++++++++

const HomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // +=============================================
  function chunkArray(array, chunkSize) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }

  // +=============================================
  // slider mate se  .......................

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    autoplay: 3000,
    // centerMode:true,
  };

  // +=============================================
  // +=============================================

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);
  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/product/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"ALl Products - Best offers "}>
      {/* slider in home page    */}
      {/* slider in home page    */}
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="carousel-image-container">
              <img class="d-block w-100" src={Slide1} alt="First slide" />
              <div class="carousel-caption">
                <h1>First Slide</h1>
                <p>This is a description for the first slide.</p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="carousel-image-container">
              <img class="d-block w-100" src={Slide2} alt="Second slide" />
              <div class="carousel-caption">
                <h1>Second Slide</h1>
                <p>This is a description for the second slide.</p>
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      {/* slider in home page    */}
      {/* slider in home page    */}
      <div className="container-fluid row mt-5">
        <div className="col-md-3">
          <h4 className="text-center">Filter By Category</h4>
          <div className="filter-options">
            {categories?.map((c) => (
              <Checkbox
                key={c._id}
                onChange={(e) => handleFilter(e.target.checked, c._id)}
              >
                {c.name}
              </Checkbox>
            ))}
          </div>
          {/* Price filter */}
          <h4 className="text-center mt-4">Filter By Price</h4>
          <div className="filter-options">
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((p) => (
                <div key={p._id}>
                  <Radio value={p.array}>{p.name}</Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
          <div className="reset-button">
            <button
              className="btn btn-danger"
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>
        </div>
        <div className="col-md-8">
          <h1 className="text-center">All Products</h1>
          <MDBContainer fluid className="my-5">
            {chunkArray(products, 3).map((chunk, index) => (
              <MDBRow key={index}>
                {chunk.map((p) => (
                  <MDBCol md="12" lg="4" className="mb-4 mb-lg-0" key={p._id}>
                    <MDBCard>
                      <MDBCardImage
                        src={`/product/product-photo/${p._id}`}
                        className="card-img-top"
                        alt={p.name}
                      />
                      <MDBCardBody>
                        <div className="d-flex justify-content-between mb-3">
                          <h5 className="card-title">{p.name}</h5>
                          <h5 className="card-text">$ {p.price}</h5>
                        </div>
                        <div className="d-flex justify-content-between mb-3">
                          <MDBBtn
                            color="info"
                            onClick={() => navigate(`/product/${p.slug}`)}
                          >
                            Detail
                          </MDBBtn>
                          <MDBBtn
                            className="btn btn-secondary ms-1"
                            onClick={() => {
                              setCart([...cart, p]);
                              localStorage.setItem(
                                "cart",
                                JSON.stringify([...cart, p])
                              );
                              toast.success("Item Added to cart");
                            }}
                          >
                            ADD TO CART
                          </MDBBtn>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                ))}
              </MDBRow>
            ))}
          </MDBContainer>

          <div className="pagination-container">
            <Pagination
              current={page}
              total={total}
              pageSize={10}
              onChange={(pageNum) => setPage(pageNum)}
              responsive
              showSizeChanger={false}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
