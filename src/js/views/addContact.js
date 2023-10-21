import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const AddContact = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  let navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  let onSubmit = () => {
    console.log(fullName);
    console.log(email);
    console.log(phone);
    console.log(address);
    let newContact = {
      full_name: fullName,
      email: email,
      agenda_slug: store.AGENDA_SLUG,
      address: address,
      phone: phone,
    };
    actions.createNewContact(newContact).then((e) => {
      navigate("/");
    });
  };
  return (
    <div className="jumbotron">
      <h1 className="display-4" style={{ textAlign: "center" }}>
        Add New Contact
      </h1>
      <div className="mx-auto" style={{ width: "700px" }}>
        <form>
          <div className="form-group pb-2">
            <label className="float-left">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullNameInput"
              placeholder="Full Name"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            ></input>
          </div>
          <div className="form-group pb-2">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
          </div>
          <div className="form-group pb-2">
            <label>Phone</label>
            <input
              type="email"
              className="form-control"
              id="telephoneInput"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            ></input>
          </div>
          <div className="form-group pb-2">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              id="addressInput"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            ></input>
          </div>
          <div className="d-grid gap-2 pb-2">
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={onSubmit}
            >
              Save
            </button>
          </div>
          <Link to="/">
            <span href="#" role="button">
              Back home
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
};

AddContact.propTypes = {
  match: PropTypes.object,
};
