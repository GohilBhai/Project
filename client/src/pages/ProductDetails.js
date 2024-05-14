import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(`/product/get-product/${params.slug}`);
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <MDBContainer className="mt-2">
        <MDBCard className="d-flex flex-row">
          <MDBCardImage
            src={`/product/product-photo/${product._id}`}
            alt={product.name}
            className="card-img-top w-50 img-fluid mw-50"
          />
          <MDBCardBody className="w-50">
            <h1 className="text-center">Product Details</h1>
            <h6>Name: {product.name}</h6>
            <h6>Description: {product.description}</h6>
            <h6>Price: {product.price}</h6>
            <h6>Category: {product?.category?.name}</h6>
            <MDBBtn className="ms-1" color="secondary">
              ADD TO CART
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
      <hr />
      <MDBContainer>
        <h6>Similar Products</h6>
        {relatedProducts.length < 1 && (
          <p className="text-center">No Similar Products found</p>
        )}
        <MDBRow className="d-flex flex-wrap">
          {relatedProducts?.map((p) => (
            <MDBCol size="auto" key={p._id} className="m-2">
              <MDBCard style={{ width: "18rem" }}>
                <MDBCardImage
                  src={`/product/product-photo/${p._id}`}
                  alt={p.name}
                  className="card-img-top img-fluid mw-100"
                />
                <MDBCardBody>
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className="card-text"> $ {p.price}</p>
                  <MDBBtn
                    className="ms-1"
                    color="primary"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </MDBBtn>
                  <MDBBtn className="ms-1" color="secondary">
                    ADD TO CART
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </Layout>
  );
};

export default ProductDetails;
