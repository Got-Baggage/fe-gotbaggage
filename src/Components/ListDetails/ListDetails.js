// import { useState } from 'react'
// import { mockData } from '../../questionsData'
import Nav from '../Nav/Nav'
import { GetEssentials } from '../../queries'

function ListDetails({ tripId }) {
    // let [essentialData, setEssentialData] = useState(mockData.data.essentialItems)
    //update the useState to empty array once we receive data? 
    // let [categoryData, setCategoryData] = useState(mockData.data.itemsByCategory)
    let { data, 
      // error, loading 
    } = GetEssentials()
    // useEffect(() => { setEssentialData(data.essentialItems) })


//will need to write useEffect hook to request this specific list from API and render it. In hook, set 
//the state. Have a conditional render that says if state is empty (i.e., bad ID in url OR nothing returned from
//API call), either render an error msg or useHistory hook to send user to ErrorPage

// const setData = () => {
//     setListData([...essentialData, mockData])
//     console.log(listData)
// }
// const setData = setEssentialData(data)

  
const returnedEssentials = () => {
    return data.essentialItems.map(item => {
    return (
      <label>
        <input type="checkbox" className="list-checkbox" />
        <ul>{item.name}</ul>
      </label>
    );
})
}

const returnedCategories = () => {
    return data.itemsByCategory.map(item => {
        return (
          <div>
          <label>
            <input type="checkbox" className="list-checkbox" />
            <ul key={item.id}>{item.name}</ul>
          </label>
          </div>
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
          <div>{returnedEssentials()}</div>
        </div>
        <h1>Activity Items:</h1>
        <div>{returnedCategories()}</div>
      </div>
    </section>
  );
}

export default ListDetails