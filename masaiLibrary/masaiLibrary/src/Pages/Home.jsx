import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function Home() {

  const [data, setData] = React.useState([]);


  React.useEffect(() => {
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`)
      .then((res => {
        setData(res.data);
      }))
  }, [])
  return (
    <div>

      <div className="mainContainer">
        {/* Map the below the div against your books data */}
        <div className="bookCard" >
          {data?.map((e) => {
            return (
              <div key={e.id}>
                <Link to={`/bookdetailspage/${e.id}`}>
                <h5 className="title" > Title: {e.title} </h5>
                <div className="price" > Price: {e.price}</div>
                <div className="author" > Author: {e.author}</div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}
