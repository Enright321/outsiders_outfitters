import React from 'react';
import { Card } from 'react-bootstrap';

const Category = ({ cat }) => {
  return (
    <a href={`/${cat.name}`}>
      <Card className='m-3 p-3 rounded'>
        <Card.Img src={cat.image} variant='top' />
        <Card.Body>
          <Card.Title as='div' className='text-center card-title'>
            <strong>{cat.name}</strong>
          </Card.Title>
        </Card.Body>
      </Card>
    </a>
  );
};

export default Category;
