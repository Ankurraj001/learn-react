import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getData } from '../store/DisplaySlice'

const DisplayData = () => {
    const data = useSelector((state) => state.display.data)
  const dispatch = useDispatch()
  return (
    <div>
        <div>DisplayData</div>
        <div>{data}</div>
        <button onClick={()=> dispatch(getData('ankur'))}>DisplayData</button>
    </div>
  )
}

export default DisplayData