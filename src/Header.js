import React , {useEffect, useState} from "react";
import { Container, Navbar , Nav , Form, Button , FormControl} from "react-bootstrap";
import { Link , useNavigate} from "react-router-dom";


function Header(props) {
    const history = useNavigate();
    const searchMovie = (e) => {
        e.preventDefault();
        props.searchMovie(e); 
        history('/'); 
    };
    return(
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
                <Link to="/" className="navbar-brand">CineSearch</Link>
                <Link to="/Trending" className="navbar-brand">Trending</Link>
                <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
                <Navbar.Collapse id="navbarScrolls">
                    <Nav className="me-auto my-2 my-lg-3" style={{maxHeight:'100px'} }></Nav>
                    <Form className="d-flex" onSubmit={searchMovie}>
                        <FormControl 
                        type="search"
                        placeholder="Search Movie"
                        className="me-2"
                        aria-label="search"
                        name="query"
                        value={props.query} onChange={(e)=>{props.changeHandler(e)}}>
                        </FormControl>
                        <Button variant="secondary" type="submit">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
    </Navbar>
    );

};

export default Header;