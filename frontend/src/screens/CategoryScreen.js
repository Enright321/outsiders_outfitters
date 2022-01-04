import React from 'react';
import { Col, Row } from 'react-bootstrap';
import backpacks from '../data/backpacks';
import boots from '../data/boots';
import hammocks from '../data/hammocks';
import jackets from '../data/jackets';
import tents from '../data/tents';
import accessories from '../data/accessories';
import Products from '../components/Products';

const pathname = window.location.pathname.split('/')[2];
console.log(typeof pathname);

const CategoryScreen = () => {
  return (
    <>
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
  );
};

export default CategoryScreen;
