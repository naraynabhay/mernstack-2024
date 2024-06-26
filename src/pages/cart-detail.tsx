// import React from 'react'
// import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { FaDotCircle } from "react-icons/fa";
// import { useSelector } from "react-redux";
import {  useParams } from "react-router-dom";
// import { Navigate, useNavigate, useParams } from "react-router-dom";
// import AdminSidebar from "../../../components/admin/AdminSidebar";
// import { Skeleton } from "../../../components/loader";
import {
  // useDeleteProductMutation,
  useProductDetailsQuery,
  // useUpdateProductMutation,
} from "../redux/api/productAPI";
import { server } from "../redux/store";
// import { RootState, server } from "../redux/store";
// import { responseToast } from "../../../utils/features";
import CartItem from "../components/cart-item";
import toast from "react-hot-toast";
import { addToCart } from "../redux/reducer/cartReducer";
import { useDispatch } from "react-redux";
// import { FaPlus } from "react-icons/fa";
import { Skeleton } from "../components/loader";

const CartDetail = () => {
    // const { user } = useSelector((state: RootState) => state.userReducer);

  const params = useParams();
  // const navigate = useNavigate();

  const dispatch = useDispatch();
  const addToCartHandler = (cartItem: CartItem) => {
    if (cartItem.stock < 1) return toast.error("Out of Stock");
    dispatch(addToCart(cartItem));
    toast.success("Added to cart");
  };
  
  const { data, isLoading } = useProductDetailsQuery(params.id!);

  const { price, photo, name, stock, category ,des1,des2} = data?.product || {
    productId:"",
    photo: "",
    category: "",
    name: "",
    stock: 0,
    price: 0,
    des1:"",
    des2:"",
    
  };
  return (
    <div className="parent_container">
      <div className="product-detail">
      {isLoading ? (
        <Skeleton length={20} />
      ) : (
        <>
           <section>
            <img src={`${server}/${photo}`} alt="Product" />
           </section>
        
        </>
      )}
      </div>
       <div className="detailcart">
       <p>{name}</p>
       <div className="description">{des1}</div>
       <h1><span>MRP</span> (Including all taxes)</h1>
       <h3>₹{price}</h3>
       <div >
       {stock > 0 ? (
              <div className="green exclusivestock"><FaDotCircle /> In stock, ready to ship</div>
            ) : (
              <div className="red"> Not Available</div>
           )}
           </div>
       <h2>{category}</h2>
       <div className="add-to-cart-btn"  onClick={() =>
           addToCartHandler({ productId: params.id!, price, name, photo, stock, quantity: 1 })
          }>
        ADD TO CART
       </div>
       <div className="buy_btn_cart">
        BUY NOW
       </div>
       <h1 className="font-bold">Features :</h1>
       <div className="des_two">{des2}</div>
       
    </div>
    
  </div>
  );
};

export default CartDetail
