import React, { useState, useEffect } from 'react'
import ReviewCard from './ReviewCard'
import axios from 'axios';

export default function Reviews() {

  const [reviewData, setReviewData] = useState([]);
  const getReviewsData = async () => {
    const reqUrl = `http://Unravelweb-env.eba-sbqnztii.us-east-1.elasticbeanstalk.com/onlinebusiness/best-reviews`;

    await axios
      .get(reqUrl)
      .then((res) => {
        if (res.data.isSuccess == true) {
          console.log(res.data, "res.data.reviews");
          // alert("User Registered successFully")
          setReviewData(res.data.data);
        } else {
          alert(res.data.message);
        }
      })
      .then((err) => {
        // toast.error(err)
        console.log(err);
      });
  };

  useEffect(() => {
    getReviewsData();
  }, [])

  const firstRow = ['Clothing store ADC', 'Vegetable store ADC', 'Coffee store ADC']
  const secondRow = ['FastFood store ADC', 'Cloth store ADC', 'Food store ADC']
  return (
    <div className='container p-3 ' style={{ marginTop: "100px" }}>
      <h2 className='text-center  '>Latest Reviews</h2>
      <br />
      <h4 className='text-center  '>Reviews that matters !</h4>
      <br />
      <div className='row'>
        {
          // firstRow.map((title) => {
          //   return (
          //     <div className='col-md-4'>
          //       <ReviewCard />
          //     </div>
          //   )
          // })

          reviewData.map((data) => {
            return (
              <div className='col-md-4'>
                <ReviewCard  reviewData={data}/>
              </div>
            )
          })
        }
      </div>
      <br /><br /><br />
    </div>
  )
}