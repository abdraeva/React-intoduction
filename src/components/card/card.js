import React from "react";

function Card (base) {
  return(
    <React.Fragment>
      <div className='card'>
        <h2>{base.title}</h2>
        <p>{base.describe}</p>
      </div>

    </React.Fragment>
  )
}

export default Card