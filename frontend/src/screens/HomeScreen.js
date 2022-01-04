import React from 'react';
import { Row, Col } from 'react-bootstrap';
import categories from '../data/categories';
import Category from '../components/Category';
import Background from '../components/Background';

const HomeScreen = () => {
  return (
    <>
      <Background />
      <h1 className='home-title'>Top Categories</h1>
      <Row>
        {categories.map((cat) => (
          <Col key={cat._id} sm={12} md={6} lg={4} xl={4}>
            <Category cat={cat} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
