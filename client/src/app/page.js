"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Col, Container, Row, Button, Form } from 'react-bootstrap'
import ProductImg from '/public/assets/poster.jpg'

// import Image from "next/image";
// import styles from "./page.module.css";

export default function Home() {
  const [title, setTitile] = useState('');
  const [size, setSize] = useState('');
  const [stock, setStock] = useState('');
  const [colorspec, setColorspec] = useState('');
  const [coating, setCoating] = useState('');
  const [folding_options, setFolding_options] = useState('');
  const [digital_proofs, setDigital_proofs] = useState('');
  const [job_samples, setJob_samples] = useState('');
  const [titleOptions, setTitileOption] = useState([])

  useEffect(() => {
    getTitle()
    getData();
  }, [title])

  const getTitle = async () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    fetch("http://localhost:8000/title", requestOptions)
      .then((response) => response.text())
      .then((result) => setTitileOption(JSON.parse(result)))
      .catch((error) => console.error(error));
  }
  const getData = async (e) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      title : title,
      size : size,
      stock:stock,
      colorspec:colorspec,
      coating:coating,
      folding_options:folding_options,
      digital_proofs:digital_proofs,
      job_samples:job_samples
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    fetch("http://localhost:8000/getData", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }
  const handleSelectChange = (event) => {
    const { name, value } = event.target;  
    switch (name) {
      case "title":
        setTitile(value);
        break;
      case "size":
        setSize(value);
        break;
      case "stock":
        setStock(value);
        break;
      // Add cases for other select fields as needed
      default:
        break;
    }
  };
 
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
            </div>
            <div>
              <div className="d-flex justify-content-betwwen align-items-center mt-4">
                <label className="fw-semibold" style={{ width: '30%' }}>Title<span className="text-danger">*</span></label>
                <Form.Select onChange={handleSelectChange} name="title" value={title} style={{ width: '70%' }} aria-label="Default select example">
                  <option>Open this select menu</option>
                  {Array.isArray(titleOptions) && titleOptions.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}

                </Form.Select>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
