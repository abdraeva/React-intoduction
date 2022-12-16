import React from "react"
import Header from ""

function Header({name, logotype, greet}){
  return (
    <React.Fragment>
      <h2>{logotype}</h2>
      <h3>{name}</h3>
      <h3>{greet}</h3>

    </React.Fragment>
  )
}

export default Header;