import React from 'react';
import Teenused from '../components/Teenused';
import categories from '../data/categories.json';
import about from '../data/about.json';

export default function About() {
  return (
    <>
      <div id="description" style={{ backgroundColor: '#f4f4f4' }}>
        <div id="descBg">
          <div className="descContainer">
            <div className="descHeading">
              <div className="descHeadingColor">
                <h2>MEIE KOHTA JA TEENUSED</h2>
              </div>
            </div>
            <div className="descBoxes">
              <div className="descBox">
                <img src="img/MySpacepep.png" alt="logo" />
                <h3>TEENUSED</h3>
                <ul>
                  {categories.map((data, index) => (
                    <li key={index}>{data}</li>
                  ))}
                </ul>
                <i>
                  <a href="#teenused">Rohkem ...</a>
                </i>
              </div>
              {about.map((data, index) => (
                <div className="descBox" key={index}>
                  <img src={data.image} alt="logo" />
                  <h3>{data.title}</h3>
                  <p className="teenused">{data.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Teenused />
    </>
  );
}
