
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import './Header.css';


function CollapsibleHeader() {
  return (
    <Navbar collapseOnSelect fixed  expand="lg" bg="info" variant="info">
      <Container className='d-flex'>
        <Navbar.Brand className='title'>School Web</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"  xs={12} bg="warning">
          {/* <Nav.Link as={Link} to={'/'}>Home</Nav.Link> */}
          <Nav.Link as={Link} to={'/'}>Topics</Nav.Link>
            <Nav.Link as={Link} to={'/statistics'}>Statistics</Nav.Link>
            <Nav.Link as={Link} to={'/blog'}>Blog</Nav.Link>
          </Nav>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleHeader;
