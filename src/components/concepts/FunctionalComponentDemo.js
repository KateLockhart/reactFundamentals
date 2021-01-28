import React from 'react';
import {
    Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';

const FunctionalComponentDemo = () => {
    return (
        <Container className="main">
            <Row>
                <Col xs="12">
                    <h1>Functional Component</h1>
                    <p>Functional components are the primary tool in React to build a small, modular piece of your page.</p>
                    <dl>
                        <dt>Can use suate:</dt>
                        <dd>With the 'useState' hook, functional components can now both render a display to the page and update the information to be shown.</dd>
                        <dt>No 'this' keyword:</dt>
                        <dd>Older class components use 'this', functional components have no 'this'object. </dd>
                        <dt>Can use effects:</dt>
                        <dd>With the 'useEffect' hook, functional components can perform side effects with any prop or state changes.</dd>
                        <dt>return():</dt>
                        <dd>Must return a single element, but this element may have nested elements inside.</dd>
                    </dl>
                </Col>
            </Row>
            <hr />
            <h1>Challenge</h1>
            <Row>
                <Col md="6">
                    <HelloWorldFatArrow className="logo" />
                </Col>
                <Col md="6">
                    <HelloWorld />
                </Col>
            </Row>
        </Container>
    );
};

export default FunctionalComponentDemo;

//regular function
const HelloWorld = function () {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>Regular Function</CardTitle>
                    <CardSubtitle>A JS Library</CardSubtitle>
                    <CardText><pre>const HelloWorld = function()</pre>.</CardText>
                    <Button>Go somewhere, man</Button>
                </CardBody>   
            </Card>
        </div>
    )
};

//Fat Arrow Functional Component - 3 fewer lines.
const HelloWorldFatArrow = () =>
    <div>
        <Card>
            <CardBody>
                    <CardTitle>Fat Arrow Function</CardTitle>
                    <CardSubtitle>A JS Library</CardSubtitle>
                    <CardText><pre>const HelloWorld = () => </pre>.</CardText>
                    <Button>Go somewhere, firend</Button>
            </CardBody>
        </Card>
    </div>