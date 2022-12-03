import { useState, React } from 'react'
import { mockData } from '../../questionsData'

function ListDetails() {
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
  return (
    <div>
        <h1>Hello</h1>
        <h2>{returnedEssentials()}</h2>
    </div>
  )
}

export default ListDetails