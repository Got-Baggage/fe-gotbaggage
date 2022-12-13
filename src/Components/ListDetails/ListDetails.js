import { useState } from 'react'
import Nav from "../Nav/Nav";
import { GET_SINGLE_TRIP, DELETE_ITEM, ITEM_CREATE } from "../../queries";
import { useQuery, useMutation } from "@apollo/client";


function ListDetails({ tripId }) {
  const [isVisible, setIsVisible] = useState(false)
  const [addItemIsVisible, setAddItemIsVisible] = useState(false)
  const [name, setName] = useState('') 


  let newTripId = parseInt(tripId);


  let { data, refetch } = useQuery(GET_SINGLE_TRIP, {
    variables: {
      tripId: newTripId,
    },
  });

  const [addItem] = useMutation(ITEM_CREATE, {
    onCompleted: refetch
  })

  const addSingleItem = () => {
    addItem({
      variables: {
        tripId: newTripId,
        itemName: name
      },
      onCompleted: refetch,
    })
  }

  const [deleteItem] = useMutation(DELETE_ITEM, {
    onCompleted: refetch,
  });

  const handleItemDelete = (itemId) => {
    let newItemId = parseInt(itemId);
    console.log("new", newItemId);
    deleteItem({
      variables: {
        tripId: newTripId,
        itemId: newItemId,
      }, onCompleted:refetch,
    });
  };

  const toggleEdit = (e) => {
    console.log('click')
    e.preventDefault()
    setIsVisible(current => !current)
  }

  const addItemToggle = (e) => {
    e.preventDefault()
    setAddItemIsVisible(current => !current)
  }

  const toggleEditButtonText = () => {
    if (isVisible) {
      return "Done"
    } else {
      return "Edit Item"
    }
  }

  const toggleAddButtonText = () => {
    if (addItemIsVisible) {
      return "Done"
    } else {
      return "Add Item"
    }
  }

  const returnedEssentials = () => {
    console.log(data);
    if (!data) {
      return <p>no data</p>;
    }
    const essentials = data.itemsByTrip.filter(
      (items) => items.category === "essentials"
    );
    return essentials.map((item) => {
      return (
        <label className="list-label" key={item.id}>
          <input type="checkbox" className="list-checkbox" />
          <ul key={item.id}>{item.name}</ul>
          <button
            className="delete-item-button"
            style={{visibility: isVisible ? 'visible' : 'hidden'}}
            onClick={(e) => {
              handleItemDelete(item.id);
            }}
          >
            🗑️
          </button>
        </label>
      );
    });
  };
    const returnedCreatedItems = () => {
      console.log(data);
      if (!data) {
        return <p>no data</p>;
      } 
      const essentials = data.itemsByTrip.filter(
        (items) => items.category === null
      );
      return essentials.map((item) => {
        return (
          <label className="list-label" key={item.id}>
            <input type="checkbox" className="list-checkbox" />
            <ul key={item.id}>{item.name}</ul>
            <button
              className="delete-item-button"
              style={{ visibility: isVisible ? "visible" : "hidden" }}
              onClick={(e) => {
                handleItemDelete(item.id);
              }}
            >
              🗑️
            </button>
          </label>
        );
      });
    };

  const returnedCategories = () => {
    console.log(data);
    if (!data) {
      return <p>no data</p>;
    }
    const essentials = data.itemsByTrip.filter(
      (items) => items.category !== "essentials" && items.category !== null
    );
    return essentials.map((item) => {
      return (
        <label className="list-label" key={item.id}>
          <input type="checkbox" className="list-checkbox" />
          <ul key={item.id}>{item.name}</ul>
          <button
            className="delete-item-button"
            style={{ visibility: isVisible ? "visible" : "hidden" }}
            onClick={(e) => {
              handleItemDelete(item.id);
            }}
          >
            🗑️
          </button>
        </label>
      );
    });
  };



  return (
    <section className="list-details-view">
      <Nav />
      <div className="list-buttons">
        <button className="edit-button" onClick={toggleEdit}>
          {toggleEditButtonText()}
        </button>
        <button className="add-button" onClick={addItemToggle}>
          {toggleAddButtonText()}
        </button>
      </div>
      <div
        className="add-item-form"
        style={{ visibility: addItemIsVisible ? "visible" : "hidden" }}
      >
        <input
          type="text"
          className="add-item-input"
          placeholder="Add an item to include"
          onChange={(e) => setName(e.target.value)}
        />
        <button className="add-item-button" onClick={addSingleItem}>
          <span>➕</span>
        </button>
      </div>
      <div className="listed-items">
        <h1 className='essential-items-title'>Essential Items:</h1>
        <div className="essential-items">
          <div>{returnedEssentials()}</div>
        </div>
        <h1>Activity Items:</h1>
        <div>{returnedCategories()}</div>
        <h1 className='added-items-title'>Your Added Items:</h1>
        <div>{returnedCreatedItems()}</div>
      </div>
    </section>
  );
}

export default ListDetails;