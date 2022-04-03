import React from 'react'
import ReviewCard from './ReviewCard'

export default function Reviews() {
    const firstRow = ['Clothing store ADC' , 'Vegetable store ADC' , 'Coffee store ADC']
    const secondRow = ['FastFood store ADC' , 'Cloth store ADC' , 'Food store ADC']
      return (
        <div className='container p-3 ' style={{marginTop :"100px"}}>
          <h2 className='text-center  '>Latest Reviews</h2>
          <h4 className='text-center  '>Reviews that matters !</h4>      
            <div className='row'>
            {
              firstRow.map( (title) => {
                return(
                    <div className='col-md-4'>
                      <ReviewCard />
                    </div>                                    
                )            
              })
            }
            </div>      
        </div> 
    )
}