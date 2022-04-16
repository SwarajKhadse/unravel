import React,{useState,useEffect} from "react";
import Rate from "./Rate";
import axios from 'axios'
export default function AboutReview() {
  const [reviewData, setReviewData] = useState([]);
  const getReviewsData = async () => {
    const reqUrl = `Unravelweb-env.eba-sbqnztii.us-east-1.elasticbeanstalk.com/review/business/{business_id}`;

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

  return (
    <div className="container p-3 " style={{ marginTop: "100px" }}>
      
      <br />
      <div className="review-card row">
        {
      reviewData.map((data) => {
            return (
              <div className='col-md-12'>
                <Rate reviewData={data}/>
              </div>
            )
          })
}
      </div>
       
      
      <br />
      <br />
      <br />
    </div>
  );
}
