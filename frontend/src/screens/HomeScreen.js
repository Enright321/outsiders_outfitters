import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listCategories } from '../actions/categoryActions';
import { Row, Col, Container } from 'react-bootstrap';
import Category from '../components/Category';
import Gallery from '../components/Gallery';
import Hero from '../components/Hero';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.categoryList);
  const { loading, error, categories } = categoryList;

  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);
  return (
    <>
      <Hero />
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>Error</h3>
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
