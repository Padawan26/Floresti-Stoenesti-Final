import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

function TransparentaDecizionala() {
    const openPDF = (pdfLink) => {
        window.open(pdfLink, '_blank');
    };

    return (
        <Container className="mt-5">
            <h1 className="mb-4">Transparența Decizională</h1>

            <Row className="mb-4">
                <Col>
                    <h2>Rapoarte de aplicare a legii nr. 52/2003</h2>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item action onClick={() => openPDF('https://staging.floresti-stoenesti.ro/wp-content/uploads/2024/04/Raport-2022.pdf')}>
                                Raport 2022
                            </ListGroup.Item>
                            <ListGroup.Item action onClick={() => openPDF('https://staging.floresti-stoenesti.ro/wp-content/uploads/2024/04/Raport-2023.pdf')}>
                                Raport 2023
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h2>Rapoarte de aplicare a legii nr. 544/2001</h2>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item action onClick={() => openPDF('https://staging.floresti-stoenesti.ro/wp-content/uploads/2024/04/RAPORT-LEGEA-544-2021.pdf')}>
                                Raport Legea 544 din 2021
                            </ListGroup.Item>
                            <ListGroup.Item action onClick={() => openPDF('https://staging.floresti-stoenesti.ro/wp-content/uploads/2024/04/RAPORT-LEGEA-544-2022.pdf')}>
                                Raport Legea 544 din 2022
                            </ListGroup.Item>
                            <ListGroup.Item action onClick={() => openPDF('https://staging.floresti-stoenesti.ro/wp-content/uploads/2024/04/RAPORT-LEGEA-544-2023.pdf')}>
                                Raport Legea 544 din 2023
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default TransparentaDecizionala;