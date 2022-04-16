import Card from './Component/Card'

function Fields() {
  const row1 = ["Restaurants", "Shopping", "Nigthlife", "Active Life"]
  const row2 = ["Beaty and Spa's", "Automotive", "Home Services", "More Categories"]

  // "categories":[
  //   "restaurant",
  //   "organiccafe",
  //   "cafe",
  //   "bakery",
  //   "food",
  //   "organics"
  //   ],


    const cat = [
      "restaurant",
      "organic cafe",
      "cafe",
      "bakery",
      "food",
      "organics"
      ]
 
  return (
    <div style={{backgroundColor:"#ccd1d9"}}>
      <br />
    <div className="container" >
    <h2 className='display-5 m-3 text-center'>Browse Business by Category</h2>

      <div className='row'>
        {
          cat.map((title) => {
            return (
              <div className='col-md-3'>
                <Card cat={title} />
              </div>
            )
          })
        }
      </div>

      {/* <div className='row'>
        {
          row2.map((title) => {
            return (
              <div className='col-md-3'>
                <Card title={title} />
              </div>
            )
          })
        }
      </div> */}
    </div>
    <br />
    <br />
    </div>
  );
}

export default Fields;