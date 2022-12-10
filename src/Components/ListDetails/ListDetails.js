import { useState } from 'react'
// import { mockData } from '../../questionsData'
import Nav from "../Nav/Nav";
import { GET_SINGLE_TRIP, DELETE_ITEM } from "../../queries";
import { useQuery, useMutation } from "@apollo/client";

function ListDetails({ tripId }) {
  const [isVisible, setIsVisible] = useState(false)
  let newTripId = parseInt(tripId);
  console.log(newTripId);
  let { loading, error, data, refetch } = useQuery(GET_SINGLE_TRIP, {
    variables: {
      tripId: newTripId,
    },
  });

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
  // console.log("trip",tripId)
  //    let {
  //      data, // error, loading
  //    } = ItemsByTrip({
  //       variables: {
  //         tripId: tripId,
  //       }
  //       })

  //      console.log(data);

  //will need to write useEffect hook to request this specific list from API and render it. In hook, set
  //the state. Have a conditional render that says if state is empty (i.e., bad ID in url OR nothing returned from
  //API call), either render an error msg or useHistory hook to send user to ErrorPage

  // const setData = () => {
  //     setListData([...essentialData, mockData])
  //     console.log(listData)
  // }
  // const setData = setEssentialData(data)

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
        <label key={item.id}>
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

  const returnedCategories = () => {
    console.log(data);
    if (!data) {
      return <p>no data</p>;
    }
    const essentials = data.itemsByTrip.filter(
      (items) => items.category !== "essentials"
    );
    return essentials.map((item) => {
      return (
        <label key={item.id}>
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
        <button
          className="edit-button"
          onClick={toggleEdit}          
        >
          Edit
        </button>
        <button className="add-button">Add Item</button>
      </div>
      <div className="listed-items">
        <h1>Essential Items:</h1>
        <div className="essential-items">
          <div>{returnedEssentials()}</div>
        </div>
        <h1>Activity Items:</h1>
        <div>{returnedCategories()}</div>
      </div>
    </section>
  );
}

export default ListDetails;
