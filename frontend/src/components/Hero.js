import React from 'react';
import { Container } from 'react-bootstrap';

const Hero = ({ text, title }) => {
  return (
    <div className='hero-image'>
      <Container>
        <div className='d-flex justify-content-end align-items-center'>
          <div className='info-box'>
            Create an account to order online and have items shipped directly to
            your door!
          </div>
        </div>
        <div className='d-flex justify-content-start align-items-center'>
          <div>
            <h1 className='py-3 hero-text'>{title}</h1>
            <p className='hero-text'>{text}</p>
            <div>
              <button className='btn'>Shop Men's</button>
              <button className='btn'>Shop Women's</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
Hero.defaultProps = {
  title: 'Start Your Next Adventure.',
  text: 'Your one stop shop for outdoor apparel and hiking gear.',
};

export default Hero;
