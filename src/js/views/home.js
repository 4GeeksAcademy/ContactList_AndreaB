import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { ContactCard } from "../component/contactcard";
import { useNavigate } from "react-router-dom";
import { any } from "prop-types";

export const Home = () => {
  let navigate = useNavigate();

  return (
    <div className="container">
      <div className="row">
        <div className="">
          <div>
            <button
              type="button"
              className="btn btn-outline-success btn-sm float-end"
              onClick={() => navigate("/addContact")}
            >
              Add New Contact
            </button>
          </div>
        </div>
        {/* body */}
        <div>
          <ContactCard
            contact={{
              name: "Antoine",
              phoneNumber: "3052539684",
              location: "Miami",
              email: "an.gordonalvarez@gmail.com",
            }}
          ></ContactCard>
        </div>
      </div>
      <div
        className="modal"
        id="contactedit"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
