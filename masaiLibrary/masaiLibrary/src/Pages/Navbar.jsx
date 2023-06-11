import React from 'react'
import {Link} from 'react-router-dom';
export default function Navbar() {

    return (
        <div className="navbar" style={{display:'flex',justifyContent:'space-around'}}>
            <Link to='/section/mythology'><h4 className="mythology">Mythology</h4></Link>
            <Link to='/section/mystery'><h4 className="mystery">Mystery</h4></Link>
            <Link to='/section/history'><h4 className="history">History</h4></Link>
            <Link to='/section/technology'><h4 className="technology">Technology</h4></Link>
        </div>
    )
}
