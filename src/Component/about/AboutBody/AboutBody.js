import React ,{useState,useEffect} from 'react'
import Reviews from '../../../Reviews/Reviews';
import './AboutBody.css'
import AboutReview from './AboutReviews/AboutReview';
import AboutNavbar from './../AboutNavbar/AboutNavbar'
import Mainnav  from '../../Mainnav';
import axios from 'axios'
function AboutBody() {
    const [aboutData,setAboutData] = useState([])
   
    const getAboutData = async () => {
      const reqUrl = `http://Unravelweb-env.eba-sbqnztii.us-east-1.elasticbeanstalk.com/onlinebusiness/616b2d4e7e382a3d90882beb`;
      await axios
        .get(reqUrl)
        .then((res) => {
          if (res.data.isSuccess == true) {
            console.log(res);
            console.log(res.data, "res.data.buisness");
            console.log(res.data.data, "res.data.data");
            setAboutData(res.data.data);
          
           console.log(aboutData)
            // alert("User Registered successFully")
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
      getAboutData();
      
    }, [])
  return (
    <>
    <Mainnav/>
     <AboutNavbar/>
    <div className='container'>
           <div className='row'>
               
           </div>

        <div className='row'>
            {/* contain two box and Amenities & More */}
             <div className='col-md-8 '>
                 <div>
                     <h3 className='fw-bold main-text'>Locations & Hours</h3>
                     {/* heading is loc  */}
                     <div className='card-main'>
                     {/* <div className='card-loc '></div>
                     <div className='card-loc'></div> */}
                     </div>
                  </div>
                  {/* <hr /> */}
                  {/* <div>
                      <h3 className='fw-bold mt-1'>Amenities & More</h3>
                      <div className='row'>
                          <div className='col-5'>
                             <ul className='list-1'>
                                 <li >
                                 <span>Offer Delivery</span>
                                 </li>
                                 <li>
                                <span> Vaccination proof required</span>
                                 </li>
                                 <li>
                                <span> Masks required</span>
                                 </li>
                                 <li>
                                <span> Outdoor seating</span>
                                 </li>
                                 <li>
                                <span>Awesome for working </span>
                                 </li>


                             </ul>
                          </div>
                          <div className='col-5'>
                             <ul className='list-1'>
                                 <li>
                                
                                     <span> offers Takeout</span>
                                 </li>
                                 <li>
                                     <span>Staff vaccinated with covid-19 vaccine</span>
                                 </li>
                                 <li>
                                     <span>All staff wears mask</span>
                                 </li>
                                 <li>
                                     <span>Less Noise Area</span>
                                 </li>
                                 <li>
                                     <span>Parking facility available</span>
                                 </li>

                             </ul>

                          </div>
                                  <hr />
                      </div> 
                 </div>   */}  

             </div>
             <div className='col-4 map'>
                <div>
                    <div className='site-add'>
                    <a href="https://www.business.com" className='fw-bold'>https://www.business.com</a>
                    </div>
                    <hr />
                     <p className='fw-bold'>(0674-890 -333)</p>
                     <hr />
                     <p className='fw-bold'>Address</p>

                       <p className='fw-bold'>52 Avenue street, 15th floor,
office tower, Bangalore</p>
                     {/* <iframe className='main-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1785100243173!2d55.27218771450294!3d25.197201837884734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sin!4v1649162253596!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                </div>
             </div>
        </div>
        <h2 className="text-center Rev-text">Reviews</h2>
        <AboutReview />

    </div>
    

        
        

    {/* text part */}
    {/* <div className='container text-part'>
           <div className='row mt-4'>
                 <div className='col-3'>
                    <h5 className='fw-bold'>Best of New Delhi</h5>
                    <p>Things to do in New Delhi lorem ipsum text to fill</p>
                 </div>
                 <div className='col-3 '>
                  <h5 className='fw-bold'>Other Businesse Nearby</h5>
                  <p>Find more shops near this shop lorem ipsum text to fill</p>
                 </div>
                 <div className='col-3 '>
                     <h5 className='fw-bold'>Near Me</h5>
                     <p>Coffee shops Near Me Coffee shops Near Me</p>
                 </div>
                 
           </div>
           
           </div>

        <div className='container text-part'>
            <div className='row'>
                  <div className='col-8'>
                  <hr />
                     <h5 className='fw-bold'>FAQ’s</h5>
                     <p className='fw-bold'>lorem ipsum text to fill, lorem ipsum text to fill, lorem ipsum text to fill ?</p>
                     <p>Answer - lorem ipsum text to fill, lorem ipsum</p>
                     <br />
                     <p className='fw-bold'>lorem ipsum text to fill, lorem ipsum text to fill, lorem ipsum text to fill ?</p>
                    <p>Answer - lorem ipsum text to fill, lorem ipsum</p>
                    <br />
                    <p className='fw-bold'>lorem ipsum text to fill, lorem ipsum text to fill, lorem ipsum text to fill ?</p>
                    <p>Answer - lorem ipsum text to fill, lorem ipsum text to fill, lor</p>
                    <br />
                    <p className='fw-bold'>lorem ipsum text to fill, lorem ipsum text to fill, lorem ipsum text to fill ?</p>
                    <p>Answer - lorem ipsum text to fill, lorem ipsum text to fill, lo</p>
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
            </div>

        </div> */}
        
    </>
  )
}

export default AboutBody