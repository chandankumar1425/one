import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
export default function BookDetailsPage() {
    const {id} = useParams();
    const [books,setBooks] = React.useState([]);
    // const {title,price,section,author,description,isbn} = props;

    React.useEffect(()=>{
        axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books/${id}`)
        .then((res)=>{
            setBooks(res.data);
        })
    },[id])

    return (
        <div>
            <div className="bookContainer" >
                <h5 className="title">{books.title}</h5>
                <div className="price">{books.price}</div>
                <div className="section">{books.section}</div>
                <div className="author">{books.author}</div>
                <div className="description">{books.description}</div>
                <div className="isbn">{books.isbn}</div>
            </div>
        </div>
    )
}
