import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Container } from 'react-bootstrap';
import Category from '../components/Category';
import Gallery from '../components/Gallery';
import Hero from '../components/Hero';

const HomeScreen = () => {
  const text = 'Your one stop shop for outdoor apparel and hiking gear.';
  const title = 'Start Your Next Adventure.';

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      const { data } = await axios.get('/api/categories');
      setLoading(false);
      setCategories(data);
    };
    fetchCategories();
  }, []);
  return (
    <>
      <Hero text={text} title={title} />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <Container className='py-3'>
          <h2 className='home-title'>Popular Categories</h2>
          <Row>
            {categories.map((cat) => (
              <Col key={cat._id} sm={12} md={6} lg={4} xl={4}>
                <Category cat={cat} />
              </Col>
            ))}
          </Row>
          <h2 className='home-title py-4'>Gallery</h2>
          <Gallery />
        </Container>
      )}
    </>
  );
};

export default HomeScreen;
