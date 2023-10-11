import {React} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import {FaLinkedinIn} from "react-icons/fa";

import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

import question from "../../assets/About/Question_Mark.png";
import skills from "../../assets/About/Skills.png";
import tools from "../../assets/About/Tools.png";
import connect from "../../assets/About/Connect.png";

import './About.css';

function About(){
    return(
        <Container fluid >
            <Container>
                <Row style = {{justifyContent: "center", padding: "10px"}}>
                    <Col md = {7} style = {{justifyContent: "center",
                    paddingTop: "30px",
                    paddingBottom: "50px"}}
                    className = "about">
                    <h1>Who am I?</h1>
                    <p className="content">An individual who'd love to explore problem solving and dive deeper into the world of technology. 
                    I am currently in my 3rd year of college, pursuing Computer Science and Engineering and a really keen learner.
                    Problems, we all encounter them, but the thrill that comes from being able to successfully crack one or at least learn through the process - that is what drives me. 
                    I enjoy competitive coding and would love to enhance my knowledge in the fields of machine learning, web development and game development.
                    
</p>
                    </Col>
                    <Col md = {5} style={{ paddingTop: "120px", paddingBottom: "50px" }}>
                        <img src = {question}
                            alt = "home pic"
                            className="image"
                            style = {{maxHeight: "450px" ,marginTop: "70px"}}/>
                    </Col>
                </Row>

                <Row style = {{justifyContent: "center", padding: "10px"}}>
                    <Col md = {5} style={{ paddingTop: "150px", paddingBottom: "50px" , paddingLeft: "50px"}}>
                        <img src = {skills}
                            alt = "home pic"
                            className="image"
                            style = {{maxHeight: "450px"}}/>
                    </Col>
                    <Col md = {7} style = {{justifyContent: "center",
                    paddingTop: "30px",
                    paddingBottom: "50px"}}>
                    <h1>My Skillset</h1>
                    <Techstack/>
                    
                    </Col>
                    
                </Row>

                <Row style = {{justifyContent: "center", padding: "10px"}}>
                    
                    <Col md = {7} style = {{justifyContent: "center",
                    paddingTop: "30px",
                    paddingBottom: "50px"}}>
                    <h1>Tools I use</h1>
                    <Toolstack/></Col>
                    <Col md = {5} style={{ paddingTop: "50px", paddingBottom: "50px" }}>
                        <img src = {tools}
                            alt = "home pic"
                            className="image"
                            style = {{maxHeight: "450px"}}/>
                    </Col>
                    
                </Row>

                <Row style = {{justifyContent: "center", padding: "10px"}}>
                    <Col md = {5} style={{ paddingTop: "120px", paddingBottom: "50px" }}>
                        <img src = {connect}
                            alt = "home pic"
                            className="image"
                            style = {{maxHeight: "450px"}}/>
                    </Col>
                    <Col md = {7} style = {{justifyContent: "center",
                    paddingTop: "30px",
                    paddingBottom: "50px"}}
                    className = "about">
                    <h1>Connect with me</h1>
                    <Button variant = "primary" href = "https://github.com/SmritiVM" 
                    target = "_blank" className = "social-icons">
                        <BsGithub /> &nbsp;
                        {"Github"}
                    </Button>
                    <Button variant = "primary" href = "https://www.linkedin.com/in/smriti-madangarli-055481221/" 
                    target = "_blank" className = "social-icons">
                        <FaLinkedinIn /> &nbsp;
                        {"LinkedIn"}
                    </Button>
                    </Col>
                    
                </Row>
            </Container>
        </Container>
    )
}
export default About;