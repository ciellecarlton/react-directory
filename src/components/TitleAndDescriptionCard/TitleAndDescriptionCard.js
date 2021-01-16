import React from "react";
import Card from 'react-bootstrap/Card';
import Container from "../Container/index";
import Row from "../Row/index";
import Col from "../Col/index";


function TitleAndDescriptionCard() {
return ( <Container>
    <Row>
        <Col size="md-12">
            <Card>
                <Row>
                    <Col size="md-12">
                    <h1 style={{textAlign:"center", fontSize:"50px", color:"darkblue"}}>Employee Directory</h1>
                    </Col>
                    <Col size="md-12">
                    <p style={{textAlign:"center"}}>Use this App to Sort your Employees by age or to filter by Male/Female!</p>
                    </Col>
                </Row>
            </Card>
        </Col>
    </Row>
</Container>
);
};

export default TitleAndDescriptionCard;