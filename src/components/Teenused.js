import React from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';
import teenused from '../data/teenused.json';
import categories from '../data/categories.json';

export default function ServicesList() {
  return (
    <div id="teenused" style={{ backgroundColor: '#f4f4f4' }} className="mt-0 pt-5 pb-3">
      <hr />
      <Container>
        <div className="reqHeading">
          <h2>TEENUSED</h2>
        </div>
        <div className="teenusBox">
          <Tab.Container defaultActiveKey={categories[0]}>
            {/*defaultActiveKey="0"*/}
            <Row>
              <Col sm={4} style={{ borderRight: '2px solid grey' }}>
                <Nav variant="pills" className="flex-column me-2">
                  {categories.map((value, index) => (
                    <Nav.Item>
                      <Nav.Link eventKey={value} style={{ textAlign: 'left' }}>
                        {value}
                      </Nav.Link>
                      {/*eventKey={i}*/}
                    </Nav.Item>
                  ))}
                </Nav>
              </Col>
              <Col sm={8}>
                <Tab.Content className="mt-3">
                  {teenused.map((data) => (
                    <Tab.Pane eventKey={data.title}>
                      <h3 className="mb-5">{data.title}</h3>
                      <img src={data.image} Alt={data.title} style={{ width: '350px' }} />
                      <p
                        className="mt-5"
                        style={{ textAlign: 'justify', fontSize: '20px', lineHeight: '1.7' }}
                      >
                        {data.decription}
                      </p>
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </Container>
    </div>
  );
}
