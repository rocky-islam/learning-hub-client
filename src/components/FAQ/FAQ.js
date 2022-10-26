import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from "react-bootstrap/Accordion";

const FAQ = () => {
    return (
      <div className="mt-4">
        <Container className="text-center">
          <h2>React JS - FAQ</h2>
        </Container>
        <Container className="mt-4">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What is React JS?</Accordion.Header>
              <Accordion.Body>
                React JS - sometimes shortened to just ‘React’ is a JavaScript
                library created in 2011 by Facebook. It has been open source
                since 2013 - in addition to Facebook’s ongoing support and
                maintenance, there is also a growing community of developers and
                other actively-involved companies.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Is React JS a framework or a library?
              </Accordion.Header>
              <Accordion.Body>
                React JS is a library, not a framework. It focuses on the view
                layer of the MVC (Model-View-Controller) framework, so it is a
                part of creating a framework. That said, many people find that
                it has some features that enable it to help build or support
                larger frameworks. This is especially true when factoring in the
                wider ecosystem.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                What are React JS competitors?
              </Accordion.Header>
              <Accordion.Body>
                The main competitors to React JS are other JavaScript libraries
                with a focus on front-end web and mobile development. <br /> <br /> 
                These include: <br /><br />
                <span>
                    <li>InfernoJs</li>
                    <li>Angular</li>
                    <li>Preact</li>
                    <li>Vue.js</li>
                    <li>Elm</li>
                    <li>Riot</li>
                </span>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </div>
    );
};

export default FAQ;