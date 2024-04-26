// import React from 'react'
// import { ChangeEvent, FormEvent, useEffect, useState } from "react";
// import { FaTrash } from "react-icons/fa";
// import { useSelector } from "react-redux";
import {   useParams } from "react-router-dom";
// import {  useNavigate, useParams } from "react-router-dom";
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
import { FaPlus } from "react-icons/fa";

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

  const { data } = useProductDetailsQuery(params.id!);
  // const { data, isLoading, isError } = useProductDetailsQuery(params.id!);

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
    <div>
        <h1>{price}</h1>
        <div>{name}</div>
        <h1>{stock}</h1>
        <h1>{category}</h1>
        <h1>{des1}</h1>
        <h1>{des2}</h1>
        <h1>{category}</h1>
        <img src={`${server}/${photo}`} />,
        
        <button
          onClick={() =>
           addToCartHandler({ productId: params.id!, price, name, photo, stock, quantity: 1 })
          }
        >
          <FaPlus />
        </button>
      
    </div>
  );
};

export default CartDetail
