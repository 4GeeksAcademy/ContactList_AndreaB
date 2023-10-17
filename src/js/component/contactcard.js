import React from "react";
import helloKitty from "../../img/HelloKitty.webp";
import "../../styles/app.css";
import { useNavigate } from "react-router-dom";
export function ContactCard(props) {
  console.log(props.contact.name);
  const contact = props.contact;
  let navigate = useNavigate();

  return (
    <div className="card">
      <div className="row">
        <div className="col-3 contactImage">
          <img
            src={helloKitty}
            className="rounded-circle"
            style={{ height: 40 }}
            alt="..."
          ></img>
        </div>
        <div className="col-6">
          <ul>
            <h6>{contact.name}</h6>
          </ul>
          <ul>
            <i className="fas fa-map-marker-alt"></i>
            <span>{props.contact.location}</span>
          </ul>
          <ul>
            <i className="fas fa-phone"></i>
            {props.contact.phone}
          </ul>
          <ul>
            <i className="fas fa-envelope"></i>
            {props.contact.email}
          </ul>
        </div>
        <div className="col-3">
          <button
            className="btn"
            onClick={() => {
              navigate("/editContact", {
                state: contact,
              });
            }}
          >
            <i className="fas fa-pencil-alt"></i>
          </button>

          <button className="btn">
            <i
              className="fas fa-trash-alt"
              data-bs-toggle="modal"
              data-bs-target="#delete-dialogue"
            ></i>
          </button>

          <div id="delete-dialogue" className="modal" tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Are You Sure?</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <p>This will be gone FOR-EV-ER!!</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Just kidding, Cancel
                  </button>
                  <button type="button" className="btn btn-primary">
                    Bye Forever.
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
