import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
    return null;
  });
  return images;
}
export default function Gallery1() {
  const images = importAll(require.context('../assets/pictures', false, /\.(png|jpe?g|svg)$/));
  const imageList = Object.entries(images);
  console.log(imageList);

  return (
    <div id="gallery" style={{ paddingTop: '5rem', backgroundColor: '#f4f4f4' }}>
      <div style={{ width: '100%', height: '50%' }}>
        <div className="reqHeading">
          <h2>GALERII</h2>
        </div>

        <Carousel>
          {imageList.map(([imageName, imagePath], index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100" height={700} src={imagePath} alt={imageName} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
