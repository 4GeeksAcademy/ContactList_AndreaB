const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      AGENDA_SLUG: "andreaBobadilla",
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      contactList: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      getAllContacts: async () => {
        await fetch(
          "https://playground.4geeks.com/apis/fake/contact/agenda/andreaBobadilla",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((resp) => {
            console.log(resp.ok); // will be true if the response is successfull
            console.log(resp.status); // the status code = 200 or code = 400 etc.
            console.log(resp); // will try return the exact result as string
            return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
          })
          .then((data) => {
            //here is where your code should start after the fetch finishes
            console.log(data); //this will print on the console the exact object received from the server
            let store = getStore();
            store.contactList = data;
            console.log("store " + JSON.stringify(store));
            return data;
          })
          .catch((error) => {
            //error handling
            console.log(error);
          });
      },
      deleteContact: async (id) => {
        console.log("Deleting id" + id);
        await fetch("https://playground.4geeks.com/apis/fake/contact/" + id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => {
            console.log(resp.status); // the status code = 200 or code = 400 etc.
            return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
          })
          .then((data) => {
            console.log(data);
            return data;
          })
          .catch((error) => {
            //error handling
            console.log(error);
          });
      },
      createNewContact: async (newContact) => {
        await fetch("https://playground.4geeks.com/apis/fake/contact/", {
          method: "POST",
          body: JSON.stringify(newContact),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => {
            console.log(resp.ok); // will be true if the response is successfull
            console.log(resp.status); // the status code = 200 or code = 400 etc.
            console.log(resp); // will try return the exact result as string
            return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
          })
          .then((data) => {
            //here is where your code should start after the fetch finishes
            console.log(data); //this will print on the console the exact object received from the server
            getAllContacts();
            return data;
          })
          .catch((error) => {
            //error handling
            console.log(error);
          });
      },

      updateContact: async (updatedContact) => {
        await fetch(
          "https://playground.4geeks.com/apis/fake/contact/" +
            updatedContact.id,
          {
            method: "PUT",
            body: JSON.stringify(updatedContact),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((resp) => {
            console.log(resp.ok); // will be true if the response is successfull
            console.log(resp.status); // the status code = 200 or code = 400 etc.
            console.log(resp); // will try return the exact result as string
            return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
          })
          .then((data) => {
            //here is where your code should start after the fetch finishes
            console.log(data); //this will print on the console the exact object received from the server
            getAllContacts();
            return data;
          })
          .catch((error) => {
            //error handling
            console.log(error);
          });
      },
    },
  };
};

export default getState;
