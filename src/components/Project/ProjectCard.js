import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { BsGithub } from "react-icons/bs";

import './ProjectCard.css';

function ProjectCard(props){
    return(
        <Card className="project-card">
            <Card.Img variant = "top" src = {props.imgPath} alt = "card-img" className="card-img"/>
            <Card.Body>
                <Card.Title className="card-title">{props.title}</Card.Title>
                <Card.Text className = "card-description">{props.description}</Card.Text>
                <Button variant = "primary" href = {props.ghLink} target = "_blank">
                    <BsGithub /> &nbsp;
                    {"Github"}
                </Button>
                {"\n"}
                {"\n"}
            </Card.Body>
        </Card>
    )
}

export default ProjectCard;