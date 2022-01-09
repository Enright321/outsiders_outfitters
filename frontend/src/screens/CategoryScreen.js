import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';
import Products from '../components/Products';
const pathname = window.location.pathname.split('/')[1];

const CategoryScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const { data } = await axios.get('/api/products');
      setLoading(false);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  let boots = products.filter((item) => item.category === 'Boots');
  let tents = products.filter((item) => item.category === 'Tents');
  let accessories = products.filter((item) => item.category === 'Accessories');
  let backpacks = products.filter((item) => item.category === 'Backpacks');
  let hammocks = products.filter((item) => item.category === 'Hammocks');
  let jackets = products.filter((item) => item.category === 'Jackets');

  return (
    <Container className='py-3'>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <Link className='btn btn-dark my-3' to='/'>
            Home
          </Link>

          {pathname === 'Boots' ? (
            <Row>
              {boots.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
                  <Products product={product} />
                </Col>
              ))}
            </Row>
          ) : pathname === 'Tents' ? (
            <Row>
              {tents.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
                  <Products product={product} />
                </Col>
              ))}
            </Row>
          ) : pathname === 'Accessories' ? (
            <Row>
              {accessories.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
                  <Products product={product} />
                </Col>
              ))}
            </Row>
          ) : pathname === 'Jackets' ? (
            <Row>
              {jackets.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
                  <Products product={product} />
                </Col>
              ))}
            </Row>
          ) : pathname === 'Backpacks' ? (
            <Row>
              {backpacks.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
                  <Products product={product} />
                </Col>
              ))}
            </Row>
          ) : (
            pathname === 'Hammocks' && (
              <Row>
                {hammocks.map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
                    <Products product={product} />
                  </Col>
                ))}
              </Row>
            )
          )}
        </>
      )}
    </Container>
  );
};

export default CategoryScreen;
