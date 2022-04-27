import React,{useState ,useEffect} from 'react'
import axios from 'axios';
import './card.css';

export default function Card(props) {

  const [thumbUri, setThumbUri] = useState("./../assets/background.jpg");
  const getData = async () => {
    // alert("button CLicked")
    const reqUrl = `http://Unravelweb-env.eba-sbqnztii.us-east-1.elasticbeanstalk.com/onlinebusiness/business/${props.cat}`

    await axios.get(reqUrl).then((res) => {
      console.log(res.data , "buisnessData_01");
      if (res.data.isSuccess == true) {
        //setData here           
        setThumbUri(res.data.data[0].thumbnailUrl)
      }else{
        alert(res.data.message)
      }
    })
  }

  useEffect(() => {
    getData();
  }, [])
  
  return (
    <>
    <div className="row m-2 card-browse">
      <div className="card m-3 field-card-main ml-2 ">
        <img src={thumbUri} className="img-card card-img-top img-fluid" alt="..." />
          <div className="field-card-body">
            <h5 className="card-title">{props.cat}</h5>
          </div>
          {/* <button onClick={getData}>Get Business</button> */}
      </div>
      </div>
    </>
  )
}