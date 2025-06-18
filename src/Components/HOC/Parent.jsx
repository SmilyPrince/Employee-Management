import React, { useState } from 'react'
import CallApi from '../CallApi'
// import ApiContext from '../ApiContext'
// import {useContext} from 'react'

const Parent = (Wrapped) => {
    
    // const {url} = useContext(ApiContext)
  // const url = 'http://localhost:3000/Employee_Data'
  // converted to mockapi url
const url = 'https://685261e00594059b23cd416f.mockapi.io/Employee_Data'
    const {data, fetchData} = CallApi()

    const [employeeCount, setEmployeeCount] = useState(0)

    const Child = () => {
        const getCount = () => {
            fetchData(url)
            setEmployeeCount(data.length)
        }
        getCount()
        return (
            <Wrapped getCount={employeeCount}/>
        )
    }

  return (
    Child
  )
}

export default Parent
