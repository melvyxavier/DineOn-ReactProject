import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Reviews({ reviewData }) {
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Reviews</Accordion.Header>
                    <Accordion.Body>
                        {reviewData?.map(i => (
                            <div style={{fontSize:'12px'}}>
                                <p>Name: {i.name}</p>
                                <p>Name: {i.date}</p>
                                <p>Name: {i.rating}</p>
                                <p>Name: {i.comments}</p>
                                <hr />
                            </div>

                        ))
                        }
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Reviews