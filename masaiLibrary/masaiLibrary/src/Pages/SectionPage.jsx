import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
export default function SectionPage() {
  const { section } = useParams();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books?section=${section}`)
      .then((res) => {
        setBooks(res.data);
      })
  }, [section]);

  return (
    <div>

      <div className="sectionContainer">
        {/* Map the below the div against your books data */}
        {books?.map((element) => {
          return (
            <Link to={`/section/${element.section}`}>
              <div className="bookCard" key={element.id}>
                <h5 className="title" >{element.title}</h5>
                <div className="price" >{element.price}</div>
                <div className="author">{element.author}</div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
