import React from 'react'
import Fields from '../Fields'
import Reviews from '../Reviews/Reviews'
import ShopCard from '../Shop/ShopCard'

function Body() {
  
const firstRow = ['Clothing store ADC' , 'Vegetable store ADC' , 'Coffee store ADC']
const secondRow = ['FastFood store ADC' , 'Cloth store ADC' , 'Food store ADC']
  return (
    <div className=' p-3 ' style={{marginTop :"150px"}}>
      <h2 className='text-center  '>Find the Best Businesses in Town</h2>
      <h4 className='text-center  '>Famous shops</h4>      
        <div className='row'>
        {
          firstRow.map( (title) => {
            return(
                <div className='col-md-4'>
                  <ShopCard title={title} />
                </div>                                    
            )            
          })
        }
        </div>

        <div className='row'>
        {
          secondRow.map( (title) => {
            return(
                <div className='col-md-4'>
                  <ShopCard title={title} />
                </div>                                    
            )            
          })
        }
        </div>
      
        <Reviews />
        <Fields />
    </div>
  )
}

export default Body