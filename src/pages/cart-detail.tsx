// import React from 'react'
// import { ChangeEvent, FormEvent, useEffect, useState } from "react";
// import { FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
// import AdminSidebar from "../../../components/admin/AdminSidebar";
// import { Skeleton } from "../../../components/loader";
import {
  useDeleteProductMutation,
  useProductDetailsQuery,
  useUpdateProductMutation,
} from "../redux/api/productAPI";
import { RootState, server } from "../redux/store";
// import { responseToast } from "../../../utils/features";

const CartDetail = () => {
    const { user } = useSelector((state: RootState) => state.userReducer);

  const params = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useProductDetailsQuery(params.id!);

  const { price, photo, name, stock, category ,des1,des2} = data?.product || {
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
        <img src={`${server}/${photo}`} />,
      
    </div>
  )
}

export default CartDetail
