import React from 'react'
import { useContext } from 'react'
import {CaptainDataContext}  from "../context/CapatianContext"

const CapatainHome = () => {
    const {captain}=useContext(CaptainDataContext);
    console.log(captain);
  return (
    <div>CapatainHome</div>
  )
}

export default CapatainHome