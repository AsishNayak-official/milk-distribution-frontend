import React, { useEffect, useState } from "react";
import NameCard from "./NameCard";
import { getAllUsersDetails } from "../api/userDetailsApi";

const CardLayout = () => {
  const [userDetails, setUserDetails]= useState([])
  const [shopId, setShopId]= useState("")
  useEffect(() => {
    getAllUsersDetails()
      .then((res) => {
        setUserDetails(res?.data?.data??[])
        setShopId(res?.data?.shop_id??'')
      })
      .catch((err) => {});
  }, []);
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-5">
      {userDetails?.map((userInfo,index)=>(
        <NameCard index={index} key={userInfo?.id} userInfo={userInfo} shopId={shopId}/>
      ))}
    </div>
  );
};

export default CardLayout;
