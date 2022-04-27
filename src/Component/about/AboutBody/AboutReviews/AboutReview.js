import React,{useState,useEffect} from "react";
import Rate from "./Rate";
import axios from 'axios'
export default function AboutReview() {
  const [reviewData, setReviewData] = useState([]);
  const getReviewData = async () => {
    const reqUrl = `http://Unravelweb-env.eba-sbqnztii.us-east-1.elasticbeanstalk.com/review/business/616b2d4e7e382a3d90882bf6`;

    await axios
      .get(reqUrl)
      .then((res) => {
        if (res.data.isSuccess == true) {
          console.log(res.data, "res.data");
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
    getReviewData();
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
