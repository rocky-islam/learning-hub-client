import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <Container className='my-4'>
                <div className='text-center text-secondary'>
                    <h2>Explore Our Blog</h2>
                </div>
                <div className='p-4 bg-info rounded m-4'>
                    <p>Q-1. What is CORS?</p>
                    <p><span className='fw-semibold'>Answer: </span>
                    CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
                    Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.
                    </p>

                </div>
                <div className='p-4 bg-info rounded m-4'>
                    <p>Q-1. How does the private route work?</p>
                    <p><span className='fw-semibold'>Answer: </span>
                    The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated Logged in.
                    </p>

                </div>
                <div className='p-4 bg-info rounded m-4'>
                    <p>Q-1. Why are you using firebase? What other options do you have to implement authentication?</p>
                    <p><span className='fw-semibold'>Answer: </span>
                    Firebase provides detailed documentation and cross-platform SDKs to help you build and ship apps on Android, iOS, the web, C++, and Unity.Firebase helps you develop high-quality apps, grow your user base,. Each feature works independently, and they work even better together. <br /><br/>
                    Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints. <br />
                    <span>
                        5 Common Authentication Types
                        <li>Password-based authentication. Passwords are the most common methods of authentication.</li>
                        <li>Multi-factor authentication.</li>
                        <li>Certificate-based authentication.</li>
                        <li>Biometric authentication.</li>
                        <li>Token-based authentication.</li>
                    </span>

                    </p>

                </div>
                <div className='p-4 bg-info rounded m-4'>
                    <p>Q-1. What is Node? How does Node work?</p>
                    <p><span className='fw-semibold'>Answer: </span>
                        Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications. <br /> <br />
                        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                    </p>

                </div>
            </Container>
        </div>
    );
};

export default Blog;