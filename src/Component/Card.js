import React from 'react'
import './card.css'
export default function Card(props) {
  return (
    <>
    <div className="row m-2">
      <div className="card m-3 field-card-main ml-2 ">
        <img src="./../assets/background.jpg" className="img-card card-img-top img-fluid" alt="..." />
          <div className="field-card-body">
            <h5 className="card-title">{props.title}</h5>
          </div>
      </div>
      </div>
    </>
  )
}