import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [fullName, setFullName] = useState("");
  return (
    <div className="jumbotron">
      <h1 className="display-4">This will show the demo element: AddContact</h1>

      <hr className="my-4" />
      <div>
        <form style={{ textAlign: "center", width: "700px" }}>
          <div class="form-group">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullNameInput"
              placeholder="Full Name"
            ></input>
          </div>
          <div class="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              placeholder="Email"
            ></input>
          </div>
          <div class="form-group">
            <label>Phone</label>
            <input
              type="email"
              className="form-control"
              id="telephoneInput"
              placeholder="Phone"
            ></input>
          </div>
          <div class="form-group">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              id="addressInput"
              placeholder="Address"
            ></input>
          </div>
        </form>
      </div>

      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};

AddContact.propTypes = {
  match: PropTypes.object,
};
