"use client"

import Footer from "@/app/common/footer";
import Image from "next/image";
import { Col, Container, Row, Button } from 'react-bootstrap'
import ProductImg from '/public/assets/poster.jpg'

// import Image from "next/image";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Container className="mt-3">
        <Row xs={1} md={2} className="g-4">
          <Col>
            <p className="fs-4 fw-bold mb-0 mt-3">All Inclusive Flyers and Brochures</p>
            <p>PDP all-inclusive-flyers-Brochures</p>
            <Image src={ProductImg} alt="product imag" className="img-fluid" />
            <div className="bg-body-tertiary d-flex py-2 justify-content-around">
              <p>Not finding what you're looking for?
              </p>
              <Button style={{ background: '#1994d2', fontSize: '12px' }} className="fw-semibold" type='button' >GET A CUSTOM ESTIMATE</Button>
            </div>
          </Col>
          <Col>
          <div className="option-Tab">
            <p className="fw-semibold product-option-tab ">Product Option</p>
            <p className="active">Sites Shiping</p>
            <div>
              
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
