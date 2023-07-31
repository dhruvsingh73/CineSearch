import React , {useEffect, useState} from "react";
import { Container, Navbar , Nav , Form, Button , FormControl} from "react-bootstrap";



function Header(props) {
    
    return(
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/">CineSearch</Navbar.Brand>
                <Navbar.Brand href="/">Trending</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
                <Navbar.Collapse id="navbarScrolls">
                    <Nav className="me-auto my-2 my-lg-3" style={{maxHeight:'100px'} }></Nav>
                    <Form className="d-flex" onSubmit={(e)=>{props.searchMovie(e)}}>
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