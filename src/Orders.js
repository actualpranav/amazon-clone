//added import
//import React from "react";
import Order from "./Order";
import "./Orders.css";

import { db } from "./firebase";
import React, { useState, useEffect } from "react";
import { useStateValue } from "./StateProvider";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  //new
  // const [state, setState] = useState({});
  // const myFunction = () => {
  //   setState({
  //     name: "Jhon",
  //     surname: "Doe",
  //   });
  // };

  // useEffect(() => {
  //   myFunction();
  //   return () => {
  //     setState({}); // This worked for me
  //   };
  // }, []);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your orders</h1>
      <div className="order__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
