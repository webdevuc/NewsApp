import React, { useEffect } from 'react'
import Sidebar from './Components/Sidebar'
import { useDispatch } from 'react-redux';
import {getHeadLines} from './actions/headLineAction'
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHeadLines());
  }, []);
  return (
    <div>
      <Sidebar/>
    </div>
  )
}

export default App