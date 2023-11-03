import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestCard({ item }) {
  return (
    <div>

      <Link to={`/view/${item.id}`} style={{ textDecoration: 'none' }}>
        <Card className='bg-light' style={{
          width: '18rem', border: '5px solid black',
          padding: '5px', fontFamily: 'Bellefair, serif'

        }}>
          <Card.Img variant="top" src={item.photograph} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              {item.address}
            </Card.Text>
            <Button style={{ backgroundColor: 'black' }} variant="dark">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Link>
    </div>
  )
}

export default RestCard