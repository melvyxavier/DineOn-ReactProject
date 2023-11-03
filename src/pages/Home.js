import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RestCard from '../components/RestCard'
import { Col, Row } from 'react-bootstrap'


function Home() {
    const [restaurants, setRestaurants] = useState([])

    const fetchData = async () => {
        const result = await axios.get('/restaurants.json')
        setRestaurants(result.data.restaurants);
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(restaurants);

    return (
        <div>

            <Row className='mt-5 ms-5 me-5' style={{
                fontFamily: 'Bellefair, serif', borderRadius: '50px'
            }}>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <p className='mt-5' style={{ fontSize: '20px', color: 'black', fontWeight: '700' ,padding:'50px'}}>
                        Welcome to Dine On, your ultimate destination for culinary exploration and gastronomic 
                        adventures! Join us as we embark on a delectable expedition, one bite at a time!
                    </p>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <img className='me-3 ms-3 mb-4 mt-4' style={{ width: '90%',height: '280px',border:'1px solid white'
                    ,borderRadius:'55px'}}
                        src="https://i.postimg.cc/15G1kt4W/Simplypix.jpg" alt="" />
                </Col>

            </Row >
            <Row>
                <h1 className='mt-5' style={{textAlign:'center',color:'white'}}>Choose Your Favorite!</h1>
            </Row>
            <Row className='me-3 ms-3 mt-5'>
                {
                    restaurants.map(i => (
                        <Col className='ps-4 mt-3 p-2' lg={3} md={4} sm={6}>
                            <RestCard item={i}></RestCard>
                        </Col>
                    ))
                }


            </Row>
        </div >


    )
}



export default Home
