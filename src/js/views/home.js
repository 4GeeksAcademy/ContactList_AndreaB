import React, { useEffect, useState, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { ContactCard } from "../component/contactcard";
import { useNavigate } from "react-router-dom";
import { any } from "prop-types";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [list, setList] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  let navigate = useNavigate();

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    let mount = true;
    console.log(JSON.stringify(store));
    console.log("useEffect");
    actions
      .getAllContacts()
      .then((data) => {
        console.log(JSON.stringify(store));
        return store.contactList;
      })
      .then((data) => {
        setList(data);
      });
  }, [openModal]);

  return (
    <div className="container">
      <div className="row">
        <div className="mb-2">
          <div>
            <button
              type="button"
              className="btn btn-success btn-sm float-end"
              onClick={() => navigate("/addContact")}
            >
              Add New Contact
            </button>
          </div>
        </div>
        {/* body */}
        <div>
          {list.map((item, index) => (
            <ContactCard
              contact={item}
              key={item.id}
              toggleMethod={toggleModal}
            ></ContactCard>
          ))}
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
