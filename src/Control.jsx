import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'

function Control() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Navbar/>}>
                        <Route index element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                    </Route>
                </Routes>
            </BrowserRouter>


        </>
    )
}

export default Control