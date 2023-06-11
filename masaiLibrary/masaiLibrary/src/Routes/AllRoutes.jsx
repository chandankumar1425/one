import { Routes, Route } from 'react-router-dom';
import Navbar from '../Pages/Navbar';
import Home from '../Pages/Home';
import SectionPage from '../Pages/SectionPage';
import BookDetailsPage from '../Pages/BookDetailsPage';
import InvalidPage from '../Pages/InvalidPage';
export default function AllRoutes() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/section/:section' element={<SectionPage/>}></Route>
                <Route path='/bookdetailspage/:id' element={<BookDetailsPage/>}></Route>
                <Route path="/*" element={<InvalidPage/>}></Route>
            </Routes>
        </div>
    )
}
