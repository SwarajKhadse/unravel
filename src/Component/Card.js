import React from 'react'
import './card.css'
export default function Card(props) {
  return (
    <>
      <div className="card m-3 field-card-main">
        <img src="./../assets/background.jpg" className="img-card card-img-top img-fluid" alt="..." />
          <div className="field-card-body">
            <h5 className="card-title">{props.title}</h5>
          </div>
      </div>
    </>
  )
}