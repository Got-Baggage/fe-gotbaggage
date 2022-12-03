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