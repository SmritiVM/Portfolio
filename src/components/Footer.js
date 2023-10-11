import {React} from "react";
import { Container, Row, Col} from "react-bootstrap";
import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";

function Footer(){
    let date = new Date();
    let year = date.getFullYear();
    return(
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copyright">
                    <h4>Designed and Developed by Smriti Madangarli</h4>
                </Col>
                <Col md="4" className="footer-copyright">
                    <h4>Copyright © {year} SM</h4>
                </Col>
                <Col md = "4" className="footer-body">
                    <div className="footer-icons"><a
                    href="https://github.com/SmritiVM"
                    style={{ color: "white", padding: "5px" }}
                    target="_blank" 
                    rel="noopener noreferrer">
                    <AiFillGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/smriti-madangarli-055481221/"
                        style={{ color: "white" }}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FaLinkedinIn />
                    </a>
                    </div>
                </Col>

            </Row>
        </Container>
    )
}
export default Footer;