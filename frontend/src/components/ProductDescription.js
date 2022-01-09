import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap';
import Rating from '../components/Rating';

let pathnameId = window.location.pathname.split('/')[2];

const ProductDescription = ({ item }) => {
  return (
    <>
      {item._id === pathnameId && (
        <>
          <Link className='btn btn-dark my-3' to='/category'>
            Go Back
          </Link>
          <Row>
            <Col md={6}>
              <Image src={item.image} alt={item.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3>{item.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={item.rating}
                    text={`${item.numReviews} reviews`}
                  ></Rating>
                </ListGroup.Item>
                <ListGroup.Item>Price: ${item.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: ${item.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${item.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {item.countInStock > 0 ? 'In Stock' : 'Out of stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className='btn-block'
                    type='button'
                    disabled={item.countInStock === 0}
                  >
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductDescription;
