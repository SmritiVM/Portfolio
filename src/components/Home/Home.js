import {React} from "react";
import { Container, Row, Col} from "react-bootstrap";
import Typewriter from "typewriter-effect";


import "./Home.css";

function Home(){
    return(
        <section>
            <Container fluid className="home">
                <Container>
                    <Row>
                        <Col md = {7} className="home-content">
                            <p style = {{paddingBottom: 15}} className="heading">
                                Hello There!👋
                            </p>
                            
                            <p className="heading-name">
                                I'm <strong className="main-name">Smriti Madangarli</strong>
                            </p>
                            <Typewriter  
                            options = {{strings: [
                                "Software Developer",
                                "Tech Enthusiast",
                                "Student Ambassador"],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50}}/>
                        </Col>
                        
                    </Row>
                </Container>
            </Container>
        </section>
    )
}
export default Home;