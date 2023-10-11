import {React} from "react";
import { Container, Row, Col} from "react-bootstrap";

import emotions from '../../assets/Projects/Emotions.jpeg'
import chocolates from "../../assets/Projects/Chocolates.png";
import payment from "../../assets/Projects/Payment.png";
import colors from "../../assets/Projects/Colors.png";

import ProjectCard from './ProjectCard';

function Project(){
    return(
        <Container fluid className>
            <h1 style={{textAlign: "center"}}>My Recent Works</h1>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }} >
                <Col md={6} className="project-card">
                    <ProjectCard
                    imgPath={emotions}
                    title="Facial Emotion Recognition"
                    description="Developed a machine
                    learning model to analyse facial cues from static images in order to classify emotions from Kaggle's FER dataset. 
                    Tech Stack: Numpy, Pandas, Tensorflow, Keras, OpenCV"
                    ghLink="https://github.com/SmritiVM/SASS-FER"/>
                </Col>
                <Col md={6} className="project-card">
                    <ProjectCard
                    imgPath={chocolates}
                    title="Chocolate Rating Analysis"
                    description="Analyzed trends in Chocolate ratings as measured by countries,
                    companies and ingredients by cleaning and parsing the data, performing exploratory analysis and hypothesis testing
                    Tech Stack: R"
                    ghLink="https://github.com/SmritiVM/Chocolate-analysis"/>
                </Col>
                <Col md={6} className="project-card">
                    <ProjectCard
                    imgPath={payment}
                    title="PaySecure"
                    description="Developed a dummy digital payment application to demonstrate 3-factor authentication by employing
                    GPS-tracking and OTP-verification
                    Tech Stack: Android Studio, Firebase"
                    ghLink="https://github.com/SmritiVM/PaySecure"/>
                </Col>
                <Col md={6} className="project-card">
                    <ProjectCard
                    imgPath={colors}
                    title="Color Picker"
                    description="A beginner-friendly react project that sets the background color of the
                     page based on the button pressed. Tech Stack: HTML, CSS, ReactJS"
                    ghLink="https://github.com/SmritiVM/ColorPicker"/>
                </Col>
            </Row>
        </Container>
    )
}
export default Project;