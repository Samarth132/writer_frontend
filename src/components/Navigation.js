import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Navigation = () => {
    return ( 
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/"><h4>Writer's Log</h4></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="/#home">Home</Nav.Link>
                    <Nav.Link href="/#features">Features</Nav.Link>
                    <Nav.Link href="/#signup">Signup</Nav.Link>
                    <NavDropdown bg="dark" variant="dark" title="Options" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                    <NavDropdown.Item href="/chapters">View Chapters</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/create">Write Chapter</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default Navigation;