import React, {useState} from 'react'
import axios from 'axios'
import './App.css';

function App() {
    const [image,setImage] = useState([])
  const fetchImage =()=>{
      axios.get("https://api.unsplash.com/search/photos?page=1&query=office&client_id=C41SwUcReaAHsvw6gUmPrciduIdXhSFC9UhjQrm3TiU")
      .then((response)=>{
        // console.log(response);

        setImage(response.data.results)
      })
    }
  return (
    <>
    
    <button className='btn btn-primary' onClick={fetchImage}>Fetch Image</button>
    <div  className="container">
      <div className="row">

        {

          image.map((value)  => {
              
            return(
            <div className="col-3">
            <div class="card" style={{width: "18rem"
          }}>
           <img src={value.urls.small} class="card-img-top" alt="image"/>
      
            </div>
            </div>
            );


          })
        }
        


      </div>


    </div>

    </>
      
    
  );
}

export default App;
