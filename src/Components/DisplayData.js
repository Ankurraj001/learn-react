import React from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { getData } from '../store/DisplaySlice'

const baseURL = "http://localhost:3000";

const DisplayData = () => {
    const data = useSelector((state) => state.display.data)
  const dispatch = useDispatch()

  const onClickHandler = () => {
    axios.get(`${baseURL}`).then((response) => {
      dispatch(getData(response.data));
    }).catch(error => {
      console.log(error);
    });
  }
  return (
    <div>
        <div>{data}</div>
        <button onClick={onClickHandler}>DisplayData</button>
    </div>
  )
}

export default DisplayData