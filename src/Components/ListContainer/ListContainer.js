import { useState, React } from 'react'
import { mockData } from '../../questionsData'

function ListContainer() {
    let [listData, setListData] = useState([])
    
const setData = () => {
    setListData(mockData)
    console.log(listData)
}
  return (
    <div>{setData()}</div>
  )
}

export default ListContainer