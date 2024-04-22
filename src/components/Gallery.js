import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import gallery1 from '../assets/fund.jpg';
import gallery2 from '../assets/maljar.jpg';
import gallery3 from '../assets/fasad.png';
import gallery4 from '../assets/tsokal.png';
import gallery5 from '../assets/k.jpg';

export default function Gallery() {
  return (
    <div id="gallery" style={{ paddingTop: '5rem', backgroundColor: '#f4f4f4' }}>
      <div style={{ width: '100%', height: '50%' }}>
        <div className="reqHeading">
          <h2>GALERII</h2>
        </div>

        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100 " height={700} src={gallery1} alt="ship" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" height={700} src={gallery2} alt="drink" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" height={700} src={gallery3} alt="beach" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" height={700} src={gallery4} alt="beach" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" height={700} src={gallery5} alt="bilder" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
