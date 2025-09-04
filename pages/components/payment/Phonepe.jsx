"use client";
import axios from "axios";
import { useFormik } from "formik";
import React from "react";

const Phonepe = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      amount: "",
    },
    onSubmit: async (values) => {
     await axios.post("/api/add", values)
        .then(response => {
         window.location.href = res.data.paymentUrl;
        }).catch(error => {
          console.error("There was an error from frontend!", error);
        });
    }
  });
  return (
    <div>
      <h1>PhonePe</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder="Enter name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            className="form-control"
            id="phone"
             name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            placeholder="Enter phone number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            className="form-control"
            id="amount"
            name="amount"
            value={formik.values.amount}
            onChange={formik.handleChange}
            placeholder="Enter amount"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Pay with PhonePe
        </button>
      </form>
    </div>
  );
};

export default Phonepe;
