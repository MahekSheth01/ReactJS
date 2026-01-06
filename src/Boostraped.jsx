import React from 'react'
import { Button, Alert, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

const Boostraped = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">AdhyayAI</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <h1>React Bootstrap</h1>

      {/* Normal HTML button */}
      <button>Submit</button>

      {/* React-Bootstrap button */}
      <Button variant="danger" onClick={() => alert("Button Clicked!")}>
        Submit
      </Button>

      <Alert variant="danger">Hello</Alert>
    </div>
  )
}

export default Boostraped
