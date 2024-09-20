import React from 'react'
import { Link } from 'react-router-dom'

function GetpostError() {
  return (
    <div>
       <h1>You have to login to read post</h1>
        <Link to={"/login"}>
         login
        </Link>
    </div>
  )
}

export default GetpostError
