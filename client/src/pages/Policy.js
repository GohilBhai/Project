import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;

//=++===========================

// import React, { useState, useEffect } from "react";
// import productsData from "./products.json"; // Adjust the path as needed

// const Policy = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     setProducts(productsData);
//   }, []);

//   return (
//     <div className="container">
//       <h1 className="text-center">Dashboard</h1>
//       <div className="row">
//         {products.map((product) => (
//           <div key={product.picture} className="col-md-4">
//             <div className="card mb-3">
//               <img
//                 src={`/${product.picture}.jpg`}
//                 className="card-img-top"
//                 alt={product.category}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{product.category}</h5>
//                 <p className="card-text">{product.description}</p>
//                 <p className="card-text">Company: {product.company_name}</p>
//                 <p className="card-text">Price: ${product.price}</p>
//                 <p className="card-text">Old Price: ${product.old_price}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Policy;

//++++++++++++++++++++++++++++++++++++++++++++++++
// import React from "react";
// import {
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBBtn,
// } from "mdb-react-ui-kit";

// function App() {
//   return (
//     <MDBContainer fluid className="my-5">
//       <MDBRow>
//         <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
//           {products?.map((p) => (
//           <MDBCard>
//             <MDBCardImage  key={p._id}
//              src={`/product/product-photo/${p._id}`}
//                   className="card-img-top"
//                   alt={p.name}
//             />
//             <MDBCardBody>
//               <div className="d-flex justify-content-between mb-3">
//                  <h5 className="card-title">{p.name}</h5>
//                  <h5 className="card-text">$ {p.price}</h5>
//               </div>
//               <div className="d-flex justify-content-between mb-3">
//                 <MDBBtn color="info">Cart</MDBBtn>
//                 <MDBBtn color="info">Info</MDBBtn>
//               </div>
//             </MDBCardBody>
//           </MDBCard>
//              ))}
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>

//     {products?.map((p) => (
//               <div key={p._id} className="product-card">
//                 <img
//                   src={`/product/product-photo/${p._id}`}
//                   className="card-img-top"
//                   alt={p.name}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{p.name}</h5>
//                   <p className="card-text">
//                     {p.description.substring(0, 30)}...
//                   </p>
//                   <p className="card-text">$ {p.price}</p>
//                   <div className="button-group">
//                     <button className="btn btn-primary">More Details</button>
//                     <button className="btn btn-secondary">ADD TO CART</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//   );
// }

// export default App;
