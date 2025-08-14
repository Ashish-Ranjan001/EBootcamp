import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

function ContainerOutsideExample() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary mx-3 p-3"
      style={{ borderRadius: '15px' }} // Adds border radius to the Navbar
    >
      <Container fluid>
        <div className="d-flex justify-content-between align-items-center w-100">
          {/* Brand */}
          <Navbar.Brand href="#">IKnow | Evalueserve</Navbar.Brand>

          {/* Search Bar */}
          <Form className="d-flex justify-content-center flex-grow-1 mx-3">
            <Form.Control
              type="text"
              placeholder="Search"
              className="w-50 rounded" // Adds border radius to the search bar
            />
          </Form>

          {/* Sign-in Text */}
          <Navbar.Text>
            Sign in <a href="#login">Ashish Ranjan</a>
          </Navbar.Text>
        </div>
      </Container>
    </Navbar>
  );
}

export default ContainerOutsideExample;
