import React, { Fragment } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap';
import PIC from './assets/26720.jpg';
import BANNER from './assets/ban.jpg'; // import the banner image

const Home = () => {
  return (
    <>
      <Fragment>
        <main className=" ">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ backgroundImage: `url(${BANNER})`, backgroundSize: 'cover', height: '200px' }} // add banner image as background
          >
          </div>
          <Container className="py-5">
            <Row className="justify-content-center align-items-center">
              <Col xs={12} md={6} className="mb-5 mb-md-0">
                <Card>
                  <CardBody>
                    <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">
                      "Resilient-Response: Strengthening Communities to Withstand Natural Disasters"
                    </CardTitle>
                    <CardText className="text-secondary mb-4" style={{ fontSize: '0.75rem' }}>
                    Resilient Response is a disaster management system that focuses on building resilient communities that are prepared to withstand and recover from natural disasters. Our approach is rooted in the belief that a community that is well-prepared and well-equipped can respond effectively to natural disasters and minimize the damage and loss of life.

                    Through our system, we provide resources, training, and support to help communities build resilience and prepare for natural disasters. Our comprehensive approach includes safety tips, notifications, multi-language support, location information, emergency contact numbers, routes and shelter information, as well as resources and support mechanisms to help people cope with the aftermath of a natural disaster.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} md={6} className="text-center">
                <CardImg top width="50%" height="80%" src={PIC} alt="banner" />
              </Col>
            </Row>
          </Container>
        </main>
      </Fragment>
    </>
  );
};

export default Home;
