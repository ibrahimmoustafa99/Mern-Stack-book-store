import React ,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Route, Routes } from 'react-router-dom';
import Cart from './Cart';
import HomePage from './HomePage';
import TopSeller from './TopSeller';
import BookPage from './BookPage';
import Dashboard from './Dashboard';
import {useSelector, useDispatch } from 'react-redux'
import { setInput } from './Redux/DetailsSlice';



export default function Header() {
    var sreachInput

    const input=useSelector(state => state.detailsSlice.input);
    const dispatch=useDispatch()

    const handelOnClick = (input,e)=>{
        e.preventDefault()
        dispatch(
            setInput(input)
        )
    }
    
    return (
            <>
                <Navbar expand="lg" className="bg-body-tertiary ">
                <Container fluid >
                    <Navbar.Brand className='ms-3 fs-3' href="/dashboard">BOOKLY</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse >
                    <Nav
                        className="m-auto fs-4 my-2 my-lg-0"
                        style={{ maxHeight: '200px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        
                        <Nav.Link href="/Cart">Cart</Nav.Link>
                    </Nav>
                    <Form className="me-3 d-flex" onSubmit={(e)=>{
                        handelOnClick(sreachInput,e)
                    }}>
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className="fs-5 me-4 pe-5 ps-2"
                        aria-label="Search"
                        
                        onChange={(e)=>{
                            sreachInput=e.target.value
                            console.log(sreachInput)
                        }}
                        />
                        <Button variant="outline-success" type='sumbit'>Search</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
                <Routes>
                    <Route path='' element={<HomePage />} />
                    <Route path='/TopSeller' element={<TopSeller />} />
                    <Route path='/Cart' element={<Cart />} />
                    <Route path='/book' element={<BookPage />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                </Routes>

            </>
        );
}
