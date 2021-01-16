import React from "react";
import Card from 'react-bootstrap/Card';
import Container from "../Container/index";
import Row from "../Row/index";
import Col from "../Col/index";


function ErrorMessage() {
return ( <Container>
    <Row>
        <Col size="md-12">
            <Card>
                <Row>
                    <Col size="md-12">
                    <h1 style={{textAlign:"center", fontSize:"50px"}}>Error 404: PAGE NOT FOUND!</h1>
                    </Col>
                    <Col size="md-12">
                    <p style={{textAlign:"center"}}>This is not the correct path. Please use the root path "/"</p>
                    </Col>
                </Row>
            </Card>
        </Col>
    </Row>
</Container>
);
};

export default ErrorMessage;