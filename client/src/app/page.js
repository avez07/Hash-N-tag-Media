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
  const [rates, setRates] = useState('0.179');
  const [marketprice, setMarketPrice] = useState(0);



  const [titleOptions, setTitileOption] = useState([])
  const [sizeOptions, setSizeOption] = useState([])
  const [stockOptions, setStockOption] = useState([])
  const [colorspecOptions, setColorspecOption] = useState([])
  const [coatingOptions, setCoatingOption] = useState([])
  const [folding_optionsOptions, setFolding_optionsOption] = useState([])
  const [digital_proofsOptions, setDigital_proofsOption] = useState([])
  const [job_samplesOptions, setJob_samplesOption] = useState([])


  useEffect(() => {
    getData();
    console.log(sizeOptions);
  }, [title, size, stock, colorspec, coating, folding_options, digital_proofs, job_samples])

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
      title: title,
      size: size,
      stock: stock,
      colorspec: colorspec,
      coating: coating,
      folding_options: folding_options,
      digital_proofs: digital_proofs,
      job_samples: job_samples
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    fetch("http://localhost:8000/getData", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result[0].rate) {
          setRates(result[0].rate);
        }
        switch (true) {
          case result[0].hasOwnProperty('title'):
            setTitileOption(result.map((items) => items.title))
            break;
          case result[0].hasOwnProperty('size'):
            setSizeOption(result.map((items) => items.size))
            break;
          case result[0].hasOwnProperty('stock'):
            setStockOption(result.map((items) => items.stock))
            break;
          case result[0].hasOwnProperty('colorspec'):
            setColorspecOption(result.map((items) => items.colorspec))
            break;
          case result[0].hasOwnProperty('coating'):
            setCoatingOption(result.map((items) => items.coating))
            break;
          case result[0].hasOwnProperty('folding_options'):
            setFolding_optionsOption(result.map((items) => items.folding_options))
            break;

          case result[0].hasOwnProperty('digital_proofs'):
            setDigital_proofsOption(result.map((items) => items.digital_proofs))
            break;
          case result[0].hasOwnProperty('job_samples'):
            setJob_samplesOption(result.map((items) => items.job_samples))
            break;

          default:
            break;
        }
      })
      .catch((error) => console.error(error));
  }
  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "title":
        setTitile(value); setSize(''); setStock(''); setColorspec(''); setCoating(''); setFolding_options(''); setDigital_proofs(''); setJob_samples('')
        break;
      case "size":
        setSize(value); setStock(''); setColorspec(''); setCoating(''); setFolding_options(''); setDigital_proofs(''); setJob_samples('');
        break;
      case "stock":
        setStock(value); setColorspec(''); setCoating(''); setFolding_options(''); setDigital_proofs(''); setJob_samples('');
        break;
      case "Colorspec":
        setColorspec(value); setCoating(''); setFolding_options(''); setDigital_proofs(''); setJob_samples('');
        break;
      case "Coating":
        setCoating(value); setFolding_options(''); setDigital_proofs(''); setJob_samples('');
        break;
      case "Folding_options":
        setFolding_options(value); setDigital_proofs(''); setJob_samples('');
        break;
      case "Digital_proofs":
        setDigital_proofs(value); setJob_samples('');
        break;
      case "Job_samples":
        setJob_samples(value);
        break;
        case "Mp":
          setMarketPrice(value)
      // Add cases for other select fields as needed
      default:
        break;
    }
    // getData();
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
                  <option>Stlect tittle</option>
                  {Array.isArray(titleOptions) && titleOptions.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </Form.Select>
              </div>
              <div className="d-flex justify-content-betwwen align-items-center mt-4">
                <label className="fw-semibold" style={{ width: '30%' }}>Size<span className="text-danger">*</span></label>
                <Form.Select onChange={handleSelectChange} disabled={!title ? true : false} name="size" value={size} style={{ width: '70%' }} aria-label="Default select example">
                  <option>Select size</option>
                  {Array.isArray(sizeOptions) && sizeOptions.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </Form.Select>
              </div>
              <div className="d-flex justify-content-betwwen align-items-center mt-4">
                <label className="fw-semibold" style={{ width: '30%' }}>Stock<span className="text-danger">*</span></label>
                <Form.Select onChange={handleSelectChange} disabled={!size ? true : false} name="stock" value={stock} style={{ width: '70%' }} aria-label="Default select example">
                  <option>Slect Stock</option>
                  {Array.isArray(stockOptions) && stockOptions.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </Form.Select>
              </div>
              <div className="d-flex justify-content-betwwen align-items-center mt-4">
                <label className="fw-semibold" style={{ width: '30%' }}>Colorspec<span className="text-danger">*</span></label>
                <Form.Select onChange={handleSelectChange} disabled={!stock ? true : false} name="Colorspec" value={colorspec} style={{ width: '70%' }} aria-label="Default select example">
                  <option>Select Colorspec</option>
                  {Array.isArray(colorspecOptions) && colorspecOptions.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </Form.Select>
              </div>
              <div className="d-flex justify-content-betwwen align-items-center mt-4">
                <label className="fw-semibold" style={{ width: '30%' }}>Coating<span className="text-danger">*</span></label>
                <Form.Select onChange={handleSelectChange} disabled={!colorspec ? true : false} name="Coating" value={coating} style={{ width: '70%' }} aria-label="Default select example">
                  <option>Select Coating</option>
                  {Array.isArray(coatingOptions) && coatingOptions.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </Form.Select>
              </div>
              <div className="d-flex justify-content-betwwen align-items-center mt-4">
                <label className="fw-semibold" style={{ width: '30%' }}>Folding Options<span className="text-danger">*</span></label>
                <Form.Select onChange={handleSelectChange} disabled={!coating ? true : false} name="Folding_options" value={folding_options} style={{ width: '70%' }} aria-label="Default select example">
                  <option>Select Folding Option</option>
                  {Array.isArray(folding_optionsOptions) && folding_optionsOptions.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </Form.Select>
              </div>

              <div className="d-flex justify-content-betwwen align-items-center mt-4">
                <label className="fw-semibold" style={{ width: '30%' }}>Digital Prove<span className="text-danger">*</span></label>
                <Form.Select onChange={handleSelectChange} disabled={!folding_options ? true : false} name="Digital_proofs" value={digital_proofs} style={{ width: '70%' }} aria-label="Default select example">
                  <option>Select Digital Prove</option>
                  {Array.isArray(digital_proofsOptions) && digital_proofsOptions.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </Form.Select>
              </div>
              <div className="d-flex justify-content-betwwen align-items-center mt-4">
                <label className="fw-semibold" style={{ width: '30%' }}>Job Sample<span className="text-danger">*</span></label>
                <Form.Select onChange={handleSelectChange} disabled={!digital_proofs ? true : false} name="Job_samples" value={job_samples} style={{ width: '70%' }} aria-label="Default select example">
                  <option>Select Job Sample</option>
                  {Array.isArray(job_samplesOptions) && job_samplesOptions.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </Form.Select>
              </div>
            </div>

            <div>
              <table id="My-table"className="mt-4 text-center">
                <thead>
                  <tr>
                    <th>Run</th>
                    <th>Unit</th>
                    <th>Total</th>
                    <th>Market Price <input name="Mp"  value={marketprice} onChange={handleSelectChange}/>%</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 5 }, (_, index) => (
                    <tr key={index}>
                      <td>{100 + index * 100}</td>
                      <td>{rates}</td>
                      <td>{((100 + index * 100) * rates).toFixed(3)}</td>
                      <td>{(((100 + index * 100) * rates)* (1 + marketprice / 100)).toFixed(3)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
