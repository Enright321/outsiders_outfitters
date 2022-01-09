import React, { useState, useEffect } from 'react';
import { Row, Container } from 'react-bootstrap';
import axios from 'axios';
import ProductDescription from '../components/ProductDescription';

let pathnameCat = window.location.pathname.split('/')[1];

const ProductScreen = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const { data } = await axios.get('/api/products');
      setLoading(false);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  let backpacks = products.filter((item) => item.category === 'Backpacks');
  let accessories = products.filter((item) => item.category === 'Accessories');
  let jackets = products.filter((item) => item.category === 'Jackets');
  let boots = products.filter((item) => item.category === 'Boots');
  let hammocks = products.filter((item) => item.category === 'Hammocks');
  let tents = products.filter((item) => item.category === 'Tents');

  return (
    <Container className='py-3'>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {pathnameCat === 'Backpacks' &&
            backpacks.map((item) => (
              <Row key={item._id}>
                <ProductDescription item={item} />
              </Row>
            ))}
          {pathnameCat === 'Accessories' &&
            accessories.map((item) => (
              <Row key={item._id}>
                <ProductDescription item={item} />
              </Row>
            ))}
          {pathnameCat === 'Boots' &&
            boots.map((item) => (
              <Row key={item._id}>
                <ProductDescription item={item} />
              </Row>
            ))}
          {pathnameCat === 'Hammocks' &&
            hammocks.map((item) => (
              <Row key={item._id}>
                <ProductDescription item={item} />
              </Row>
            ))}
          {pathnameCat === 'Jackets' &&
            jackets.map((item) => (
              <Row key={item._id}>
                <ProductDescription item={item} />
              </Row>
            ))}
          {pathnameCat === 'Tents' &&
            tents.map((item) => (
              <Row key={item._id}>
                <ProductDescription item={item} />
              </Row>
            ))}
        </>
      )}
    </Container>
  );
};

export default ProductScreen;
