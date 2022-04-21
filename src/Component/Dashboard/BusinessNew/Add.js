import React from 'react'

function Add() {
  return (
    <>
     <label for="bussAdd1">Address 1</label>
              <input
                type="text"
                className="form-control"
                id="bussAdd1"
                onChange={(event) => {
                  setAdd1(event.target.value)
                }}
                placeholder="Enter your adress"
              />
    </>
  )
}

export default Add