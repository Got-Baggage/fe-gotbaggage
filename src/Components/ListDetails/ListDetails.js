import { useState, React } from 'react'
import { mockData } from '../../questionsData'
import Nav from '../Nav/Nav'

function ListDetails({ userTrips }) {
    let [essentialData, setEssentialData] = useState(mockData.data.essentialItems)
    //update the useState to empty array once we receive data? 
    let [categoryData, setCategoryData] = useState(mockData.data.itemsByCategory)
    
// const setData = () => {
//     setListData([...essentialData, mockData])
//     console.log(listData)
// }

const returnedEssentials = () => {
    return essentialData.map(item => {
    return (
      <label>
        <input type="checkbox" className="list-checkbox" />
        <ul>{item.name}</ul>
      </label>
    );
})
}
const returnedCategories = () => {
    return categoryData.map(item => {
        return (
          <label>
            <input type="checkbox" className="list-checkbox" />
            <ul>{item.name}</ul>
          </label>
        );
    })
}

  return (
    <section className="list-details-view">
      <Nav />
      <div className="list-buttons">
        <button className="edit-button">Edit</button>
        <button className="add-button">Add Item</button>
      </div>
      <div className="listed-items">
        <h1>Essential Items:</h1>
        <div className="essential-items">
          <p>{returnedEssentials()}</p>
        </div>
        <h1>Activity Items:</h1>
        <p>{returnedCategories()}</p>
      </div>
    </section>
  );
}

export default ListDetails