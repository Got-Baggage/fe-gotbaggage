import { useState, useEffect } from 'react'
import { mockData } from '../../questionsData'
import Nav from '../Nav/Nav'

function ListDetails({ tripId }) {
    let [essentialData, setEssentialData] = useState(mockData.data.essentialItems)
    //update the useState to empty array once we receive data? 
    let [categoryData, setCategoryData] = useState(mockData.data.itemsByCategory)
    
//will need to write useEffect hook to request this specific list from API and render it. In hook, set 
//the state. Have a conditional render that says if state is empty (i.e., bad ID in url OR nothing returned from
//API call), either render an error msg or useHistory hook to send user to ErrorPage

// const setData = () => {
//     setListData([...essentialData, mockData])
//     console.log(listData)
// }

const returnedEssentials = () => {
    return essentialData.map(item => {
    return item.name
})
}
const returnedCategories = () => {
    return categoryData.map(item => {
        return item.name
    })
}

  return (
    <section className="list-details-view">
        <Nav />
        <div>
            <h2>{returnedEssentials()}</h2>
            <h2>{returnedCategories()}</h2>
        </div>
    </section>
  )
}

export default ListDetails