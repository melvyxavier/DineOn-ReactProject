import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Col, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';


function SingleView() {

  //state
  const [AllData, setData] = useState([])

  //create an object for useparams
  const { id } = useParams()
  console.log(id);

  const fetchAllDatas = async () => {
    const result = await axios.get('/restaurants.json')
    setData(result.data.restaurants)
  }

  useEffect(() => {
    fetchAllDatas()
  }, [])

  //find the object of that particular item
  const singleData = AllData.find(i => i.id == id)
  console.log(singleData);

  return (
    <div>
      {singleData &&
        <Row style={{ border: '1px white solid', backgroundColor: 'black' }} className='p-3 p-md-5 mt-5 me-1 ms-1'>
          <Col xs={12} sm={12} md={6} lg={6} className='p-3'>
            <img style={{ width: '100%', height: 'auto', maxWidth: '100%', border: '2px solid white' }} src={singleData.photograph} alt="" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} className='p-3'>
            <h1 style={{ color: 'lightskyblue' }} className='text-center mt-3'>{singleData.name}</h1>
            <ListGroup className='fs-5 mt-3'>
              <ListGroup.Item>Address: <span style={{ color: 'indigo' }}> {singleData.address}</span></ListGroup.Item>
              <ListGroup.Item>Cuisine: <span style={{ color: 'indigo' }}> {singleData.cuisine_type}</span></ListGroup.Item>
              <ListGroup.Item>Neighborhood: <span style={{ color: 'indigo' }}> {singleData.neighborhood}</span></ListGroup.Item>
              <ListGroup.Item>
                <OperatingHour data={singleData.operating_hours} className='btn w-100'></OperatingHour>
              </ListGroup.Item>
              <ListGroup.Item>
                <Reviews reviewData={singleData.reviews}></Reviews>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      }
    </div>
  )
}

export default SingleView