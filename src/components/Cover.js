import React from 'react';
import { Container } from 'react-bootstrap';
//import logo from '../assets/bilder.png';

export default function Cover() {
  return (
    <Container
      id="cover"
      fluid
      style={{
        height: '1080px',
        width: '100%',
      }}
    >
      <div
        style={{
          width: '50%',
          height: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          flexDirection: 'column',
          marginLeft: '6%',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '50%',
            color: 'black',
          }}
          className="d-flex flex-column"
        >
          <h1
            className="meie"
            style={{
              fontSize: '80px',
            }}
          >
            Meie jaoks pole miski võimatu!
          </h1>
          <a href="#teenused" className="my-button">
            Rohkem detaile
          </a>
        </div>
      </div>
    </Container>
  );
}
