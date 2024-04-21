import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Wow() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Home</Card.Title>
        <Card.Text>
          Homepage
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Wow;